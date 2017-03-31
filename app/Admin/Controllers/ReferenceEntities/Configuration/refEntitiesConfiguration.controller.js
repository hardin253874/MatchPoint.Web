(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesConfigurationController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesConfigurationController]);

    function refEntitiesConfigurationController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Configuration";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                                  { name: 'Key', field: 'Key', displayName: 'Key', width: '50%', headerCellClass: 'gridHeader' },
                                  { name: 'Value', field: 'Value', displayName: 'Value', width: '50%', headerCellClass: 'gridHeader' }                             
                                ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentityconfigurationdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            enableFiltering: true
        };
        console.log("Calling Configuration Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getConfigurations(options).then(function (response) {
                console.log('Get Configuration Service.... ');
                if (response) {
                    $scope.gridOptions.totalItems = response.TotalItems;
                    $scope.gridOptions.gridData = response.GridData;
                    $scope.gridOptions.searchText = options.searchText;
                }
            });
        }       

        load();


    }

}());