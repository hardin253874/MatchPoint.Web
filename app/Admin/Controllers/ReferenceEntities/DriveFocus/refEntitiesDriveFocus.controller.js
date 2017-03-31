(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDriveFocusController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesDriveFocusController]);

    function refEntitiesDriveFocusController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Drive Focus";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);


        $scope.gridColumnDefs = [
                             { name: 'Name', field: 'Name', displayName: 'Name', width: '50%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: 'IsActive', type: 'boolean', width: '50%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsActive">' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitydrivefocusdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling DriveFocus Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getDriveFocus(options).then(function (response) {
                console.log('Get DriveFocus Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateDriveFocus = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatedrivefocus', params);
        };

        load();

    }

}());

