(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesPriceItemController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesPriceItemController]);

    function refEntitiesPriceItemController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Price Items";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'ItemCode', field: 'ItemCode', displayName: 'Item Code', width: '35%', headerCellClass: 'gridHeader' },
                             { name: 'Description', field: 'Description', displayName: 'Description', width: '35%', headerCellClass: 'gridHeader' },
                             { name: 'InvoiceDescription', field: 'InvoiceDescription', displayName: 'Invoice Description', width: '30%', headerCellClass: 'gridHeader' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitypriceitemdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling PriceItem Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getPriceItems(options).then(function (response) {
                console.log('Get PriceItem Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreatePriceItem = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatepriceitem', params);
        };

        load();


    }

}());