(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCBUStatusChangedReasonController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesCBUStatusChangedReasonController]);

    function refEntitiesCBUStatusChangedReasonController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "CBU Status Change Reason";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Description', field: 'Description', displayName: 'Description', width: '40%', headerCellClass: 'gridHeader' },
                             { name: 'Status', field: 'Status', displayName: 'Status', width: '40%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', type: 'boolean', width: '20%', enableFiltering: false, headerCellClass: 'gridHeader', cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }
        ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitycbustatuschangedreasondetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Status Changed Reason Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getCBUStatusChangedReasons(options).then(function (response) {
                console.log('Get Status Changed Reason Service.... ');
                if (response) {
                    $scope.gridOptions.totalItems = response.TotalItems;
                    $scope.gridOptions.gridData = response.GridData;
                    $scope.gridOptions.searchText = options.searchText;
                }
            });
        }


        $scope.CreateCBUStatusChangedReason = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatecbustatuschangedreason', params);
        };

        load();


    }

}());