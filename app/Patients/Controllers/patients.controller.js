(function () {
    "use strict";
    
    angular.module('mp.app.patients').controller('patientsController',['$scope', '$filter', '$stateParams', 'uiGridConstants', 'mpDataGridUtils', 'mpWebService', patientsController]);

        function patientsController($scope, $filter, $stateParams, uiGridConstants, mpDataGridUtils, mpWebService) {
        $scope.title = "Patients";

        $scope.gridOptions = {};

        $scope.OrgUnits = [{
            Id: 1,
            name: "Milan Cord Blood Bank",
            Alias: "A, b, c, d",
            IsGovernedBy: "ABMDR"

        },
          {
              Id: 2,
              name: "ABMDR",
              Alias: "A, b,",
              IsGovernedBy: "ARCBS"

          },
          {
              Id: 3,
              name: "Anthony Nolan",
              Alias: "G, f, h ,i",
              IsGovernedBy: "ABMDR"

          },
          {
              Id: 4,
              name: "BIONET Corp",
              Alias: "x, y, z",
              IsGovernedBy: "ARCBS"

          }
        ];

        $scope.gridColumnDefs = [
                         { field: 'Id', displayName: 'Serial No', width: '10%', headerCellClass: 'gridHeader', filters: [{ condition: uiGridConstants.filter.CONTAINS, placeholder: 'Contains' }, { condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL, placeholder: 'Greater than or equal' }] },
                         { field: 'name', displayName: 'Name', width: '30%', headerCellClass: 'gridHeader' },
                         { field: 'Alias', displayName: 'Alias', width: '30%', headerCellClass: 'gridHeader' },
                         { field: 'IsGovernedBy', displayName: 'IsGoverned By', width: '30%', headerCellClass: 'gridHeader' }];


        $scope.drillDown = function (entity) {

        };

        $scope.gridOptions = {
            gridColumnDefs: $scope.gridColumnDefs,
            gridData: $scope.OrgUnits,
            pageSize: 2,
            detailPageState: 'patientTabDetail',
            extraParams: {Tab: 2},
            gridClass: '',
            enableFiltering: true
        };

        $scope.tryException = function () {
            return mpWebService.callWebApi2('GET', null, '/UserAccountAPI/GetExceptionV2').then(function (response) {
                return response ? response.data : null;
            });
        };
    }
}());

