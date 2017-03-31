(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesPriceItemDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesPriceItemDetailController]);

    function refEntitiesPriceItemDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "View Price Item Details";

        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.PriceItemDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getPriceItemDetail($scope.pId).then(function (response) {
                console.log('Get PriceItem Service.... ');
                if (response) {
                    $scope.PriceItemDetail = response.Data;
                    console.log('The value for PriceItemDetail: ' + $scope.PriceItemDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitemeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjPriceItemDetail = {
                ItemCode: $scope.PriceItemDetail.ItemCode,
                Description: $scope.PriceItemDetail.Description,
                InvoiceDescription: $scope.PriceItemDetail.InvoiceDescription
            };

            ReferenceEntitiesService.updatePriceItemDetails($scope.pId, ObjPriceItemDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitemdetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitemdetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitypriceitem', params);
        };

        init();
    }

}());