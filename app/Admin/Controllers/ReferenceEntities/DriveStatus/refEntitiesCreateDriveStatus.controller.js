(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateDriveStatusController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateDriveStatusController]);

    function refEntitiesCreateDriveStatusController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Drive Status";
        $scope.dSId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveStatusDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreateDriveStatus = function () {
            console.log('Save function triggered');
            var ObjDriveStatusDetail = {
                Name: $scope.DriveStatusDetail.Name,
                IsActive: $scope.DriveStatusDetail.IsActive
            };

            ReferenceEntitiesService.createDriveStatus($scope.dSId, ObjDriveStatusDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatus', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatus', params);
        };

        init();

    }


}());