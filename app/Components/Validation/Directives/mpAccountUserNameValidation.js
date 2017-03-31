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