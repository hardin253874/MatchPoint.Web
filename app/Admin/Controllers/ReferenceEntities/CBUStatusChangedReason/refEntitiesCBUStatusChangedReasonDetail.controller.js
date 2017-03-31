(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCBUStatusChangedReasonDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCBUStatusChangedReasonDetailController]);

    function refEntitiesCBUStatusChangedReasonDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "CBU Status Changed Reason Details";

        $scope.scrId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.CBUStatusChangedReasonDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getCBUStatusChangedReasonDetail($scope.scrId).then(function (response) {
                console.log('Get CBUStatusChangedReason Service.... ');
                if (response) {
                    $scope.CBUStatusChangedReasonDetail = response.Data;
                    console.log('The value for CBUStatusChangedReasonDetail: ' + $scope.CBUStatusChangedReasonDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreasoneditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjCBUStatusChangedReasonDetail = {
                Status: $scope.CBUStatusChangedReasonDetail.Status,
                Description: $scope.CBUStatusChangedReasonDetail.Description
            };

            ReferenceEntitiesService.updateCBUStatusChangedReasonDetails($scope.scrId, ObjCBUStatusChangedReasonDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreasondetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreasondetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreason', params);
        };

        init();
    }

}());