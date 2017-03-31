(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateCBUStatusChangedReasonController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateCBUStatusChangedReasonController]);

    function refEntitiesCreateCBUStatusChangedReasonController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create CBUStatusChangedReason";
        $scope.scrId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.CBUStatusChangedReasonDetail = {};
        $scope.StatusItems = {};

        function init() {
            console.log('init loading...');
            $scope.LoadCBUStatusChangedReasonItems();
        }

        $scope.LoadCBUStatusChangedReasonItems = function () {
            console.log('Load Status Changed Reason Items');

            ReferenceEntitiesService.loadCBUStatusChangedReasonItems().then(function (response) {
                console.log('Load Status Changed Reason Service.... ');
                if (response) {
                    console.log('The Status Changed Reason Items: ' + response.Data);
                    $scope.StatusItems = response.Data;
                }
            });
        };




        $scope.CreateCBUStatusChangedReason = function () {
            console.log('Save function triggered');
            var ObjCBUStatusChangedReasonDetail = {
                Status: $scope.CBUStatusChangedReasonDetail.Status,
                Description: $scope.CBUStatusChangedReasonDetail.Description
            };

            ReferenceEntitiesService.createCBUStatusChangedReason($scope.scrId, ObjCBUStatusChangedReasonDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreason', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycbustatuschangedreason', params);
        };

        init();
    }

}());