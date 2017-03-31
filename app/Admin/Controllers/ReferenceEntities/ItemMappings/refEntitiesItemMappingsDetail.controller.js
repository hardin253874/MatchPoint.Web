(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesItemMappingDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesItemMappingDetailController]);

    function refEntitiesItemMappingDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Item Mappings Details";

        $scope.iMapId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.ItemMappingDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getItemMappingDetail($scope.iMapId).then(function (response) {
                console.log('Get ItemMapping Service.... ');
                if (response) {
                    $scope.ItemMappingDetail = response.Data;
                    console.log('The value for ItemMappingDetail: ' + $scope.ItemMappingDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.iMapId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmappingeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjItemMappingDetail = {
                Name: $scope.ItemMappingDetail.Name,
                IsActive: $scope.ItemMappingDetail.IsActive
            };

            ReferenceEntitiesService.updateItemMappingDetails($scope.iMapId, ObjItemMappingDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.iMapId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmappingdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.iMapId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmappingdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmapping', params);
        };

        init();


    }


}());