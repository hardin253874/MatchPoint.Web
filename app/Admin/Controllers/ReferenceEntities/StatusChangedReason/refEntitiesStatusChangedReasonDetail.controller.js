(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesStatusChangedReasonDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesStatusChangedReasonDetailController]);

    function refEntitiesStatusChangedReasonDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "View StatusChangedReason Details";

        $scope.scrId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.StatusChangedReasonDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getStatusChangedReasonDetail($scope.scrId).then(function (response) {
                console.log('Get StatusChangedReason Service.... ');
                if (response) {
                    $scope.StatusChangedReasonDetail = response.Data;
                    console.log('The value for StatusChangedReasonDetail: ' + $scope.StatusChangedReasonDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreasoneditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjStatusChangedReasonDetail = {
                Status: $scope.StatusChangedReasonDetail.Status,
                Description: $scope.StatusChangedReasonDetail.Description                
            };

            ReferenceEntitiesService.updateStatusChangedReasonDetails($scope.scrId, ObjStatusChangedReasonDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreasondetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreasondetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreason', params);
        };

        init();
    }

}());