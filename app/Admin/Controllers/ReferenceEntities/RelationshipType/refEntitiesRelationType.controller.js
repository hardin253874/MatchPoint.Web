(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesRelationshipTypeController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesRelationshipTypeController]);

    function refEntitiesRelationshipTypeController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Relationship Type Items";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '35%', headerCellClass: 'gridHeader' },
                             { name: 'Solitary', field: 'Solitary', displayName: 'Solitary', width: '35%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }
                             ];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentityrelationshiptypedetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling RelationshipType Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getRelationshipTypes(options).then(function (response) {
                console.log('Get RelationshipType Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateRelationshipType = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreaterelationshiptype', params);
        };

        load();


    }

}());