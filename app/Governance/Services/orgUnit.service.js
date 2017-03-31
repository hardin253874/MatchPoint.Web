(function()
{
    'use strict';
    

    angular.module('mp.app.admin')
          .service('OrgUnitService', ['$http', 'mpLocalStorage', 'mpWebService', OrgUnitService]);

    function OrgUnitService($http, mpLocalStorage, mpWebService)
    {

        var self = this;

        self.getHeaders = function () {
            var token = mpLocalStorage.getItem('TokenInfo');

            return {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            };
        };

        self.getOrgUnits = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null
                });

            return mpWebService.callWebApi('POST', data, '/OrganizationUnitAPI/GetOrganizationUnits').then(function (response) {
                return response ? response.data : null;
            });

        };

    }



        



}());