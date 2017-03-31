(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateItemMappingController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateItemMappingController]);

    function refEntitiesCreateItemMappingController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Item Mappings";
        $scope.iNumId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.ItemMappingDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateItemMapping = function () {
            console.log('Save function triggered');
            var ObjItemMappingDetail = {
                Name: $scope.ItemMappingDetail.Name,
                IsActive: $scope.ItemMappingDetail.IsActive
            };

            ReferenceEntitiesService.createItemMapping($scope.iNumId, ObjItemMappingDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.iNumId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmapping', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.iNumId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityitemmapping', params);
        };

        init();

    }


}());