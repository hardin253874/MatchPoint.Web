(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesInvoiceNumCounterController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesInvoiceNumCounterController]);

    function refEntitiesInvoiceNumCounterController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Invoice Number Counters";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                            { name: 'DonorInvoicePrefix', field: 'DonorInvoicePrefix', displayName: 'Donor Invoice Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'DonorInvoiceCounter', field: 'DonorInvoiceCounter', displayName: 'DonorInvoice Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'DonorCreditPrefix', field: 'DonorCreditPrefix', displayName: 'Donor Credit Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'DonorCreditCounter', field: 'DonorCreditCounter', displayName: 'Donor Credit Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'CordInvoicePrefix', field: 'CordInvoicePrefix', displayName: 'Cord Invoice Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'CordInvoiceCounter', field: 'CordInvoiceCounter', displayName: 'Cord Invoice Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'CordCreditPrefix', field: 'CordCreditPrefix', displayName: 'Cord Credit Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'CordCreditCounter', field: 'CordCreditCounter', displayName: 'Cord Credit Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'NCBCNInvoicePrefix', field: 'NCBCNInvoicePrefix', displayName: 'NCBCN Invoice Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'NCBCNInvoiceCounter', field: 'NCBCNInvoiceCounter', displayName: 'NCBCN Invoice Counter', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'NCBCNCreditPrefix', field: 'NCBCNCreditPrefix', displayName: 'NCBCN Credit Prefix', width: '8.3%', headerCellClass: 'gridHeader' },
                            { name: 'NCBCNCreditCounter', field: 'NCBCNCreditCounter', displayName: 'NCBCN Credit Counter', width: '8.3%', headerCellClass: 'gridHeader' }];

        $scope.gridOptions = {
            detailPageState: 'refentityinvoicenumcounterdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            showDeactvated : false,        
            includeDeactvated: false,
            enableFiltering: false
        };

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);


        console.log("Calling InvoiceNumCounter Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getInvoiceNumCounter(options).then(function (response) {
                console.log('Get InvoiceNumCounter Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateInvoiceNumCounter = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreateinvoicenumcounter', params);
        };

        load();

    }

}());

