(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesReqNotifyConfigurationDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesReqNotifyConfigurationDetailController]);

    function refEntitiesReqNotifyConfigurationDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Request Notification Configuration Details";

        $scope.reqNotifyId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.ReqNotifyConfigurationDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getReqNotifyConfigurationDetail($scope.reqNotifyId).then(function (response) {
                console.log('Get ReqNotifyConfiguration Service.... ');
                if (response) {
                    $scope.ReqNotifyConfigurationDetail = response.Data;
                    console.log('The value for ReqNotifyConfigurationDetail: ' + $scope.ReqNotifyConfigurationDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.ReqNotifyConfigurationDetail.Id,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityreqnotifyconfigurationeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjReqNotifyConfigurationDetail = {
                ItemCode: $scope.ReqNotifyConfigurationDetail.ItemCode,
                Description: $scope.ReqNotifyConfigurationDetail.Description,
                InvoiceDescription: $scope.ReqNotifyConfigurationDetail.InvoiceDescription
            };

            ReferenceEntitiesService.updateReqNotifyConfigurationDetails($scope.reqNotifyId, ObjReqNotifyConfigurationDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.reqNotifyId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityreqnotifyconfigurationdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.reqNotifyId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityreqnotifyconfigurationdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityreqnotifyconfiguration', params);
        };

        init();
    }

}());