(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesItemMappingController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesItemMappingController]);

    function refEntitiesItemMappingController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Item Mappings";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                            { name: 'SourceEntity', field: 'SourceEntity', displayName: 'Source Entity', width: '33.3%', headerCellClass: 'gridHeader' },
                            { name: 'MappedFrom', field: 'MappedFrom', displayName: 'Mapped From', width: '33.3%', headerCellClass: 'gridHeader' },
                            { name: 'MappedTo', field: 'MappedTo', displayName: 'Mapped To', width: '33.3%', headerCellClass: 'gridHeader' }
                          ];

        $scope.gridOptions = {
            detailPageState: 'refentityitemmappingdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            showDeactvated: false,
            includeDeactvated: false,
            enableFiltering: true
        };

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);


        console.log("Calling ItemMapping Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getItemMapping(options).then(function (response) {
                console.log('Get ItemMapping Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateItemMapping = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreateitemmapping', params);
        };

        load();

    }

}());

