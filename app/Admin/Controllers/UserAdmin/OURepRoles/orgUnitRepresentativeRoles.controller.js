(function()
{

    "use strict";

    angular.module('mp.app.admin').controller('orgUnitRepresentativeRolesController', ['OrgUnitRepresentativeRoleService', '$scope', 'mpNavService', '$stateParams', 'mpDataGridUtils', orgUnitRepresentativeRolesController]);

    function orgUnitRepresentativeRolesController(OrgUnitRepresentativeRoleService, $scope, mpNavService, $stateParams, mpDataGridUtils) {


        $scope.title = "Organisation Unit Representative Roles";
        $scope.gridParams = $stateParams.gridParams;
        
        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);

        $scope.gridColumnDefs = [                           
                             { name: 'RoleName', field: 'RoleName', displayName: 'Organisation Unit Representative Rep Role', width: '50%', headerCellClass: 'gridHeader' },
                             { name: 'IsActive', field: 'IsActive', displayName: ' Is Active', width: '50%', headerCellClass: 'gridHeader', enableFiltering: false, cellTemplate: '<div class="ui-grid-cell-contents"><span ng-if="row.entity.IsActive === true">Yes</span><span ng-if="row.entity.IsActive === false">No</span></div>' }];

        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'orgunitreprolesdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            gridColumnDefs: $scope.gridColumnDefs,
            showSearch: false,
            enableFiltering: true
        };
        console.log("Calling Organisation Unit Representative Roles...");

        function load(options) {
            if (!options && $scope.gridParams) {
                options = $scope.gridParams;
            }

            options = mpDataGridUtils.getDefaultOptions(options);

            OrgUnitRepresentativeRoleService.getOrgUnitRepRoles(options).then(function (response) {
                console.log('Get Organization Unit Representative Service.... ');
                if (response) {                    
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);
                }
            });
        }

        $scope.CreateOURepRole = function () {
                        
            var params = {                
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitcreatereprole', params);

        };
        
        load();
        
    }



}());