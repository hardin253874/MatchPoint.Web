(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesConfigurationDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesConfigurationDetailController]);

    function refEntitiesConfigurationDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Configuration Details";

        $scope.conId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.ConfigurationDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getConfigurationDetail($scope.conId).then(function (response) {
                console.log('Get Configuration Service.... ');
                if (response) {
                    $scope.ConfigurationDetail = response.Data;
                    console.log('The value for ConfigurationDetail: ' + $scope.ConfigurationDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.conId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityconfigurationeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjConfigurationDetail = {
                Status: $scope.ConfigurationDetail.Status,
                Description: $scope.ConfigurationDetail.Description
            };

            ReferenceEntitiesService.updateConfigurationDetails($scope.conId, ObjConfigurationDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.conId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityconfigurationdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.conId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityconfigurationdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityconfiguration', params);
        };

        init();
    }

}());