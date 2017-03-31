(function()
{
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesDiagnosisController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils',refEntitiesDiagnosisController]);

    function refEntitiesDiagnosisController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "ICD10";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);


        $scope.gridColumnDefs =  [
                             { name: 'CategoryCode', field: 'CategoryCode', displayName: 'Category Code', width: '20%', headerCellClass: 'gridHeader' },
                             { name: 'CategoryDescription', field: 'CategoryDescription', displayName: 'Category Description', width: '20%', headerCellClass: 'gridHeader' },
                             { name: 'SubCategoryCode', field: 'SubCategoryCode', displayName: 'Sub Category Code', width: '20%', headerCellClass: 'gridHeader' },
                             { name: 'SubCategoryDescription', field: 'SubCategoryDescription', displayName: 'Sub Category Description', width: '20%', headerCellClass: 'gridHeader' },                             
                             { name: 'IsAcceptableTransplant', field: 'IsAcceptableTransplant', displayName: 'Is Acceptable Transplant', type: 'boolean', width: '20%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<input type="checkbox" disabled ng-model="row.entity.IsAcceptableTransplant">' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitydiagnosisdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Diagnosis Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getDiagnosis(options).then(function (response) {
                console.log('Get Diagnosis Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }


        $scope.CreateDiagnosis = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatediagnosis', params);
        };

        load();

    }

}());

