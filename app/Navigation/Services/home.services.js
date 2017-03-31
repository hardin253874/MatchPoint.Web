(function () {
    "use strict";

    angular.module('mp.app.home')

    .factory('homeService',
        ['$http',
        function ($http) {
            var service = {};

            //service.GetSecureData = function (callback) {
            //    $http.get('/api/securedata')
            //        .success(function (response) {
            //            callback(response);
            //        });
            //};

            return service;
        }]);
}());