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