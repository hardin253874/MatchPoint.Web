(function () {

    angular.module('mp.app.admin')
        .service('OrgUnitRepresentativeRoleService', ['$http', 'mpLocalStorage', 'mpWebService', OrgUnitRepresentativeRoleService]);

    function OrgUnitRepresentativeRoleService($http, mpLocalStorage, mpWebService) {

        var self = this;

        self.getHeaders = function () {
            var token = mpLocalStorage.getItem('TokenInfo');

            return {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            };
        };

        //GetOrgUnitRepRoles
        self.getOrgUnitRepRoles = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });

            return mpWebService.callWebApi('POST', data, '/OrgUnitRepRolesAPI/GetOrgUnitRepRoles').then(function (response) {
                return response ? response.data : null;
            });
        };

       
        //GetOrgUnitRepRolesDetail
        self.getOrgUnitRepRolesDetail = function (userRepId) {   
            return mpWebService.callWebApi('POST', userRepId, '/OrgUnitRepRolesAPI/GetOrgUnitRepRolesDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //UpdateOrgUnitRepRolesDetails
        self.updateOrgUnitRepRoleDetails = function (userRepId, objRepRoleDetails) {
            console.log('Inside updateOrgUnitRepRoleDetails');
            var data = {
                Id: userRepId,
                UserRepRole: objRepRoleDetails
            };

            return mpWebService.callWebApi('POST', data, '/OrgUnitRepRolesAPI/UpdateOrgUnitRepRolesDetail').then(function (response) {
                return response ? response.data : null;
            });

        };

        //LoadOrgUnitRepRoleValues
        self.loadOrgUnitRepRoleValues = function () {
            console.log('Inside LoadOrgUnitRepRole');
            var data = null;
            return mpWebService.callWebApi('POST', data, '/OrgUnitRepRolesAPI/LoadOrgUnitRepRoleValues').then(function (response) {
                return response ? response.data : null;
            });
        };


        //CreateOrgUnitRepRole
        self.CreateOrgUnitRepRole = function () {
            console.log('Inside CreateOrgUnitRepRole');
            var data = null;
            return mpWebService.callWebApi('POST', data, '/OrgUnitRepRolesAPI/CreateOrgUnitRepRole').then(function (response) {
                return response ? response.data : null;
            });
        };

    }
}());

