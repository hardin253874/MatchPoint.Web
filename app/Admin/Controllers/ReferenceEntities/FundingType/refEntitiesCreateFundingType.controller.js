(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateFundingTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateFundingTypeController]);

    function refEntitiesCreateFundingTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Funding Type";
        $scope.dSId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.FundingTypeDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreateFundingType = function () {
            console.log('Save function triggered');
            var ObjFundingTypeDetail = {
                Name: $scope.FundingTypeDetail.Name,
                IsActive: $scope.FundingTypeDetail.IsActive
            };

            ReferenceEntitiesService.createFundingType($scope.dSId, ObjFundingTypeDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtype', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.dSId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityfundingtype', params);
        };

        init();

    }


}());