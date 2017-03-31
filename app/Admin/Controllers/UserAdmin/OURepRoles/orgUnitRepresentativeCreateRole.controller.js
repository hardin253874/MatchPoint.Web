(function()
{
    "use strict";

    angular.module('mp.app.admin').controller('orgUnitRepCreateRoleController', ['OrgUnitRepresentativeRoleService', '$scope', '$routeParams', '$location', 'mpNavService', '$stateParams', '$state', orgUnitRepCreateRoleController]);
 
    function orgUnitRepCreateRoleController(OrgUnitRepresentativeRoleService, $scope, $routeParams, $location, mpNavService, $stateParams, $state) {

        $scope.title = "Create Organisation Unit Representative Role";        
        $scope.uRepId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.OrgUnitRepRolesDetail = {};
           
        function init() {
            console.log('init loading...');

            OrgUnitRepresentativeRoleService.loadOrgUnitRepRoleValues().then(function (response) {
                console.log('Get Org Unit Rep Roles Service.... ');
                if (response) {
                    $scope.OrgUnitRepRolesDetail = response.Data;
                    console.log('The value for OrgUnitRepRolesDetail: ' + $scope.OrgUnitRepRolesDetail);
                }
            });
        }
              

        $scope.CreateOURole = function () {
            console.log('Save function triggered');
            var ObjOrgUnitRepRolesDetail = {
                RoleName: $scope.OrgUnitRepRolesDetail.RoleName,
                UserRoles: $scope.OrgUnitRepRolesDetail.UserRoles,
                OrgUnitTypes: $scope.OrgUnitRepRolesDetail.OrgUnitTypes
            };

            OrgUnitRepresentativeRoleService.CreateOrgUnitRepRole($scope.uRepId, ObjOrgUnitRepRolesDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            $scope.editing = false;

            var params = {
                Id: $scope.uRepId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreproles', params);
        };

        $scope.Cancel = function () {          
            var params = {
                Id: $scope.uRepId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreproles', params);
        };              

        init();

    }


}());


