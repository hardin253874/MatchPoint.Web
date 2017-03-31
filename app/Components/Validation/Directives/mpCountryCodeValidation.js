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