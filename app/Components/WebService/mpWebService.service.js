/**
 * A set of AngularJS services related to navigation.
 * @module navigation
 */

(function () {
    "use strict";

    angular.module('mp.components.webService')
        .factory('mpWebService', mpWebService);

    function mpWebService($http, mpNavService, mpLocalStorage, mpNotification) {
        var exports = {};
        
        
        exports.getHeader = function () {
            return  {
                Authorization: mpLocalStorage ? mpLocalStorage.getItem("TokenInfo") : null
            };            
        };

        exports.callWebApi = function (type, data, url)
        {
            try {
                return $http({
                    method: type,
                    data: data,
                    url: url,
                    headers: exports.getHeader()
                }).then(function successCallback(response) {                
                    return response;                
                }, function errorCallback(error) {
                    errorHandle(error);
                });
            } catch (e) {
                
            }
        };

        exports.callWebApi2 = function (type, data, url) {
            try {
                return $http({
                    method: type,
                    data: data,
                    url: url,
                    headers: exports.getHeader()
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(error) {
                    errorHandle(error);
                });
            } catch (e) {

            }
        };


        exports.loginWebApi = function (data) {
            try {
                return $http({
                    method: 'POST',
                    data: data,
                    url: '/Token',
                    headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(error) {  
                    errorHandle(error);
                });
            } catch (e) {

            }            
        };

        exports.registerWebApi = function (data) {
            try {
                return $http({
                    method: 'POST',
                    data: data,
                    url: '/api/Account/Register',
                    headers: { 'Content-Type': 'application/json; charset=utf-8' }
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(error) {
                    errorHandle(error);
                });
            } catch (e) {

            }
        };

        exports.logoutWebApi = function () {
            try {
                return $http({
                    method: 'POST',
                    url: '/api/Account/Logout',
                    headers: exports.getHeader()
                }).then(function successCallback(response) {
                    return response;
                }, function errorCallback(error) {
                    errorHandle(error);
                });
            } catch (e) {

            }
        };

        function errorHandle(error) {
            if (!error)
                return '';

            switch(error.status)
            {
                case 401:
                    mpNavService.navigateToState('login', null);
                    break;
                case 404:
                    mpNavService.navigateToState('error', null);
                    break;
                case 500:
                    mpNavService.navigateToState('error', null);
                    break;
                default:
                    mpNotification.notify(showError(error), 'danger');
            }
        }


        function showError(error) {
            if (!error)
                return '';

            var response = error.data;
            var errorMessage = error.status + ' ' + error.statusText;

            if (response) {
                if (response.Message)
                    errorMessage += '\n' + response.Message;
                    
                if (response.ModelState) {
                    var modelState = response.ModelState;
                    for (var prop in modelState) {
                        if (modelState.hasOwnProperty(prop)) {
                            var msgArr = modelState[prop]; // expect array here
                            if (msgArr.length) {
                                for (var i = 0; i < msgArr.length; ++i)
                                    errorMessage += '\n' + msgArr[i];
                            }
                        }
                    }
                }
                if (response.error) errorMessage += '\n' + response.error;
                if (response.error_description) errorMessage += '\n' + response.error_description;
            }

            return errorMessage;
        }

        return exports;

    }
})();