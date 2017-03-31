(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesFundingTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesFundingTypeController]);

    function refEntitiesFundingTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Funding Type";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '50%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', enableFiltering: false, headerCellClass: 'gridHeader', type: 'boolean', width: '50%', cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }];

        $scope.gridOptions = {
            detailPageState: 'refentityfundingtypedetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,           
            showSearch: false,
            showDeactvated: false,
            includeDeactvated: false,
            enableFiltering: true
        };

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        console.log("Calling FundingType Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getFundingType(options).then(function (response) {
                console.log('Get FundingType Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateFundingType = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatefundingtype', params);
        };

        load();

    }

}());

