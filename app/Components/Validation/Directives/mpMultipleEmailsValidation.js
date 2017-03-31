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