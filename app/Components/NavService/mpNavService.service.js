﻿/**
 * A set of AngularJS services related to navigation.
 * @module navigation
 */

(function () {
    "use strict";

    angular.module('mp.components.navService')
        .factory('mpNavService', mpNavService);

    /* @ngInject */
    function mpNavService($rootScope, $state, $stateParams, $q, $window, $location, mpLocalStorage) {

        /**
         * mpNavService plans handles a few things.
         *
         * <ul>
         *  <li>Build a tree structure based on the configurable tree of menus and navigation elements.</li>
         *  <li>Maintain breadcrumbs, a list of navigation items, that kinda represents the location within the application
         * and provides a parent child relationship between certain page items so they can interact in any way they like</li>
         *  <li>Handle situations like not signed in and page dirty.</li>
         * </ul>
         *
         * The breadcrumbs is array of items.
         * Tree is a tree of nodes where each node is { item : {}, children: node[] }.
         * An item has an id and a bunch of other properties. #todo formalise the item, maybe in a 'class'
         * Items are not shared between the tree and breadcrumbs, although items in each may have the same id.
         *
         * @class mpNavService
         */

        // array of test nav item ids to not clean up as the nav tree is updated
       
        var authId;
        var breadcrumb;
        var userAccount;
        var userName;
        var treeData;
        var menuTree;
        var currentMenuItem;
        var currentRootItem;
        // I think there is a little too much stuffed in this service!
        // todo - factor some things out
        // like theming, navtree, and actual navigation etc.
        var service = {
            /**
             * Counter that is incremented each time the navTree (or breadcrumb) is updated.
             * Handy for watching.
             * @memberof module:navigation.spNavService
             */
            
            getBreadcrumb: getBreadcrumb,
            getCurrentItem: getCurrentItem,

            getMenuTree: getMenuTree,
            getUserAccount: getUserAccount,
            getUserName: getUserName,
            getUserRole: getUserRole,
            setMenuTree: setMenuTree,
            setCurrentState: setCurrentState,
            getCurrentMenuItem: getCurrentMenuItem,
            getCurrentRootItem: getCurrentRootItem,
            reset: reset,
            resetMenuState: resetMenuState,
            navigateToState: navigateToState,
            navigateToSibling: navigateToSibling,
            navigateToChildState: navigateToChildState,
            navigateToParent: navigateToParent,
            navigateBack: navigateBack
        };

        function initialise() {           
            requestInitialNavTree();
        }

        function requestInitialNavTree() {            
            //TODO retrive data from web api
            treeData = [
               {
                   name: "Patients",
                   link: "/patients",
                   state: "patients",
                   role: "patientRole, allRole"
               }, {
                   name: "Donors",
                   link: "/donors",
                   state: "donors",
                   role: "donorRole, allRole"

               }, {
                   name: "Governance",
                   link: "/governance",
                   state: "governance",
                   role: "patientRole,donorRole, allRole",
                   subtree: [{
                       name: "Organisation Units",
                       link: "/governance/organisationunits",
                       state: "organisationUnits",
                       role: "patientRole,donorRole, allRole"
                   }]
               },
            {
                name: "Admin",
                link: "/admin",
                state: "admin",
                role: "patientRole,donorRole, allRole",
                subtree: [
                    {
                        name: "Reference Entities",
                        link: "/admin/refentitiesindex",
                        state: "refentitiesindex",
                        role: "patientRole,donorRole, allRole"
                    },
                    {
                    name: "User Admin",
                    link: "/admin/useradminindex",
                    state: "useradminindex",
                    role: "patientRole,donorRole, allRole"
                }]
            }];
        }

        function getUserAccount() {
            if (!userAccount)
                userAccount = mpLocalStorage ? mpLocalStorage.getObject("credential") : null;

            return userAccount;
        }

        function reset() {
            currentMenuItem = null;
            currentRootItem = null;
            menuTree = null;
            userAccount = null;
            mpLocalStorage.removeItem("credential");
        }

        function resetMenuState() {
            currentMenuItem = null;
            currentRootItem = null;
        }

        /**
         * @memberof module:navigation.mpNavService
         */
        function getBreadcrumb() {
            return breadcrumb;
        }

        /**
        * @memberof module:navigation.mpNavService
        */
        function getMenuTree() {

            if (!treeData)
                return null;

            if (!menuTree) {
                var userCredential = getUserAccount();
                if (userCredential) {                  
                    var userRole = userCredential.role;
                    menuTree = _.filter(treeData, function (tree) {
                        return tree.role.indexOf(userRole) != -1;
                    });

                } else {
                    menuTree = treeData;
                    console.warn('cannot load user credential from local storage');
                }
            }
               
            return menuTree;
        }

        /**
        * @memberof module:navigation.getUserName
        */
        function getUserName() {
            var userCredential = getUserAccount();
            if (userCredential) {
                return userCredential.name;
            }
        }

        /**
        * @memberof module:navigation.getUserRole
        */
        function getUserRole() {
            var userCredential = getUserAccount();
            if (userCredential) {
                return userCredential.role;
            }
        }

        /**
       * @memberof module:navigation.mpNavService
       */
        function setMenuTree(currentMenuTree) {
            menuTree = currentMenuTree;
        }

        function getCurrentRootItem() {
            return currentRootItem;
        }

        function getCurrentMenuItem (){
            return currentMenuItem;
        }

        function setCurrentState(state)
        {
            if (!treeData){                
                currentMenuItem = null;
                currentRootItem = null;
            } else {
                var item = null;
                var i;
                for (i = 0; item === null && i < treeData.length; i++) {
                    item = searchTreeByState(treeData[i], state);
                    if (item) {
                        currentMenuItem = item;
                        currentRootItem = treeData[i];
                    }
                }              
            }
        }
        
        function searchTreeByState(treeNode, state) {
            if (treeNode.state == state) {
                return treeNode;
            } else if (treeNode.subtree && treeNode.subtree.length > 0) {
                var result = null;
                var i;
                for (i = 0; result === null && i < treeNode.subtree.length; i++) {
                    result = searchTreeByState(treeNode.subtree[i], state);
                }                                
                return result;
            }
            return null;
        }


        /**
         * Get the nav item related to the current page.
         * @returns {item} nav item {id, name, selected, active}
         * @memberof module:navigation.mpNavService
         */
        function getCurrentItem() {
            return _.last(breadcrumb);
        }

        /**
         * Get the container item in the nav tree for the item that is the current page.
         * @returns {item} nav item {id, name, selected, active}
         * @memberof module:navigation.mpNavService
         */
        function getCurrentItemContainer() {
            var foundItem = _.last(breadcrumb);
            return foundItem || findInTreeByIdAndState(navTree, foundItem);
        }

        /**
         * @memberof module:navigation.mpNavService
         */
        function getParentItem() {
            var len = breadcrumb.length;
            return len > 1 ? breadcrumb[len - 2] : null;
        }

        /**
         * @memberof module:navigation.mpNavService
         */
        function getParentFolder() {
            var len = breadcrumb.length;
            return len > 2 ? breadcrumb[len - 3] : null;
        }

        /**
         * @memberof module:navigation.mpNavService
         */
        function getChildHref(stateName, id, params) {

            var stateParams = _.extend(params || {},
                {                   
                    id: id,
                    path: pathToPathString(breadcrumb)
                });

            return getStateHref(stateName, stateParams);
        }

        /**
         * @memberof module:navigation.mpNavService
         */
        function getViewHref(stateName, params) {

            var stateParams = _.extend(
                params || {},
                {
                    id: (_(breadcrumb).last() || { id: 0 }).id,
                    path: pathToPathString(_.initial(breadcrumb))
                });

            return getStateHref(stateName, stateParams);
        }

        /**
         * Navigate to a pages within the console. Note that the caller must pass in any breadcrumbing info. This
         * call would not normally be used. Use the sibling or child alternatives.
         * @memberof module:navigation.mpNavService
         */
        function navigateToState(stateName, params) {
            return $state.go(stateName, params, { inherit: false });
        }

        /**
         * Navigate to a sibling of the current page. This preserves the current breadcrumb, replacing the last entry.
         * @param data - optional, if given it represents a data object that the caller wishes
         * to pass through to the new child.
         * @memberof module:navigation.mpNavService
         */
        function navigateToSibling(stateName, id, params, data) {

            var stateParams = _.extend(
                params || {},
                {
                    id: id,
                    // The breadcrumb includes the current entity at the end but path does not
                    // so we need to allow for that.
                    path: pathToPathString(_.initial(breadcrumb, 1))
                });

            if (data) {
                // attach this data object temporarily to the parent (to be) to be passed to the child
                // once we get there
                var item = getParentItem();
                if (item) {
                    item.pendingDataObject = data;
                } else {
                    console.warn('Failed to set navigation state on root object');
                }
            }

            // Clear the current page just in case the navigate is to itself
            clearPageStateAndScope();


            return $state.go(stateName, stateParams, { inherit: false, location: 'replace' });
        }

        /*
         * Clear all the state and scope from current page. Used as a prelude to sibling navigagtion
         * (This should be in spState, but we have a dependency ordering issue.)
         */
        function clearPageStateAndScope() {
            var navItem = getCurrentItem();

            if (navItem) {
                navItem.data = {};
                navItem.componentData = {};

                if (navItem.scope) {
                    navItem.scope.$destroy();
                    navItem.scope = null;
                }
            }
        }

        /**
         * Navigate to a child of the current page. This adds another entry to the end of the breadcrumb.
         * @param data - optional, if given it represents a data object that the caller wishes
         * to pass through to the new child.
         * @memberof module:navigation.mpNavService
         */
        function navigateToChildState(stateName, id, params, data) {

            logBreadcrumbs('navigateToChild');

            var stateParams = _.extend(params || {}, {
                id: id,
                // The breadcrumb includes the current entity at the end but path does not
                // so we need to allow for that.
                path: pathToPathString(breadcrumb)
            });

            if (data) {
                // attach this data object temporarily to the parent (to be) to be passed to the child
                // once we get there
                var item = getCurrentItem();
                if (item) {
                    item.pendingDataObject = data;
                }
            }

            return $state.go(stateName, stateParams, { inherit: false });
        }

        /**
         * @memberof module:navigation.mpNavService
          * @param tellParentToRefresh - optional, if true inform the parent that it needs to refresh data
         * @return true is successful, false otherwise.
         */
        function navigateToParent(tellParentToRefresh) {

            logBreadcrumbs('navigateToParent');

            var parent = getParentItem();

            if (parent) {

                if (tellParentToRefresh)
                    parent.refreshRequired = true;

                if (parent.state && parent.state.params) {

                    $state.go(parent.state.name, parent.state.params);

                    return true;
                } else if (parent.href) {

                    $window.location = parent.href;

                    return true;
                } else if (parent.state) {
                    //the parent item only with state not params.
                    navigateBack();
                }
                else {
                    return false;
                }
            } else {
                return false;
            }

            return false;
        }

        /**
         * @memberof module:navigation.mpNavService
         * @return true is successful, false otherwise.
         */
        function navigateBack() {

            // TODO - do the dirty check here before we navigate, OR maintain our own history

            $window.history.back();
        }

        /**
         * @memberof module:navigation.mpNavService
         */
        function isInternalNavigationPending() {
            return pendingInternalNavigation;
        }

        /**
         * @memberof module:navigation.mpNavService
         * @Navigate internally in a page. This does not manipulate $state or href, but does check if the current item is dirty.
         * @return a promise to complete the navigation
         */
        function navigateInternal() {
            var deferred = $q.defer();

            //todo, add back after isdirty function works
            //if (isItemDirty(getCurrentItem())) {
            //    pendingInternalNavigation = {
            //        onContinue: internalNavigationContinue,
            //        onCancel: internalNavigationCancel,
            //        deferred: deferred,
            //        message: navDirtyMessage.defaultMsg
            //    };
            //} else {
            //    deferred.resolve(null);
            //}

            deferred.resolve(null);
            return deferred.promise;
        }

        function internalNavigationContinue() {
            var deferred = pendingInternalNavigation.deferred;
            pendingInternalNavigation = null;

            deferred.resolve(null);
        }

        function internalNavigationCancel() {
            var deferred = pendingInternalNavigation.deferred;
            pendingInternalNavigation = null;
            deferred.reject(null);
        }
       
        /**
         * Reload the current state
         * @memberof module:navigation.mpNavService
         */
        function reloadCurrentState() {
            $state.transitionTo($state.current, $stateParams, { reload: true, inherit: false, notify: true });
        }

        /**
         * @memberof module:navigation.mpNavService
         */
        function canNavigateToParent() {
            return !!service.getParentItem();
        }

        /**
         * Is the parent a nav item. That is, does it appear in the nav tree.
         * @memberof module:navigation.mpNavService
         */
        function isParentNavItem() {
            var parentItem = service.getParentItem();

            if (!parentItem) {
                return false;
            } else {
                //return parentItem.state.name === 'folder';      // This is a little arbitrary. A better test would be to add the information to the breadcrumb.
                return true;
            }
        }
       
        function debug() {
            return _.map(breadcrumb, function (item) {
                return {
                    id: item.id,
                    name: item.name,
                    stateName: sp.result(item, 'state.name'),
                    href: item.href
                };
            });
        }

        /**
         * Returns the top menu node items.
         */
        function getMenuNodes(ordered) {      
            // TODO - work out a better way to mock this
            var result = _.filter(service.getNavTree().children, function (node) {
                return !node.item.hidden; //hack
            });

            if (ordered) {
                result = _.sortBy(result, function (node) {
                    return node.item.order;
                });
            }
            return result;
        }

        function logState(message, state, params) {
            console.log('DEBUG: navService: %s: state=%o, params=%o, url="%s"', message, state, params, $state.href(state, params));
        }

        /** log either the given breadcrumb like items or the breadcrumbs themselves */
        function logBreadcrumbs(message, items) {
            
            var temp = _.map(items || breadcrumb, function (item) {
                return {
                    id: item.id,
                    stateName: item.state.name,
                    href: item.href
                };
            });
            console.log('DEBUG: navService: ', message, ': ', temp);
        }

        function fixupItemId(item) {
            return _.extend(item, { id: item.id });
        }

        /**
         * Make a list of items given a path string and add the option item.
         * Each nav item can be an entity id or alias, plus an optional state name.
         * Formatting is like:
         *  34|home,5566|home,2888|edit
         */
        function pathFromPathString(path, id, name) {
            var pathItems = _(path ? path.split(',') : [])
                .map(function (itemString) {
                    var parts = itemString.split('|');
                    var item = { id: parts[0] };
                    var stateName = sp.result(parts, '1');
                    if (stateName) item.state = { name: stateName };
                    return item;
                })
                .concat(id ? [
                    { id: id, state: { name: name } }
                ] : [])
                .map(fixupItemId)
                .value();

            //                logBreadcrumbs('pathFromPathString - items', pathItems);
            //                logBreadcrumbs('pathFromPathString - bc');

            return pathItems;
        }

        /**
         * Convert the path items to a path string.
         */
        function pathToPathString(pathItems) {
            var path = _.map(pathItems, function (item) {
                return item.id + (item.state && item.state.name ? '|' + item.state.name : '');
            }).join();
            return path;
        }

        // Get the href for the given state name and parameters
        // and not inherit from the current url
        function getStateHref(name, params) {
            return $state.href(name, params, { inherit: false });
        }

        function makeLink(item) {

            var itemState = {};
            itemState.params = {
                id: item.id,
                path: ''
            };

            var path = [];
            if (findInTree(navTree, item, path) && path.length > 1) {
                itemState.params.path = pathToPathString(_(path).map('item').compact().reverse().value());
            }

            itemState.name = item.viewType ? item.viewType : 'undefined';

            item.state = itemState;

            if (!canNavigateToItem(item)) {
                return null;
            }

            return getStateHref(itemState.name, itemState.params);
        }

        function canNavigateToItem(item) {
            
            return true;
        }


    
        /**
         * Sort the immediate children by order then name.
         * @name module:navService#sortImmediateChildren
         */
        function sortImmediateChildren(tree) {
            if (tree && tree.children.length) {
                service.sortNavNodes(tree.children);
            }
        }

        function sortNavNodes(navNodes) {
            if (!navNodes || !navNodes.length) {
                return navNodes;
            }

            navNodes.sort(function (a, b) {
                if (!a.item || !b.item) {
                    return 0;
                }
                if ((a.item.order || 0) !== (b.item.order || 0)) {
                    return (a.item.order || 0) < (b.item.order || 0) ? -1 : +1;
                }
                return a.item.name < b.item.name ? -1 : +1;
            });

            return navNodes;
        }

        //function treeUpdated() {
          
        //    if (navTree) {
        //        forEachItemInTree(navTree, function (item, depth, node) {
        //            if (item) {
        //                item.href = makeLink(item);
        //                item.depth = depth;
        //                item.hiddenByConfig = false;
        //            }

        //            // Assign parents
        //            _.forEach(node.children, function (c) {
        //                c.parent = node;
        //            });

        //            sortImmediateChildren(node);
        //        });
        //    }

        //    service.treeUpdateCount += 1;
        //}

        
        function saveNavRequest(reason, state, params, breadcrumb, message) {
            //logState('saving nav request, reason=' + reason, state, params);
            if (pendingNavigation) {
                throw new Error('navService: already have pending nav request');
            }
            pendingNavigation = {
                reason: reason,
                state: state,
                params: params,
                breadcrumb: breadcrumb,
                message: message
            };
        }

        function rebuildBreadcrumbs(newItems, oldItems) {

            // set to the new items

            breadcrumb = newItems;

            // ensure the scope chain is there

            _.reduce(breadcrumb, function (parentScope, item, index) {
                if (item.scope && item.scope.$parent !== parentScope) {
                    item.scope.$destroy();
                    item.scope = null;
                }
                if (!item.scope) {
                    item.scope = parentScope.$new(false);
                    item.scope['bcIndex' + index] = item.id; //todo remove
                }
                return item.scope; // the parent for the next bc
            }, $rootScope);

            //  destroy old scopes

            _.forEach(oldItems, function (item) {
                if (item.scope) {
                    item.scope.$destroy();
                    item.scope = null;
                }
            });
        }

        function syncBreadcrumb() {
            //todo - sync the breadcrumb... must keep the last, but to ensure
            // the path up from there lines up with the tree as we know it now.

            _.forEach(breadcrumb, function (item) {
                if (!item.href || !item.name) {
                    var node = findInTreeByIdAndState(navTree, item);
                    if (node) {
                        item.href = item.href || node.item.href;
                        item.name = item.name || node.item.name;
                        item.state = item.state || node.item.state;
                    }
                }
                if (item.uiroute) {
                    item.href = getStateHref(item.uiroute.name, item.uiroute.params);
                }
            });
        }

        //set the refresh tree flag to true
        function requireRefreshTree() {
            shouldRefreshTree = true;
        }

        function refreshTreeBranch(item) {
            //the refreshTreeBranch method is called in different place,
            //for performance issue, call requireRefreshTree method to turn on the flag when nav item is change (modify name or delete)
            //only refresh tree branch when the flag is on.
            if (shouldRefreshTree) {
                shouldRefreshTree = false;
                var node = findInTreeById(navTree, item.id);
                if (node) {
                    //return spNavDataService.getNavTreeExpanded([item]).then(function (node) {
                    //    if (node) {
                    //        mergeTreeChild(navTree, node);
                    //        treeUpdated();
                    //    } else {
                    //        console.log('navService: failed to expand tree for items');
                    //    }
                    //});
                    treeUpdated();

                }
            }

            var deferred = $q.defer();
            deferred.resolve();

            return deferred.promise;
        }

      
        
        function refreshTree() {
            requestInitialNavTree();
        }

        function prepareSyncOfBreadcrumb(pathItems) {
            // Return an array of three arrays: keep, add, drop
            // A new bc would be keep + add
            // It is important the retain the items if possible as they may carry
            // view state.

            function itemsMatch(item1, item2) {
                return item1.id === item2.id &&
                    (!item1.state && !item2.state ||
                    item1.state && item2.state && item1.state.name === item2.state.name);
            }

            var keep, add, drop;
            var current = _.first(pathItems) || { id: 0 };
            var index = _.findIndex(breadcrumb, _.partial(itemsMatch, current));

            if (index >= 0) {
                // advance the index for each matched id in the path
                var i = 1;
                while (index + i < breadcrumb.length && i < pathItems.length && itemsMatch(pathItems[i], breadcrumb[index + i])) {
                    i += 1;
                }
                index += i;

                // build the sub-arrays
                keep = _(breadcrumb).take(index).value();
                add = _(pathItems).drop(i).value();
                drop = _(breadcrumb).drop(index).value();

            } else {
                keep = [];
                add = _(pathItems).value();
                drop = breadcrumb;
            }

            return [keep, add, drop];
        }

        function syncPath(id, path) {
            // The path is the top down navigation state for the target entity and may be
            // represented by:
            // - a string using comma or slash separated nav entity id or aliases
            // - an array of the same

            var pathItems = pathFromPathString(path, id, $state.current.name);

            // Sync with breadcrumb.
            // If the start of the path is in the breadcrumb then take the breadcrumb items
            // up to there and while they match the path. Then add new items for the remainder
            // of the path.. to be filled in with a request for name etc.

            var arrs = prepareSyncOfBreadcrumb(pathItems);
            rebuildBreadcrumbs(_(arrs[0]).concat(arrs[1]).value(), arrs[2]);

            // Sync the breadcrumb with the nav tree

            syncBreadcrumb();

            service.treeUpdateCount += 1;
        }

        function navigated(state, params) {
            logState('navigated', state, params);
            logBreadcrumbs('navigated - start');

            if (params) {
                syncPath(params.eid, params.path);

                var item = _.last(breadcrumb);
                if (item) {
                    item.href = getStateHref(state.name, params);
                    item.state = {
                        name: state.name, params: params
                    };
                }

                var parentItem = getParentItem();
                if (parentItem && parentItem.pendingDataObject) {
                    item.dataObject = parentItem.pendingDataObject;
                    parentItem.pendingDataObject = null;
                }
            } else {
                console.error('navService.navigated... missing params??');
            }

            logBreadcrumbs('navigated - done');

       

        }

        

        /**
         * Return true or false if can or can't navigate or return null if we don't know yet.
         */
        function canNavigate(state, params) {
            logState('canNavigate? ', state, params);

            //var pathItems = [];

            //if (params && params.eid) {
            //    pathItems = pathFromPathString(params.path, params.eid, state.name);
            //}

            ////debug
            //_.forEach(breadcrumb, function (item) {
            //    item.isDirtyCached = _.result(item, 'isDirty');
            //});
            ////end debug

            //var arrs = prepareSyncOfBreadcrumb(pathItems);
            //var dropping = arrs[2];
            //var dirtyIndex = _.findLastIndex(dropping, isItemDirty);

            //if (dirtyIndex >= 0) {
            //    saveNavRequest('dirty', state, params, arrs[0].concat(arrs[1]), getDirtyMessage(dropping[dirtyIndex]));
            //    return null;
            //}

            return true;
        }


        function cancelStateChange(event) {
            event.preventDefault();
            if (previousLocationHref && previousLocationHref !== $window.location.href) {
                // not doing this right now... causes problems
                // note the reason I was trying this was because we have an issue when cancelling
                // a state change where the URL still becomes the new URL and so we have mismatched
                // url and state.
                //$window.location.href = previousLocationHref;
                previousLocationHref = null;
            }
        }

        /**
         * Search the tree for a node representing the given item where the
         * item parameter is either the item itself or a predicate.
         *
         * Assumes the tree nodes are { item, children } where children are an array of nodes.
         *
         * Optionally capture the path from the found item to the root. If an item is found then the
         * path (of nodes) is added to the given path array, if one is provided. The path or any existing
         * values in the path array are not touched.
         *
         * @param tree
         * @param itemOrFn
         * @param pathInReverse
         * @returns tree node referencing the item, or null if not found
         *
         * @name module:navigation#findInTree
         * @inner
         */
        function findInTree(tree, itemOrFn, pathInReverse) {
            var result = null;

            function match(item) {
                return _.isFunction(itemOrFn) ? itemOrFn(item) : item === itemOrFn;
            }

            if (!tree) {
                return null;
            }

            if (tree.item && match(tree.item)) {
                return tree;
            }

            if (tree.children) {

                _.some(tree.children, function (child) {
                    if (match(child.item)) {
                        result = child;
                    }
                    return !!result;
                });

                if (!result) {
                    _.some(tree.children, function (child) {
                        result = findInTree(child, itemOrFn, pathInReverse);
                        return !!result;
                    });
                }

                if (result && pathInReverse) {
                    pathInReverse.push(tree);
                }
            }

            return result;
        }

        /**
         * Search the tree for a node representing the given item where the
         * item parameter is either the item itself or a predicate.
         *
         * Assumes the tree nodes are { item, children } where children are an array of nodes.
         *
         * Optionally capture the path from the found item to the root. If an item is found then the
         * path (of nodes) is added to the given path array, if one is provided. The path or any existing
         * values in the path array are not touched.
         *
         * @param tree
         * @param itemOrFn
         * @param pathInReverse
         * @returns tree node referencing the item, or null if not found
         *
         * @name module:navigation#findInTree
         */
        function findInTreeByNodeIdAndParentNodeId(treeNode, itemOrFn, pathInReverse) {
            var result = null;

            function match(item) {
                return _.isFunction(itemOrFn) ? itemOrFn(item) : item === itemOrFn;
            }

            if (!treeNode) {
                return null;
            }

            if (match(treeNode)) {
                return treeNode;
            }

            if (treeNode.children) {

                _.some(treeNode.children, function (child) {
                    if (match(child)) {
                        result = child;
                    }
                    return !!result;
                });

                if (!result) {
                    _.some(treeNode.children, function (child) {
                        result = findInTreeByNodeIdAndParentNodeId(child, itemOrFn, pathInReverse);
                        return !!result;
                    });
                }

                if (result && pathInReverse) {
                    pathInReverse.push(treeNode);
                }
            }

            return result;
        }

        /**
         * Uses findInTree to find an item's node by id (or alias)
         * @name module:navigation#findInTreeById
         */
        function findInTreeById(tree, idOrAlias, pathInReverse) {
            return findInTree(tree, function (item) {
                return item && (item.id === idOrAlias || item.alias === idOrAlias);
            }, pathInReverse);
        }

        /**
         * Uses findInTree to find an item's node by id (or alias)
         * and if the item has a state then check it too
         * @name module:navigation#findInTreeById
         */
        function findInTreeByIdAndState(tree, item, pathInReverse) {
            return findInTree(tree, function (treeItem) {
                return treeItem && item &&
                    (treeItem.id === item.id || treeItem.alias === item.id) &&
                    (!item.state ||
                    treeItem.state && item.state.name === treeItem.state.name);
            }, pathInReverse);
        }

        /**
         * Merge the child node (sub-tree) into the children of the tree (node).
         * @name module:navigation#mergeTreeChild
         */
        function mergeTreeChild(tree, childNode) {

            var existing = false, id, childrenToRemove;
            if (tree.children) {
                if (childNode.item) {
                    id = childNode.item.id;
                    existing = _.find(tree.children, function (node) {
                        return node.item.id === id;
                    });
                }
            } else {
                tree.children = [];
            }
            if (!existing) {
                tree.children = tree.children.concat([childNode]);
            } else {
                // replace the existing item with the incoming's item and merge the children

                existing.item = childNode.item;

                if (!_.isEmpty(childNode.children)) {

                    // first find and remove immediate children that no longer exist

                    childrenToRemove = _.reject(existing.children, function (existingChild) {
                        return _.some(childNode.children, function (newChild) {
                            return newChild.item.id === existingChild.item.id || _.includes(testNavItemIds, existingChild.item.id);
                        });
                    });

                    if (!_.isEmpty(childrenToRemove)) {
                        // Remove the existing children that no longer exist
                        _.remove(existing.children, function (c) {
                            return _.includes(childrenToRemove, c);
                        });
                    }
                }

                _.each(childNode.children, function (node) {
                    mergeTreeChild(existing, node);
                });
            }
        }

        /**
         * Visit each node of the tree and call the given fn on the node passing the node and the current depth.
         * Visits in a depth first manner - this is assumed by some callers.
         *
         * Note - for the 'virtual root node' it may call the fn with item null.
         *
         * @param tree
         * @param fn
         * @param depth
         * @name module:navigation#forEachItemInTree
         */
        function forEachItemInTree(tree, fn, depth) {
            if (tree) {
                depth = depth || 0;
                fn(tree.item, depth, tree);
                if (tree.children) {
                    depth += 1;
                    _.each(tree.children, function (t) {
                        forEachItemInTree(t, fn, depth);
                    });
                }
            }
        }

        /**
         * If the current nav item has componentState (managed via the spState service)
         * and if any of these has a isDirty property (may be a function) then return
         * true if any return true. Else false.
         * @param {Object} item - the nav item
         * @returns {boolean}
         */
        function anyDirtyComponents(item) {
            return item && item.componentData &&
                _.some(item.componentData, function (x) { return _.result(x, 'isDirty'); });
        }


        initialise();

        return service;
    }
})();