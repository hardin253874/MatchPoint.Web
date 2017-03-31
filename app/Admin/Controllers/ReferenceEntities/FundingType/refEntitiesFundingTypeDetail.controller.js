(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesFundingTypeDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesFundingTypeDetailController]);

    function refEntitiesFundingTypeDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Funding Type Details";

        $scope.fId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.FundingTypeDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getFundingTypeDetail($scope.fId).then(function (response) {
                console.log('Get FundingType Service.... ');
                if (response) {
                    $scope.FundingTypeDetail = response.Data;
                    console.log('The value for FundingTypeDetail: ' + $scope.FundingTypeDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.fId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtypeeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjFundingTypeDetail = {
                Name: $scope.FundingTypeDetail.Name,
                IsActive: $scope.FundingTypeDetail.IsActive
            };

            ReferenceEntitiesService.updateFundingTypeDetails($scope.fId, ObjFundingTypeDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.fId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtypedetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.fId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtypedetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtype', params);
        };

        init();


    }


}());