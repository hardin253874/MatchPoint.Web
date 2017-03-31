/**
 * MatchPoint.client - v3.0.1 - 2017-03-29
 * http://www.artisgroup.com.au/
 *
 * Copyright 2011-2017 Artis Group
 */
(function () {
    'use strict';
    angular.module('mp.components.autoComplete', []);
}());
(function () {
    'use strict';
    angular.module('mp.components.dataGrid', []);    
}());
(function () {
    'use strict';
    angular.module('mp.components.dateControl', []);
}());
(function () {
    'use strict';
    angular.module('mp.components.localStorage', []);
}());

(function () {
    'use strict';
    angular.module('mp.components.loginService', []);
}());

(function () {
    'use strict';   
    angular.module('mp.components.navService', []);
}());
(function () {
    'use strict';
    angular.module('mp.components.notification', []);
}());

(function () {
    'use strict';
    angular.module('mp.components.tabset', []);
}());
(function () {
    'use strict';
    angular.module('mp.components.validation', ['mp.components.webService']);
}());
(function () {
    'use strict';
    angular.module('mp.components.webService', []);
}());
(function () {
    "use strict";

    angular.module('mp.components.autoComplete')
       .directive('mpAutoCompleteDropdown', mpAutoCompleteDropdown);

    function mpAutoCompleteDropdown() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/app/Components/AutoComplete/Directives/mpAutoCompleteDropdown.tpl.html',            
            scope: {
                options: '='
            },
            link: function (scope) {
                scope.model = {
                    selectedItem: null,
                    items : []
                };



                scope.$watchCollection('options.items', function () {
                    scope.model.items = scope.options.items;
                    scope.model.selectedItem = scope.options.selectedItem;
                }, true);
            }
        };
    }
}());
(function () {
    "use strict";
    /**
    * Module implementing a data grid.
     * Displays a data grid.
     *
     * @module mpDataGrid
     * @example

     Using the mpDataGrid:
     &lt;mp-datagrid grid-options="gridOptions"&gt;&lt;/mp-datagrid&gt
     where gridOptions is available on the controller with the following properties:
     - gridColumnDefs - {array}. The column definitions for the grid.
     - gridColumnDefs[].field = {string}. The field of this column
     - gridColumnDefs[].displayName = {string}. The display Name of this column
     - gridColumnDefs[].width = {string}. The width of this column, e.g. 20% or 200px
     - gridColumnDefs[].headerCellClass = {string}. The custom stype class for the grid header
     - gridColumnDefs[].enableFiltering = {bool}. The enable/disable filtering flag for column
     - gridColumnDefs[].cellFilter = {string}.  The cell content filter function to format content text.  e.g. cellFilter: 'date:"longDate"'
     - gridColumnDefs[].filters = {array}.  The column filter definitions array to config the column detail. to use these setting, the enableFiltering property should be true. 
     -                                      e.g. filters:[{condition: uiGridConstants.filter.LESS_THAN_OR_EQUAL, placeholder: 'Greater than or equal'}]
     -                                      The available 'condition' options are
     -                                          `uiGridConstants.filter.STARTS_WITH`
     -                                          `uiGridConstants.filter.ENDS_WITH`
     -                                          `uiGridConstants.filter.CONTAINS`
     -                                          `uiGridConstants.filter.GREATER_THAN`
     -                                          `uiGridConstants.filter.GREATER_THAN_OR_EQUAL`
     -                                          `uiGridConstants.filter.LESS_THAN`
     -                                          `uiGridConstants.filter.LESS_THAN_OR_EQUAL`
     -                                          `uiGridConstants.filter.NOT_EQUAL`
     -                                          `uiGridConstants.filter.STARTS_WITH`
     -                                      Available `type` options are:
     -                                          `uiGridConstants.filter.SELECT` - use a dropdown box for the cell header filter field
     -                                          `uiGridConstants.filter.INPUT` -  use a text box for the cell header filter field - which is default type setting
     - gridData - {array}. The row data to display in the grid. 

     - showSearchSection (option) - {boolean}. Show or hide the search section, the default value is true
     - pageSize (option) - {number}. The page size of current data grid, if current property is null, use the default setting is 50 //TODO: set the grid page size by app.setting 
     - detailPageState (option) - {string}.  The page state of grid drill down page, if current value property is null, click selected row function stop works
     - gridClass (option) - {string}. The custom style class for the grid.
     - enableFiltering (option) - {bool}. To enable/disable the column filter function, the default value is false
     - enablePaginationControls (option) - {bool}. To enable/disable the pagination bar, the default value is true
     - enableExport (option) - {bool}.  To enable/disable the csv/pdf export function with GridMenu, the default value is false
    **/
    angular.module('mp.components.dataGrid')
       .directive('mpDatagrid', mpDatagrid);


    function mpDatagrid(mpNavService, $filter, uiGridConstants) {
        return {
            restrict: 'E',
            //transclude: true,
            replace: true,
            templateUrl: '/app/Components/DataGrid/Directives/mpDataGrid.tpl.html',
            //controller: DataGridController,
            scope: {
                options: '='
            },
            link: function (scope)
            {
                var DEFAULT_PAGESIZE = 50;                

                scope.model = {
                    searchText: '',
                    state : '',
                    gridClass: '',
                    gridData: [],
                    gridColumnDefs: [],
                    showSearchSection: true,
                    showDeactvated : false,
                    enableFiltering: false,
                    enablePaginationControls: true,
                    includeDeactvated: false,
                    callBackFunction: null,
                    sortColumns: null,
                    filterColumns: null,
                    extraParams : null

                };


                if (scope.options) {
                    buildDataGrid();
                }

                scope.$watchCollection('options.gridData', function () {
                    if (scope.options && scope.options.gridData) { 
                        if (scope.options.totalItems)
                            scope.gridOptions.totalItems = scope.options.totalItems;
                        
                        if (scope.options && scope.options.pageNumber && scope.options.pageNumber > 1)                        
                            scope.gridOptions.paginationCurrentPage = scope.options.pageNumber;
                                              
                        if (scope.options && scope.options.searchText && scope.options.searchText !== scope.model.searchText)
                            scope.model.searchText = scope.options.searchText;

                        if (scope.options && scope.options.filterColumns)
                            scope.model.filterColumns = scope.options.filterColumns;

                        

                        scope.model.gridData = scope.options.gridData;
                        scope.gridOptions.data = scope.model.gridData;

                        if (scope.options && scope.options.includeDeactvated !== undefined)
                            scope.model.includeDeactvated = scope.options.includeDeactvated;
                    }
                }, true);

                scope.$watch('model.includeDeactvated', function (oldVal, newVal) {
                    if (scope.model.gridColumnDefs && oldVal !== newVal) {
                        if (scope.model.includeDeactvated) {
                            scope.model.gridColumnDefs = _.map(scope.model.gridColumnDefs, function (columnDef) {
                                if (columnDef.visible !== undefined)
                                    columnDef.visible = true;
                                
                                return columnDef;
                                    
                            });
                        } else {
                            scope.model.gridColumnDefs = _.map(scope.model.gridColumnDefs, function (columnDef) {
                                if (columnDef.visible !== undefined)
                                    columnDef.visible = false;

                                return columnDef;

                            });
                        }

                        scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
                    }
                }, true);


                scope.getGridClass = function () {
                    var gridClass = 'ui-grid-render-container-body';
                    if (scope.model.gridClass)
                        gridClass += ' ' + scope.model.gridClass;

                    return gridClass;
                };

                function buildDataGrid() {
                    scope.model.gridColumnDefs =[];
                    scope.model.gridPageSize = (scope.options && scope.options.pageSize) ? scope.options.pageSize : DEFAULT_PAGESIZE;
                    scope.model.paginationPageSizes = [scope.model.gridPageSize, scope.model.gridPageSize * 2, scope.model.gridPageSize * 3];
                    scope.model.searchText = (scope.options && scope.options.searchText) ? scope.options.searchText : '';
                    scope.model.extraParams = (scope.options && scope.options.extraParams) ? scope.options.extraParams : null;
                    scope.model.detailPageState = (scope.options && scope.options.detailPageState) ? scope.options.detailPageState: null;
                    scope.model.gridClass = (scope.options && scope.options.gridClass) ? scope.options.gridClass : null;
                    scope.model.callBackFunction = (scope.options && scope.options.callBackFunction) ? scope.options.callBackFunction : null;                    
                    scope.model.enableFiltering = (scope.options && scope.options.enableFiltering !== undefined) ? scope.options.enableFiltering : false;
                    scope.model.showSearchSection = (scope.options && scope.options.showSearchSection !== undefined) ? scope.options.showSearchSection : true;
                    scope.model.showDeactvated = (scope.options && scope.options.showDeactvated !== undefined) ? scope.options.showDeactvated : false;
                    scope.model.enablePaginationControls = (scope.options && scope.options.enablePaginationControls !== undefined) ? scope.options.enablePaginationControls : true;
                    scope.model.gridColumnDefs = scope.options.gridColumnDefs;                   

                    scope.model.gridData = scope.options.gridData;

                    scope.gridOptions = {
                        enableFiltering: scope.model.enableFiltering,
                        enablePaginationControls: scope.model.enablePaginationControls,
                        enableRowSelection: true,
                        enableRowHeaderSelection: false,
                        multiSelect: false,
                        enableHighlighting: true,
                        modifierKeysToMultiSelect: false,
                        noUnselect: true,
                        paginationPageSize: scope.model.gridPageSize,
                        paginationPageSizes: scope.model.paginationPageSizes,
                        useExternalPagination: scope.model.callBackFunction ? true : false,
                        useExternalSorting: scope.model.callBackFunction ? true : false,
                        useExternalFilter: scope.model.callBackFunction ? true: false,
                        //rowTemplate: rowTemplate(),
                        columnDefs: scope.model.gridColumnDefs,
                        data: scope.model.gridData
                    };
                    if (scope.options && scope.options.enableExport)
                        updateExportOptions(scope.gridOptions);

                    scope.gridOptions.onRegisterApi = function (gridApi) {
                        scope.gridApi = gridApi;
                        scope.gridApi.selection.on.rowSelectionChanged(scope,
                                function (row) {
                                    rowClick(row);
                                });
                        scope.gridApi.pagination.on.paginationChanged(scope,
                                function (pageNumber, pageSize) {
                                    gridPagination(pageNumber, pageSize);
                                }
                            );
                        scope.gridApi.core.on.sortChanged(scope,
                                function (grid, sortColumns) {
                                    //scope.sort;
                                    if (sortColumns.length === 0) {
                                        scope.model.sortColumns = null;
                                    } else {
                                        scope.model.sortColumns = _.map(sortColumns, function (sortColumn) {
                                            return {
                                                name: sortColumn.name,
                                                direction: sortColumns.sort ? sortColumn.sort.direction : 'asc'
                                            };
                                        });
                                    }
                                    sortGrid();
                                }
                            );
                        scope.gridApi.core.on.filterChanged(scope,
                               function () {
                                   var grid = this.grid;

                                   var existsTeam = function (filters) {
                                       var filterWithTeam = _.filter(filters, function (filter) { return filter && filter.term; });

                                       if (filterWithTeam && filterWithTeam.length > 0)
                                           return true;
                                       else
                                           return false;
                                   };

                                   var filterColumns = _.filter(grid.columns, function (column) {
                                       return column.filters && column.filters.length > 0 && existsTeam(column.filters);
                                   });


                                   if (filterColumns && filterColumns.length > 0) {
                                       scope.model.filterColumns = _.map(filterColumns, function (column) {
                                           return {
                                               name: column.field,
                                               filters: _.map(column.filters, function (filter) {
                                                   return {
                                                       condition: filter.condition,
                                                       term: filter.term
                                                   };
                                               })
                                           };
                                       });
                                   } else {
                                       scope.model.filterColumns = null;
                                   }
                                  
                                   filterGrid();
                                }
                            );
                    };


                }


                function updateExportOptions(gridOptions) {
                    var exportOptions = {
                        enableGridMenu: true,
                       // enableSelectAll: true,
                        exporterCsvFilename: 'MarchPointFile.csv',
                        exporterPdfDefaultStyle: { fontSize: 9 },
                        exporterPdfTableStyle: { margin: [30, 30, 30, 30] },
                        exporterPdfTableHeaderStyle: { fontSize: 10, bold: true, italics: true, color: 'red' },
                        exporterPdfHeader: { text: "My Header", style: 'headerStyle' },
                        exporterPdfFooter: function (currentPage, pageCount) {
                            return { text: currentPage.toString() + ' of ' + pageCount.toString(), style: 'footerStyle' };
                        },
                        exporterPdfCustomFormatter: function (docDefinition) {
                            docDefinition.styles.headerStyle = { fontSize: 22, bold: true };
                            docDefinition.styles.footerStyle = { fontSize: 10, bold: true };
                            return docDefinition;
                        },
                        exporterPdfOrientation: 'portrait',
                        exporterPdfPageSize: 'LETTER',
                        exporterPdfMaxGridWidth: 500,
                        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
                    };

                    gridOptions = _.extend(gridOptions, exportOptions);

                }

                function rowClick(row) {
                    if (!row || !row.entity || !row.entity.Id || !scope.model.detailPageState)
                        return;

                    var gridParams = {
                        searchText: scope.model.searchText,
                        pageNumber: scope.gridApi.pagination.getPage(),
                        pageSize: scope.model.gridPageSize,
                        sortColumns: scope.model.sortColumns,
                        filterColumns: scope.model.filterColumns,
                        includeDeactvated: scope.model.includeDeactvated
                    };

                    var params = {
                        Id: row.entity.Id,
                        gridParams : gridParams
                    };

                    if (scope.model.extraParams)
                        params = _.extend(params, scope.model.extraParams);

                    mpNavService.navigateToState(scope.model.detailPageState, params);
                }

                function gridPagination(pageNumber, pageSize) {
                    if (!scope.model.callBackFunction)
                        return;

                    scope.model.callBackFunction(scope.model.searchText, pageNumber, pageSize, scope.model.sortColumns, scope.model.filterColumns, scope.model.includeDeactvated);
                }

                function sortGrid() {
                    if (!scope.model.callBackFunction)
                        return;

                    scope.model.callBackFunction(scope.model.searchText, scope.gridApi.pagination.getPage(), scope.model.gridPageSize, scope.model.sortColumns, scope.model.filterColumns,  scope.model.includeDeactvated);
                }

                function filterGrid() {
                    if (!scope.model.callBackFunction)
                        return;

                    scope.model.callBackFunction(scope.model.searchText, scope.gridApi.pagination.getPage(), scope.model.gridPageSize, scope.model.sortColumns, scope.model.filterColumns, scope.model.includeDeactvated);
                }

                scope.searchGrid = function()
                {
                    if (scope.model.callBackFunction) {
                        scope.model.callBackFunction(scope.model.searchText, scope.gridApi.pagination.getPage(), scope.model.gridPageSize, scope.model.sortColumns, scope.model.filterColumns, scope.model.includeDeactvated);
                    } else {
                        scope.model.gridData = _.filter(scope.model.gridData, function (data) {
                            return !scope.model.searchText || data.name.toLowerCase().indexOf(scope.model.searchText.toLowerCase()) >= 0;
                        });
                        scope.gridOptions.data = scope.model.gridData;
                    }
                };

                //    scope.rowDblClick = function (row) {
                //        rowClick(row);
                //    };

                //    function rowTemplate() {
                //        return '<div ng-dblclick="grid.appScope.rowDblClick(row)" >' +
                //                     '  <div ng-repeat="(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" class="ui-grid-cell" ng-class="{ \'ui-grid-row-header-cell\': col.isRowHeader }"  ui-grid-cell></div>' +
                //                     '</div>';
                //    }

                //    scope.refreshData = function () {
                //        scope.gridOptions.data = $filter('filter')(scope.gridData, scope.searchText, undefined);
                //    };
            }
        };
    }
}());
(function () {
    'use strict';

    /**
    * Module containing data grid utility functions.       
    * 
    * @module mpDataGridUtils    
    */
    angular.module('mp.components.dataGrid', [])
    .factory('mpDataGridUtils', function () {
        var exports = {};
        var DEFAULT_PAGESIZE = 10;

        exports.buildCallbackFunc = function (loadFunc) {
            var callBackFunc = function callBack(searchText, pageNumber, pageSize, sortColumns, filterColumns, includeDeactvated) {
                console.log("Search Text: " + searchText);
                console.log("Current page: " + pageNumber);
                console.log("Page size: " + pageSize);

                var options = {
                    searchText: searchText,
                    pageNumber: pageNumber,
                    pageSize: pageSize,
                    sortColumns: sortColumns,
                    filterColumns: filterColumns,
                    includeDeactvated: includeDeactvated
                };

                loadFunc(options);
            };

            return callBackFunc;
        };

        exports.updateColumnFilterTerm = function (gridParams, gridColumnDefs) {
            //extend the filter term to columnDefs
            if (gridParams && gridParams.filterColumns && gridParams.filterColumns.length > 0) {
                gridColumnDefs = _.map(gridColumnDefs, function (gridColumnDef) {
                    if (gridParams) {
                        var matchedFilter = _.find(gridParams.filterColumns, function (filterColumn) {
                            return filterColumn.name === gridColumnDef.field;
                        });

                        if (matchedFilter) {
                            var extendFilters;
                            if (gridColumnDef.filters && gridColumnDef.filters.length > 0) {
                                _.forEach(gridColumnDef.filters, function (columnFilter) {
                                    var filter = _.find(matchedFilter.filters, function (f) {
                                        return f.condition === columnFilter.condition;
                                    });

                                    if (filter && filter.term)
                                        columnFilter = _.extend(columnFilter, { term: filter.term });
                                });
                            }
                            else {
                                gridColumnDef.filters = [{ term: matchedFilter.filters[0].term }];
                            }

                            return gridColumnDef;
                        } else {
                            return gridColumnDef;
                        }
                    } else {
                        return gridColumnDef;
                    }
                });
            }
        };

        exports.getDefaultOptions = function (options) {
            return _.defaults(options, {
                searchText: '',
                pageNumber: 1,
                pageSize: DEFAULT_PAGESIZE,
                sortColumns: null,
                filterColumns: null
            });
        };

        exports.updateGridOptions = function (gridOptions, options, response) {
            gridOptions.totalItems = response.TotalItems;
            gridOptions.gridData = response.GridData;
            gridOptions.searchText = options.searchText;
            gridOptions.pageNumber = options.pageNumber;
            if (options.includeDeactvated !== undefined)
                gridOptions.includeDeactvated = options.includeDeactvated;
        };

        return exports;
    });
}());
(function () {
    "use strict";

    angular.module('mp.components.dateControl')
       .directive('mpDateControl', mpDateControl);

    function mpDateControl() {
        return {
            restrict: 'AE',
            require: 'ngModel',
            replace: true,
            templateUrl: '/app/Components/DateControl/Directives/mpDateControl.tpl.html',
            scope: {
                ngModel: '=',
                options: '='
            },
            link: function (scope, element, attr, ngModel) {

                scope.model = {
                    disableControl: true,
                    format: 'dd-MMMM-yyyy',
                    minDate: new Date()

                };

                scope.open = function ($event) {
                    //$event.preventDefault();
                    if ($event)
                        $event.stopPropagation();

                    scope.opened = true;
                };
                scope.dateOptions = scope.dateOptions || {
                    formatYear: 'yy',
                    startingDay: 1,
                    showWeeks: false
                };

                scope.onDateInputClick = function () {

                };
            }
        };
    }


}());
(function () {
    "use strict";

    angular.module('mp.components.dateControl')
       .directive('mpDatetimeControl', mpDatetimeControl);

   
    function mpDatetimeControl() {
        return {
            restrict: 'AE',
            require: 'ngModel',
            replace: true,
            templateUrl: '/app/Components/DateControl/Directives/mpDateTimeControl.tpl.html',
            scope: {
                ngModel: '=',
                options: '='
            },
            link: function (scope, element, attr, ngModel) {

                

                

               
            }
        };
    }

}());
/**

 */

(function () {
    "use strict";

    angular.module('mp.components.localStorage')
        .factory('mpLocalStorage', mpLocalStorage);


    function mpLocalStorage($window) {
        var exports = {};

        var localStorageAvailable;
        var sessionStorageAvailable;

        testAllStorages();

        var storage = localStorageAvailable ? $window.localStorage : (sessionStorageAvailable ? $window.sessionStorage : createDummyStore());


        function testAllStorages() {
            try {
                localStorageAvailable = testStorage($window.localStorage);
            } catch (e) { }

            try {
                sessionStorageAvailable = testStorage($window.sessionStorage);
            } catch (e) { }
        }

        function testStorage(store) {
            var v = 'ignorethis';
            try {
                store.setItem(v, v);
                store.removeItem(v);
                return true;
            } catch (e) {
                return false;
            }
        }

        function createDummyStore() {
            var store = [];
            return {
                getItem: function (key) { return store[key]; },
                setItem: function (key, value) { store[key] = value; },
                removeItem: function (key) { store[key] = undefined; },
                clear: function () { store.length = 0; }
            };
        }

        exports.testLocalStorage = function () { return localStorageAvailable; };

        /**
         * Retrieves an item from local storage.
         * @param {string} key The key or name the value to lookup.
         * @returns {string} The value stored against the given key, if one.
         */
        exports.getItem = function (key) {
            return storage.getItem(key);
        };


        /**
         * Stores an item into local storage.
         * @param {string} key The key or name the value to lookup.
         * @param {string} value The value to save against the given key.
         */
        exports.setItem = function (key, value) {
            return storage.setItem(key, value);
        };


        /**
         * Removes an item from local storage.
         * @param {string} key The key or name of the item to remove.
         */
        exports.removeItem = function (key) {
            storage.removeItem(key);
        };


        /**
         * Retrieves an object from local storage.
         * @param {string} key The key or name the value to lookup.
         * @returns {object} The value stored against the given key, if one.
         */
        exports.getObject = function (key) {

            // Recovering from a possible stray setting of undefined
            if (storage.getItem(key) === 'undefined') {
                storage.removeItem(key);
            }

            var value = JSON.parse(storage.getItem(key) || 'null');

            return value;
        };

        /**
         * Stores an object into local storage.
         * @param {string} key The key or name the value to lookup.
         * @param {object} value The value to save against the given key.
         */
        exports.setObject = function (key, value) {
            return this.setItem(key, value ? JSON.stringify(value) : 'null');
        };

        /**
         * Clear all local storage.
         */
        exports.clear = function () {
            storage.clear();
        };

        return exports;
    }

})();

/**
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

(function () {
    "use strict";
   
    angular.module('mp.components.notification')
        .factory('mpNotification', mpNotification);


    function mpNotification($window) {
        var exports = {};

        

        /**
          * Module implementing a notification service.
           * Displays a data grid.
           *
           * @module mpNotification
           * @example
       
           Using the mpNotification:
           mpNotification.notify
           message - {string}. the notify message
           type - {string}. the notify type 'success','info','warning','danger'
           title - {string}. the notify type
           settings - {json}.  all notify settings.          
          **/
        exports.notify = function (message, type, title, settings) {
            
            var notifyOptions = {};

            var notifySettings = {
                element: 'body',
                position: null,
                type: "info",
                allow_dismiss: true,
                newest_on_top: false,
                showProgressbar: false,
                placement: {
                    from: "top",
                    align: "center"
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 5000,
                timer: 1000,
                url_target: '_blank',
                mouse_over: null,
                animate: {
                    enter: 'animated fadeInDown',
                    exit: 'animated fadeOutUp'
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                    '<span data-notify="icon"></span> ' +
                    '<span data-notify="title">{1}</span> ' +
                    '<span data-notify="message">{2}</span>' +
                    '<div class="progress" data-notify="progressbar">' +
                        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                    '</div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
            };

            if (message)
                notifyOptions.message = message;

            if (title)
                notifyOptions.title = title;

            if (type)
                notifySettings.type = type;

            if (settings)
                notifySettings = _.extend(notifySettings, options);

            $.notify(notifyOptions, notifySettings);
        };

        return exports;
    }

})();
(function () {
    "use strict";

    angular.module('mp.components.tabset')
       .directive('mpTabset', mpTabset);

    mpTabset.$inject = ['$stateParams', '$compile'];

    function mpTabset($stateParams,$compile) {
        return {
            restrict: 'E',
            //transclude: true,
            replace: true,
            templateUrl: '/app/Components/Tabset/Directives/mpTabset.tpl.html',            
            scope: {
                options: '='
            },
            controller: tabSetController,
            controllerAs: 'vm',
            link: function (scope, el, attr, ctrl) {
                scope.model = {
                    tabs: [],
                    activeTab : null
                };

                if (scope.options) {
                    buildTabset();
                }               

                function buildTabset() {
                    scope.model.tabs = scope.options.tabs;
                    if (ctrl && ctrl.activeTab)
                        scope.model.tabs = _.map(scope.model.tabs, function (tab) {
                            return {
                                id: tab.id,
                                heading: tab.heading,
                                template: tab.template,
                                active: tab.id.toString() === ctrl.activeTab
                            };
                        });
                }

               
            }        
        };
    }

    function tabSetController($stateParams) {
        /*jshint validthis: true */
        var vm = this;
        vm.activeTab = $stateParams.Tab;
    }
}());
(function () {
    "use strict";

    angular.module('mp.components.validation')
   .directive('mpAccountUserNameValidation', mpAccountUserNameValidation);

    function mpAccountUserNameValidation($http, $q, mpWebService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                // validation callback registration to ngModel
                              
                ngModel.$asyncValidators.inValidAccountUserName = function (modelValue, viewValue) {
                    // validation logic here
                    var userName = modelValue || viewValue;



                    var deferred = $q.defer();

                    if (!userName || userName.length === 0) {
                        deferred.resolve();
                        return deferred.promise;
                    }

                    mpWebService.callWebApi('GET', null, '/UserAccountAPI/ValidateUserName/' + userName).then(function (response) {
                        //todo update logic here
                        if (response.data  && response.data.IsValid === true)
                            deferred.resolve();
                        else
                            deferred.reject(response.data ? response.Message : '');
                    });

                    // return the promise of the asynchronous validator
                    return deferred.promise;                   
                };


            }
        };
    }
}());
(function () {
    "use strict";

    angular.module('mp.components.validation')
   .directive('mpCountryCodeValidation', mpCountryCodeValidation);

    function mpCountryCodeValidation() {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                var countryCodes = attr.mpCountryCodeValidation.split(',');

                ngModel.$validators.invalidCountryCode = function (value) {
                    if (value === null && countryCodes.length < 1)
                        return true;

                    if (!value || value.toString().length === 0)
                        return true;
                    var inValid = countryCodes.indexOf(value.toString()) === -1;

                    return inValid ? false : true;
                };

            }
        };
    }
}());
(function () {
    "use strict";

    angular.module('mp.components.validation')
   .directive('mpMobileNumberValidation', mpMobileNumberValidation);

    function mpMobileNumberValidation($http, $q) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attr, ngModel) {
                // validation callback registration to ngModel
                //var mobileNumber = attr.checkAvailability;

                ngModel.$validators.invalidMobileNumber = function (modelValue, viewValue) {

                    var mobileNumber = modelValue || viewValue;

                    //only valid mobile number, if empty should return true, otherwise duplicate with require validation
                    if (!mobileNumber || mobileNumber.toString().length === 0)
                        return true;

                    return mobileNumber.toString().indexOf('04') === 0;
                };

            }
        };
    }
}());
(function () {
    "use strict";

    angular.module('mp.components.validation')
   .directive('mpMultipleEmailsValidation', mpMultipleEmailsValidation);
        
    function mpMultipleEmailsValidation() {
        return {
            require: 'ngModel',
            link: mpMultipleEmailValidatorImpl
        };
    }
 

    function mpMultipleEmailValidatorImpl(scope, element, attributes, controller) {
        controller.$validators.mpMultipleEmailValidator = function (modelValue, viewValue) {

            var EMAIL_PATTERN = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            var errorFlag = true;
            if (!controller.$isEmpty(viewValue)) {
                var emailIdsArr = viewValue.split(/,|;/g);
                angular.forEach(emailIdsArr, function (value, key) {
                    if (!EMAIL_PATTERN.test(value.trim())) {
                        errorFlag = false;
                    }
                });
            }
            return errorFlag;
        };
    }
    

   
    

}());
/**
 * A set of AngularJS services related to navigation.
 * @module navigation
 */

(function () {
    "use strict";

    angular.module('mp.components.webService')
        .factory('mpWebService', mpWebService);

    function mpWebService($http, mpNavService, mpLocalStorage, mpNotification) {
        var exports = {};
        
        
        exports.getHeader = function () {
            return  {
                Authorization: mpLocalStorage ? mpLocalStorage.getItem("TokenInfo") : null
            };            
        };

        exports.callWebApi = function (type, data, url)
        {
            try {
                return $http({
                    method: type,
                    data: data,
                    url: url,
                    headers: exports.getHeader()
                }).then(function successCallback(response) {                
                    return response;                
                }, function errorCallback(error) {
                    errorHandle(error);
                });
            } catch (e) {
                
            }
        };

        exports.callWebApi2 = function (type, data, url) {
            try {
                return $http({
                    method: type,
                    data: data,
                    url: url,
                    headers: exports.getHeader()
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(error) {
                    errorHandle(error);
                });
            } catch (e) {

            }
        };


        exports.loginWebApi = function (data) {
            try {
                return $http({
                    method: 'POST',
                    data: data,
                    url: '/Token',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(error) {  
                    errorHandle(error);
                });
            } catch (e) {

            }            
        };

        exports.registerWebApi = function (data) {
            try {
                return $http({
                    method: 'POST',
                    data: data,
                    url: '/api/Account/Register',
                    headers: { 'Content-Type': 'application/json; charset=utf-8' }
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(error) {
                    errorHandle(error);
                });
            } catch (e) {

            }
        };

        exports.logoutWebApi = function () {
            try {
                return $http({
                    method: 'POST',
                    url: '/api/Account/Logout',
                    headers: exports.getHeader()
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(error) {
                    errorHandle(error);
                });
            } catch (e) {

            }
        };

        function errorHandle(error) {
            if (!error)
                return '';

            switch(error.status)
            {
                case 401:
                    mpNavService.navigateToState('login', null);
                    break;
                case 404:
                    mpNavService.navigateToState('error', null);
                    break;
                case 500:
                    mpNavService.navigateToState('error', null);
                    break;
                default:
                    mpNotification.notify(showError(error), 'danger');
            }
        }


        function showError(error) {
            if (!error)
                return '';

            var response = error.data;
            var errorMessage = error.status + ' ' + error.statusText;

            if (response) {
                if (response.Message)
                    errorMessage += '\n' + response.Message;
                    
                if (response.ModelState) {
                    var modelState = response.ModelState;
                    for (var prop in modelState) {
                        if (modelState.hasOwnProperty(prop)) {
                            var msgArr = modelState[prop]; // expect array here
                            if (msgArr.length) {
                                for (var i = 0; i < msgArr.length; ++i)
                                    errorMessage += '\n' + msgArr[i];
                            }
                        }
                    }
                }
                if (response.error) errorMessage += '\n' + response.error;
                if (response.error_description) errorMessage += '\n' + response.error_description;
            }

            return errorMessage;
        }

        return exports;

    }
})();
//# sourceMappingURL=MatchPoint.client_components.js.map