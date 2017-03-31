(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateStatusChangedReasonController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateStatusChangedReasonController]);

    function refEntitiesCreateStatusChangedReasonController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create StatusChangedReason";
        $scope.scrId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.StatusChangedReasonDetail = {};
        $scope.StatusItems = {};

        function init() {
            console.log('init loading...');
            $scope.LoadStatusChangedReasonItems();
        }

        $scope.LoadStatusChangedReasonItems = function () {
            console.log('Load Status Changed Reason Items');
            
            ReferenceEntitiesService.loadStatusChangedReasonItems().then(function (response) {
                console.log('Load Status Changed Reason Service.... ');
                if (response) {
                    console.log('The Status Changed Reason Items: ' + response.Data);
                    $scope.StatusItems = response.Data;

                    //Selection of dropdown value
                    //var authMethodValue = $scope.UserAccountDetails.authMethod;
                    //var selectedIndex = 0;
                    //for (var i = 0; i < $scope.authMethodValues.length; i++) {
                    //    var auValue = $scope.authMethodValues[i].name;
                    //    if (auValue == authMethodValue) {
                    //        selectedIndex = i;
                    //        break;
                    //    }
                    //}
                    //$scope.selectedAuthValue = $scope.authMethodValues[selectedIndex];
                    //console.log('Selected Option: ' + $scope.selectedAuthValue);


                }
            });
        };




        $scope.CreateStatusChangedReason = function () {
            console.log('Save function triggered');
            var ObjStatusChangedReasonDetail = {
                Status: $scope.StatusChangedReasonDetail.Status,
                Description: $scope.StatusChangedReasonDetail.Description                
            };

            ReferenceEntitiesService.createStatusChangedReason($scope.scrId, ObjStatusChangedReasonDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreason', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.scrId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitystatuschangedreason', params);
        };

        init();
    }

}());