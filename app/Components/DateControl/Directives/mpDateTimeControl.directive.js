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