(function () {
    "use strict";

    angular.module('mp.app.admin').controller('userAdminIndexController', ['$scope', 'mpNavService', '$stateParams', userAdminIndexController]);


    function userAdminIndexController($scope, mpNavService, $stateParams) {

        $scope.ucId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;

        $scope.GoToOU = function () {
            mpNavService.navigateToState('orgunitreproles', null);
        };

        $scope.GoToUserAccounts = function () {
            mpNavService.navigateToState('useraccounts', null);
        };

        $scope.GoToLogHistory = function () {
            mpNavService.navigateToState('organisationunits', null);
        };
    }


}());