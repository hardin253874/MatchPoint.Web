(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveTypeDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesDriveTypeDetailController]);

    function refEntitiesDriveTypeDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Drive Type Details";

        $scope.dTId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveTypeDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getDriveTypeDetail($scope.dTId).then(function (response) {
                console.log('Get DriveType Service.... ');
                if (response) {
                    $scope.DriveTypeDetail = response.Data;
                    console.log('The value for DriveTypeDetail: ' + $scope.DriveTypeDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetypeeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjDriveTypeDetail = {
                Name: $scope.DriveTypeDetail.Name,
                IsActive: $scope.DriveTypeDetail.IsActive
            };

            ReferenceEntitiesService.updateDriveTypeDetails($scope.dTId, ObjDriveTypeDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetypedetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetypedetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetype', params);
        };

        init();


    }


}());