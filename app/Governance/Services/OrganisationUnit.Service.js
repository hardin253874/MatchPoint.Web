(function () {
    'use strict';


    angular.module('mp.app.organisationUnits')
    .service('OrganisationUnitService', ['$http', OrganisationUnitService]);

    function OrganisationUnitService($http) {

        this.getOrganisationUnits = function (options) {
            var DEFAULT_PAGESIZE = 20;
            var data = _.defaults(options,
                   {
                       searchText: '',
                       pageNumber: 1,
                       pageSize: DEFAULT_PAGESIZE,
                       sortColumns: null
                   });
            return $http({
                method: 'POST',
                data: data,
                url: '/OrganisationUnitAPI/GetOrganisationUnits'
            }).then(function successCallback(response) {
                if (response && response.data)
                    return response.data;
                else
                    return [];
            },
            function errorCallback(response) {
                alert(error);
            });

        };


        this.getOrganisationUnitDetails = function (id) {
            return $http({
                method: 'GET',
                url: '/OrganisationUnitAPI/GetOrganisationUnit/' + id
            }).then(function successCallback(response) {

                if (response && response.data) {
                    return response.data;
                }
                else
                    return [];
            },
            function errorCallback(response) {
                alert(error);
            });

        };


        this.getOrganisationUnitAliases = function (id) {
            return $http({
                method: 'GET',
                url: '/OrganisationUnitAPI/GetOrganisationUnitAliases/' + id
            }).then(function successCallback(response) {

                if (response && response.data) {
                    return response.data;
                }
                else
                    return [];
            },
            function errorCallback(response) {
                alert(error);
            });

        };

        this.editOrganisationUnit = function (data) {
            return $http({
                method: 'POST',
                data: data,
                url: '/OrganisationUnitAPI/Edit/'
            }).then(function successCallback(response) {
                if (response) {
                    return response;
                }
                else
                    return [];
            },
            function errorCallback(error) {
                return error;
            });

        };


    }





}());