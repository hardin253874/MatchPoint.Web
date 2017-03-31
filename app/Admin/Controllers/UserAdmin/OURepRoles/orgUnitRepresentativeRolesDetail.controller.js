(function () {

    "use strict";

    angular.module('mp.app.admin').controller('orgUnitRepRolesDetailController', ['OrgUnitRepresentativeRoleService', '$scope', '$routeParams', '$location', 'mpNavService', '$stateParams', '$state', orgUnitRepRolesDetailController]);
 
    function orgUnitRepRolesDetailController(OrgUnitRepresentativeRoleService, $scope, $routeParams, $location, mpNavService, $stateParams, $state)
    {
        $scope.title = "Organisation Unit Representative Role";              
        $scope.editing = true;
        $scope.uRepId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.OrgUnitRepRolesDetail = {};
        
        //$scope.checkUserRepRoleValue = function (name) {
        //    if (name === 'Administrator')
        //        return true;
        //    else
        //        return false;
        //};

        //$scope.checkOrgUnitValue = function (name) {
        //    if (name === 'Independent Transplant Centre')
        //        return true;
        //    else
        //        return false;
        //};
        
        function init() {
            console.log('init loading...');           
              
            OrgUnitRepresentativeRoleService.getOrgUnitRepRolesDetail($scope.uRepId).then(function (response) {
                console.log('Get Org Unit Rep Roles Service.... ');
                if (response) {
                    $scope.OrgUnitRepRolesDetail = response.Data;
                    console.log('The value for OrgUnitRepRolesDetail: ' + $scope.OrgUnitRepRolesDetail);
                }
            });           
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
                var params = {
                    Id: $scope.uRepId,
                    gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreproleseditdetail', params);
        };
        
        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjOrgUnitRepRolesDetail = {
                RoleName: $scope.OrgUnitRepRolesDetail.RoleName,
                UserRoles: $scope.OrgUnitRepRolesDetail.UserRoles,
                OrgUnitTypes: $scope.OrgUnitRepRolesDetail.OrgUnitTypes                
            };

            OrgUnitRepresentativeRoleService.updateOrgUnitRepRoleDetails($scope.uRepId, ObjOrgUnitRepRolesDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            $scope.editing = false;
            
            var params = {
                Id: $scope.uRepId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreprolesdetail', params);
        };

        $scope.Cancel = function () {
            $scope.editing = false;
            var params = {
                Id: $scope.uRepId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreprolesdetail', params);            
        };
        
        $scope.Close = function () {          
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('orgunitreproles', params);
        };
        
        init();

    }




}());