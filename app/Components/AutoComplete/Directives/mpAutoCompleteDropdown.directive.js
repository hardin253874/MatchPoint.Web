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