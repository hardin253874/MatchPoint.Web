(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveStatusDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesDriveStatusDetailController]);

    function refEntitiesDriveStatusDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Drive Status Details";

        $scope.dSId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveStatusDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getDriveStatusDetail($scope.dSId).then(function (response) {
                console.log('Get DriveStatus Service.... ');
                if (response) {
                    $scope.DriveStatusDetail = response.Data;
                    console.log('The value for DriveStatusDetail: ' + $scope.DriveStatusDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatuseditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjDriveStatusDetail = {
                Name: $scope.DriveStatusDetail.Name,
                IsActive: $scope.DriveStatusDetail.IsActive
            };

            ReferenceEntitiesService.updateDriveStatusDetails($scope.dSId, ObjDriveStatusDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatusdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatusdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivestatus', params);
        };

        init();


    }


}());