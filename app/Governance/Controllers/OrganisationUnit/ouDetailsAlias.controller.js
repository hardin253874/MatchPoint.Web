(function () {
    "use strict";

    angular.module('mp.app.organisationUnits').controller('ouDetailsAliasController', ['OrganisationUnitService', 'mpNavService', '$scope', '$routeParams', ouDetailsAliasController]);

    function ouDetailsAliasController(OrganisationUnitService, mpNavService, $scope, $routeParams) {

        $scope.ouId = $routeParams.Id;
        $scope.Aliases = [];
        //[{ Name: "aaaa" }, { Name: "bbbb" }];
        $scope.Alias = "asasasa";
        function init() {
            OrganisationUnitService.getOrganisationUnitAliases($scope.ouId).then(function (data) {

                $scope.Aliases = angular.fromJson(data.Aliases);
            });
        }

        init();

        $scope.back = function () {
            mpNavService.navigateToState('organisationUnits');
        };

        $scope.gridOptions = {
            detailPageState: null,
            callBackFunction: null,
            pageSize: 10,
            showSearch: false,
            gridColumnDefs: [
                { name: 'Name', field: 'Name', displayName: 'Alias', width: '100%', headerCellClass: 'gridHeader' },
            ]
        };
        console.log("Calling Get org unit  Aliases...");

        function load(options) {
            options = _.defaults(options, {
                searchText: '',
                pageNumber: 1,
                pageSize: 10,
                sortColumns: null
            });
            OrganisationUnitService.getOrganisationUnitAliases($scope.ouId).then(function (response) {
                console.log('Get Org Unit Alias Service.... ');

                if (response) {
                    $scope.gridOptions.totalItems = response.TotalItems;
                    $scope.gridOptions.gridData = response.GridData;
                }
            });
        }

        load();
    }

}());

