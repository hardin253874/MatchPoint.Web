(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateDriveFocusController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateDriveFocusController]);

    function refEntitiesCreateDriveFocusController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Drive Focus";
        $scope.dFId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveFocusDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreateDriveFocus = function () {
            console.log('Save function triggered');
            var ObjDriveFocusDetail = {
                Name: $scope.DriveFocusDetail.Name,                
                IsActive: $scope.DriveFocusDetail.IsActive
            };

            ReferenceEntitiesService.createDriveFocus($scope.dFId, ObjDriveFocusDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocus', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocus', params);
        };

        init();

    }


}());