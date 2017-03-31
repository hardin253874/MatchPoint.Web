(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveStatusController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state','mpDataGridUtils', refEntitiesDriveStatusController]);

    function refEntitiesDriveStatusController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Drive Status";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '50%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', type: 'boolean', width: '50%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }];

        $scope.gridOptions = {
            detailPageState: 'refentitydrivestatusdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        console.log("Calling DriveStatus Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getDriveStatus(options).then(function (response) {
                console.log('Get DriveStatus Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateDriveStatus = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatedrivestatus', params);
        };

        load();

    }

}());

