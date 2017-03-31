(function () {
    'use strict';

    angular.module('app')
        .controller("appController", AppController)
        .controller("appHeader", AppHeader)
        .controller("appFooter", AppFooter);

    function AppController($scope, mpLocalStorage, mpNavService) {        
        $scope.userName = mpNavService ?  mpNavService.getUserName() : '';
        $scope.userRole = mpNavService ?  mpNavService.getUserRole() : '';
    }

    function AppHeader($scope, $location, mpNavService, AuthenticationService) {
        $scope.model = {
            showHeader : true,
            userName : ''
        };
        $scope.$watch(function () { return $location.$$path; }, function (params) {
            $scope.model.showHeader = params === '/login' ? false : true;
        });
        $scope.model.userName = mpNavService.getUserName();
        $scope.logout = function () {
            mpNavService.reset();
            AuthenticationService.logoutMVCWebApi().then(function (response) {
                if (response !== null) {
                    AuthenticationService.ClearCredentials();
                    mpNavService.navigateToState('login', null);
                }
            });
        };
    }

    function AppFooter($scope, $location, mpNavService) {
        $scope.model = {
            showFooter: true
        };
        

        $scope.$watch(function () { return $location.$$path; }, function (params) {
            $scope.model.showFooter = params === '/login' ? false : true;           
        });

    }
}());
