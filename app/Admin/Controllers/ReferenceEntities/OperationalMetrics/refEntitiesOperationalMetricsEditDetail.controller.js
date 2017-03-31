(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesOperationalMetricEditDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesOperationalMetricEditDetailController]);

    function refEntitiesOperationalMetricEditDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Edit Operational Metrics Details";

        $scope.oMId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.OperationalMetricsDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getOperationalMetricsDetail($scope.oMId).then(function (response) {
                console.log('Get OperationalMetrics Service.... ');
                if (response) {
                    $scope.OperationalMetricsDetail = response.Data;
                    console.log('The value for OperationalMetricsDetail: ' + $scope.OperationalMetricsDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.oMId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityoperationalmetricseditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjOperationalMetricsDetail = {
                Name: $scope.OperationalMetricsDetail.Name,
                Description: $scope.OperationalMetricsDetail.Description
                };

            ReferenceEntitiesService.updateOperationalMetricsDetails($scope.oMId, ObjOperationalMetricsDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.oMId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityoperationalmetrics', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.oMId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityoperationalmetrics', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityoperationalmetrics', params);
        };

        init();
    }

}());