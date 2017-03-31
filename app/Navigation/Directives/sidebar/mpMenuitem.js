(function () {
    "use strict";

    angular.module('app')
        .directive('mpMenuitem', mpMenuitem)
        .directive('mpMenusubitem', mpMenusubitem);

    function mpMenuitem() {
        return {
            restrict: "E",
            replace: true,
            scope: {
                leaf: '='
            },
            template: "<a href=\"#{{leaf.state}}\" class=\"list-group-item list-group-item-success\" data-toggle=\"collapse\" data-parent=\"#MainMenu\">{{leaf.name}}  <i class=\"fa fa-caret-down\"></i></a><div class=\"collapse\" id='leaf.state'><mp-menusubitem ng-repeat='subleaf in leaf.subtree' leaf='subleaf'></mp-menusubitem></ul>"
        };
    }

    function mpMenusubitem($compile, $state, mpNavService) {
        return {
            restrict: "E",
            replace: true,
            scope: {
                leaf: "="
            },
            template: "<a ng-click=\"navigateToState('refentitiesindex')\" class='list-group-item' style='cursor:pointer'>{{leaf.name}}</a>",//  "<li ng-class=\"{divider: leaf.name == 'divider'}\"><a ng-click=\"navigateToState(leaf.state)\" style='cursor:pointer'>{{leaf.name}}</a></li>",
            link: function (scope, element, attrs) {
                if (angular.isArray(scope.leaf.subtree)) {
                    element.append("<mp-menuitem leaf='leaf'></mp-menuitem>");
                    element.addClass('collapse');
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