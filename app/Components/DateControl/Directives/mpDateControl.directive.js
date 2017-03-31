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