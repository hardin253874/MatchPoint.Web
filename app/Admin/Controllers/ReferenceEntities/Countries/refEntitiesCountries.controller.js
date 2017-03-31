(function()
{
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCountryController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesCountryController]);

    function refEntitiesCountryController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils)
    {

        $scope.title = "Countries";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'CountryName', field: 'CountryName', displayName: 'Country Name', width: '40%', headerCellClass: 'gridHeader' },
                                { name: 'CountryCode', field: 'CountryCode', displayName: 'Country Code', width: '40%', headerCellClass: 'gridHeader' },
                                { name: 'DiallingCode', field: 'DiallingCode', displayName: 'Dialling Code', width: '20%', headerCellClass: 'gridHeader' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitycountrydetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Country Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getCountries(options).then(function (response) {
                console.log('Get Country Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateCountry = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatecountry', params);
        };

        load();


    }


}());