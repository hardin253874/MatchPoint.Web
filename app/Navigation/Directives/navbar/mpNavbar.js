(function () {
    "use strict";

    angular.module('app')
       .directive('mpNavbar', mpNavbar);

    function mpNavbar($state, $location, mpNavService, AuthenticationService) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                options: '='
            },
            templateUrl: '/app/Navigation/Directives/navbar/mpNavbar.tpl.html',
            link: function (scope, state, location) {
               
                scope.isActive = function (treeNodeState) {
                    if (mpNavService) {
                        var currentRootItem = mpNavService.getCurrentRootItem();
                        return currentRootItem && currentRootItem.state === treeNodeState;
                    } else {
                        return false;
                    }
                };

                scope.showSubMenu = function (leaf) {
                    return leaf.subtree;
                };

                scope.navigateToState = function (state) {
                    mpNavService.setCurrentState(state);
                    mpNavService.navigateToState(state, null);                   
                };

                scope.navigateToHome = function () {
                    mpNavService.resetMenuState();
                    mpNavService.navigateToState('home', null);
                };

                scope.logout = function (state) {
                    mpNavService.reset();
                    AuthenticationService.logoutMVCWebApi().then(function (response) {
                        if (response !== null) {
                            AuthenticationService.ClearCredentials();
                            mpNavService.navigateToState('login', null);
                        }
                    });
                   
                };


                if (mpNavService && !mpNavService.getUserAccount()) {
                    mpNavService.reset();
                    mpNavService.navigateToState('login', null);
                }

                scope.tree = mpNavService.getMenuTree() || {};

            }
        };
    }

}());