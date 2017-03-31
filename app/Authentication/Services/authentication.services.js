(function () {
    "use strict";

    angular.module('mp.app.authentication')

    .factory('AuthenticationService',
        ['Base64', '$http',  '$rootScope', 'mpLocalStorage', 'mpWebService','$httpParamSerializerJQLike',
        function (Base64, $http, $rootScope, mpLocalStorage, mpWebService, $httpParamSerializerJQLike) {
            var service = {};


            service.Login = function (loginName, password) {
               
                var data = {
                    loginName: loginName,
                    password: password
                };

                return mpWebService.callWebApi('POST', data, '/LoginAPI/Login').then(function (response) {
                    return response ? response.data : null;
                });

            };

            service.registerMVCWebApi = function (username, password) {
                var data = JSON.stringify(
                    {
                        Email: username,
                        Password: password,
                        ConfirmPassword: password
                    });

                

                return mpWebService.registerWebApi(data).then(function (response) {
                    return response ? response.data : null;
                });

            };

            service.logoutMVCWebApi = function () {
                return mpWebService.logoutWebApi().then(function (response) {
                    return response ? response.data : null;
                });
            };

            service.LoginMVCWebApi = function (loginName, password) {

                var data = {
                    grant_type: 'password',
                    username: loginName,
                    password: password
                };


                return mpWebService.loginWebApi($httpParamSerializerJQLike(data)).then(function (response) {
                    return response ? response.data : null;
                });
            };

            service.SetCredentials = function (response, username) {
                var authdata = Base64.encode(username);

                $rootScope.globals = {
                    currentUser: {
                        username: username,
                        authdata: authdata
                    }
                };
                mpLocalStorage.setObject("credential", { id: response.Id, name: response.UserName, role: response.Roles });
                mpLocalStorage.setItem("TokenInfo", 'Basic ' + authdata); //response.Token todo, MVC will return token from server
                $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
                mpLocalStorage.setItem('globals', $rootScope.globals);
               
            };

            service.SetBearerCredentials = function (response) {
                var userName = response.userName;
                var token = response.access_token;
                var credential = null;
                switch (userName) {
                    case 'test@test.com':
                        credential = { id: 3, name: 'other user', role: 'allRole' };
                        break;
                    case 'patientuser@test.com':
                        credential = { id: 1, name: 'patient user', role: 'patientRole' };
                        break;
                    case 'donoruser@test.com':
                        credential = { id: 2, name: 'donor user', role: 'donorRole' };
                        break;
                    default:
                        credential = { id: 3, name: 'other user', role: 'allRole' };
                        break;
                }

                //{ id: response.Id, name: response.UserName, role: response.Roles }

                mpLocalStorage.setObject("credential", credential);
                mpLocalStorage.setItem("TokenInfo", 'bearer ' + token); //response.Token todo, MVC will return token from server
                $http.defaults.headers.common['Authorization'] = 'bearer ' + token; // jshint ignore:line
                mpLocalStorage.setItem('globals', $rootScope.globals);

            };

            service.ClearCredentials = function () {
                $rootScope.globals = {};
                mpLocalStorage.removeItem('globals');
                $http.defaults.headers.common.Authorization = 'Basic ';
            };

            return service;
        }])

        .factory('Base64', function () {
        /* jshint ignore:start */

        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        return {
            encode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output +
                        keyStr.charAt(enc1) +
                        keyStr.charAt(enc2) +
                        keyStr.charAt(enc3) +
                        keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                } while (i < input.length);

                return output;
            },

            decode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                var base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                    window.alert("There were invalid base64 characters in the input text.\n" +
                        "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                        "Expect errors in decoding.");
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));

                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;

                    output = output + String.fromCharCode(chr1);

                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }

                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";

                } while (i < input.length);

                return output;
            }
        };

        /* jshint ignore:end */
    });
}());