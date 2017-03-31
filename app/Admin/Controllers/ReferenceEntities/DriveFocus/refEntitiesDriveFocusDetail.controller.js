(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveFocusDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesDriveFocusDetailController]);

    function refEntitiesDriveFocusDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Drive Focus Details";

        $scope.dFId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.DriveFocusDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getDriveFocusDetail($scope.dFId).then(function (response) {
                console.log('Get DriveFocus Service.... ');
                if (response) {
                    $scope.DriveFocusDetail = response.Data;
                    console.log('The value for DriveFocusDetail: ' + $scope.DriveFocusDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocuseditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjDriveFocusDetail = {
                Name: $scope.DriveFocusDetail.Name,                
                IsActive: $scope.DriveFocusDetail.IsActive
            };

            ReferenceEntitiesService.updateDriveFocusDetails($scope.dFId, ObjDriveFocusDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocusdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dFId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocusdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitydrivefocus', params);
        };

        init();


    }


}());