(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateDriveTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateDriveTypeController]);

    function refEntitiesCreateDriveTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Drive Type";
        $scope.dTId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveTypeDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateDriveType = function () {
            console.log('Save function triggered');
            var ObjDriveTypeDetail = {
                Name: $scope.DriveTypeDetail.Name,
                IsActive: $scope.DriveTypeDetail.IsActive
            };

            ReferenceEntitiesService.createDriveType($scope.dTId, ObjDriveTypeDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetype', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dTId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivetype', params);
        };

        init();

    }


}());