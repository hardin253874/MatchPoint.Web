(function () {
    "use strict";

    angular.module('mp.app.admin').controller('userAccountController', ['UserAccountService', '$scope', '$filter', '$stateParams', 'uiGridConstants', 'mpDataGridUtils', userAccountController]);

    function userAccountController(UserAccountService, $scope, $filter, $stateParams, uiGridConstants, mpDataGridUtils) {
        
        $scope.title = "User Accounts";         
        $scope.gridParams = $stateParams.gridParams;
        

        var callBackFunc = mpDataGridUtils.buildCallbackFunc(load);        

        $scope.gridColumnDefs = [{ name: 'Id', field: 'Id', displayName: 'Serial No', width: '10%',headerCellClass: 'gridHeader', filters: [{ condition: uiGridConstants.filter.CONTAINS, placeholder: 'Contains' }, { condition: uiGridConstants.filter.GREATER_THAN_OR_EQUAL, placeholder: 'Greater than or equal' }] },
                                     { name: 'userName', field: 'userName', displayName: 'User name',headerCellClass: 'gridHeader',  width: '15%' },
                                     { name: 'email', field: 'email', displayName: 'Email', headerCellClass: 'gridHeader', width: '20%' },
                                     { name: 'userOnlineDetails', field: 'userOnlineDetails', displayName: 'User Is Online', width: '20%', headerCellClass: 'gridHeader', enableFiltering: false },
                                     { name: 'isLocked', field: 'isLocked', displayName: 'Is Locked', width: '15%', enableFiltering: false, headerCellClass: 'gridHeader', visible: false },
                                     { name: 'birthday', field: 'birthday', displayName: 'Birthday', width: '20%', enableFiltering: false, headerCellClass: 'gridHeader', cellFilter: 'date:"longDate"'}
        ];
              
        mpDataGridUtils.updateColumnFilterTerm($scope.gridParams, $scope.gridColumnDefs);

        $scope.gridOptions = {
            detailPageState: 'useraccountdetail',
            callBackFunction: callBackFunc,
            pageSize: 10,
            enableFiltering: true,
            showDeactvated: false,
            showSearchSection: true,
            enablePaginationControls: true,
            enableExport: true,
            gridColumnDefs: $scope.gridColumnDefs
        };
        console.log("Calling Get User Accounts...");

        function load(options) {
            if (!options && $scope.gridParams) 
                options = $scope.gridParams;            

            options = mpDataGridUtils.getDefaultOptions(options);

            UserAccountService.getUserAccountsV2(options).then(function (response) {
                console.log('Get user Account Service.... ');
                if (response) {
                    mpDataGridUtils.updateGridOptions($scope.gridOptions, options, response);                   
                }
            });
        }

        load();
    }
}());

