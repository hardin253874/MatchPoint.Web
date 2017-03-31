(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreatePriceItemController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreatePriceItemController]);

    function refEntitiesCreatePriceItemController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create PriceItem";
        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.PriceItemDetail = {};

        function init() {
            console.log('init loading...');
        }

        $scope.CreatePriceItem = function () {
            console.log('Save function triggered');
            var ObjPriceItemDetail = {
                ItemCode: $scope.PriceItemDetail.ItemCode,
                Description: $scope.PriceItemDetail.Description,
                InvoiceDescription: $scope.PriceItemDetail.InvoiceDescription
            };

            ReferenceEntitiesService.createPriceItem($scope.pId, ObjPriceItemDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitem', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitem', params);
        };

        init();
    }

}());