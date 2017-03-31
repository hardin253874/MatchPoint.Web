(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesAusPostalCodeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesAusPostalCodeController]);

    function refEntitiesAusPostalCodeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Australian Postal Code";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'PostalCode', field: 'PostalCode', displayName: 'Postal Code', width: '40%', headerCellClass: 'gridHeader' },
                                { name: 'Locality', field: 'Locality', displayName: 'Locality', width: '40%', headerCellClass: 'gridHeader' },
                                { name: 'State', field: 'State', displayName: 'State', width: '20%', headerCellClass: 'gridHeader' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentityauspostcodedetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Postal Code Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getPostalCodes(options).then(function (response) {
                console.log('Get Postal Code Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreatePostalCode = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatepostcode', params);
        };

        load();

    }



}());