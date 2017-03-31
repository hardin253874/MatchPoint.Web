(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesNationalitiesController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesNationalitiesController]);

    function refEntitiesNationalitiesController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Nationality";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                                { name: 'CountryName', field: 'CountryName', displayName: 'Country Name', width: '20%', headerCellClass: 'gridHeader' },
                                { name: 'CountryCode', field: 'CountryCode', displayName: 'Country Code', width: '20%', headerCellClass: 'gridHeader' },
                                { name: 'ISOCode', field: 'ISOCode', displayName: 'Iso Code', width: '20%', headerCellClass: 'gridHeader' },
                                { name: 'NationalityValue', field: 'NationalityValue', displayName: 'Nationality', width: '20%', headerCellClass: 'gridHeader' }
                               ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitynationalitydetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs, 
            showSearch: false,
            showDeactvated: false,
            includeDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Nationality Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getNationalities(options).then(function (response) {
                console.log('Get Nationality Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateNationality = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatenationality', params);
        };

        load();

    }



}());