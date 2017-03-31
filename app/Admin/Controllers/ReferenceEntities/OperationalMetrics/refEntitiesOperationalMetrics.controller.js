(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesOperationalMetricsController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesOperationalMetricsController]);

    function refEntitiesOperationalMetricsController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Operational Metrics";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '30%', headerCellClass: 'gridHeader' },
                             { name: 'Description', field: 'Description', displayName: 'Description', width: '70%', headerCellClass: 'gridHeader' }
                             ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentityoperationalmetricseditdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling OperationalMetrics Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getOperationalMetrics(options).then(function (response) {
                console.log('Get OperationalMetrics Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }

        load();


    }

}());