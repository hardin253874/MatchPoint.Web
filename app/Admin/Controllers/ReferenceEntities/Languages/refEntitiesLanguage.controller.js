(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesLanguageController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', 'mpDataGridUtils', refEntitiesLanguageController]);

    function refEntitiesLanguageController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state, mpDataGridUtils) {

        $scope.title = "Languages";
        $scope.gridParams = $stateParams.gridParams;

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [
                             { name: 'BroadGroupCode', field: 'BroadGroupCode', displayName: 'Broad Group Code', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'BroadGroupName', field: 'BroadGroupName', displayName: 'Broad Group Name', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'NarrowGroupCode', field: 'NarrowGroupCode', displayName: 'Narrow Group Code', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'NarrowGroupName', field: 'NarrowGroupName', displayName: 'Narrow Group Name', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'LanguageCode', field: 'LanguageCode', displayName: 'Language Code', width: '15%', headerCellClass: 'gridHeader' },
                             { name: 'LanguageDescription', field: 'LanguageDescription', displayName: 'Language Description', width: '25%', headerCellClass: 'gridHeader' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'refentitylanguagedetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            includeDeactvated: false,
            showDeactvated: false,
            enableFiltering: true
        };
        console.log("Calling Language Services...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            ReferenceEntitiesService.getLanguages(options).then(function (response) {
                console.log('Get Language Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response); 
                }
            });
        }


        $scope.CreateLanguage = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycreatelanguage', params);
        };

        load();


    }

}());