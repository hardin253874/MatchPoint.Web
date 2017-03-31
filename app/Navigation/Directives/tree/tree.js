(function () {
    "use strict";

    angular.module('app')
        .directive('tree', tree)
        .directive('leaf', leaf);

    function tree() {
        return {
            restrict: "E",
            replace: true,
            scope: {
                tree: '='
            },
            template: "<ul class='dropdown-menu'><leaf ng-repeat='leaf in tree' leaf='leaf'></leaf></ul>"
        };    
    }

    function leaf($compile, $state, mpNavService) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                leaf: "="
            },
            template: "<li ng-class=\"{divider: leaf.name == 'divider'}\"><a ng-click=\"navigateToState(leaf.state)\" style='cursor:pointer'>{{leaf.name}}</a></li>",
            link: function (scope, element, attrs) {
                if (angular.isArray(scope.leaf.subtree)) {
                    element.append("<tree tree='leaf.subtree'></tree>");
                    element.addClass('dropdown-submenu');
                    $compile(element.contents())(scope);
                } else {                    
                }

                scope.navigateToState = function (state) {
                    mpNavService.setCurrentState(state);
                    mpNavService.navigateToState(state, null);
                };

            }
        };
    }
}());