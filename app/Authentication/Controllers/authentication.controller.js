(function () {
    "use strict";

    angular.module('app')

    .controller('LoginController', function ($scope, $location, mpLocalStorage, AuthenticationService,mpNotification, $http, $httpParamSerializerJQLike) {
            // reset login status
            //AuthenticationService.ClearCredentials();

        $scope.model = {
            username : '',
            password: '',
            loginMode: true,
            error: null
        };

        $scope.oldlogin = function () {
            $scope.dataLoading = true;

            if (mpLocalStorage) {
                AuthenticationService.Login($scope.model.username, $scope.model.password).then(function (response) {
                    if (response) {                                                       
                        AuthenticationService.SetCredentials(response, $scope.model.username);
                        $location.path('/');
                    }

                });

            }

            //if ($scope.username === 'patientuser') {
            //    mpLocalStorage.setObject("credential", { id: 1, name: "patient user", role: "patientRole" });
            //} else if ($scope.username === 'donoruser') {
            //    mpLocalStorage.setObject("credential", { id: 2, name: "donor user", role: "donorRole" });
            //} else {
            //    mpLocalStorage.setObject("credential", { id: 2, name: "other user", role: "allRole" });
            //}

            //mpLocalStorage.setItem("TokenInfo", 'Basic RURDXEFkbWluaXN0cmF0b3I6UGFzc3dvcmQ=');


            $location.path('/');
            //AuthenticationService.Login($scope.username, $scope.password, function (response) {
            //    if (response.success) {
            //        AuthenticationService.SetCredentials($scope.username, $scope.password);
            //        $location.path('/');
            //    } else {
            //        $scope.error = response.message;
            //        $scope.dataLoading = false;
            //    }
            //});
        };

        $scope.login = function () {
            if (mpLocalStorage) {
                login();
            }                
        };

        $scope.register = function () {
            $scope.dataLoading = true;

            if (mpLocalStorage) {
                AuthenticationService.registerMVCWebApi($scope.model.username, $scope.model.password).then(function (response) {
                    if (response !== null) {
                        //$scope.model.username = '';
                        //$scope.model.password = '';
                        $scope.model.loginMode = true;
                        $scope.dataLoading = false;
                        mpNotification.notify('register successful');  
						
						login();
                    }

                    $scope.dataLoading = false;
                });
            }
        };

        function login(){
			$scope.dataLoading = true;
			AuthenticationService.LoginMVCWebApi($scope.model.username, $scope.model.password).then(function (response) {
                    if (response) {
                        AuthenticationService.SetBearerCredentials(response);
                        $location.path('/');
                    }

                    $scope.dataLoading = false;
                });
		}
   });
}());