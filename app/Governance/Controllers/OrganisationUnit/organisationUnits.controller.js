(function () {
    "use strict";

    angular.module('mp.app.organisationUnits').controller('OrganisationUnitController', ['OrganisationUnitService', '$scope', '$stateParams', 'mpDataGridUtils', OrganisationUnitController]);

    function OrganisationUnitController(OrganisationUnitService, $scope, $stateParams, mpDataGridUtils) {

        $scope.title = "Organisation Units";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                                    //{ name: 'Id', field: 'Id', displayName: 'Id', width: '10%', headerCellClass: 'gridHeader' },
                                     { name: 'Name', field: 'Name', displayName: 'Name', width: '40%', headerCellClass: 'gridHeader' },
                                     { name: 'Alias', field: 'Alias', displayName: 'Alias', width: '30%', headerCellClass: 'gridHeader' },
                                     { name: 'IsGovernedBy', field: 'IsGovernedBy', displayName: 'Is GovernedBy', width: '30%', headerCellClass: 'gridHeader' }
        ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'organisationunitdetails',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            enableFiltering: true
        };
        console.log("Calling Get org units...");

        function load(options) {

            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            OrganisationUnitService.getOrganisationUnits(options).then(function (response) {
                console.log('Get Org Unit Service.... ');
              
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }

        load();
    }
}());

