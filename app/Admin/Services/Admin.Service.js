(function () {

    angular.module('mp.app.admin')
        .service('UserAccountService', ['$http', 'mpLocalStorage', 'mpWebService',  UserAccountService]);

    function UserAccountService($http, mpLocalStorage, mpWebService) {

        var self = this;
        var DEFAULT_PAGESIZE = 20;
        self.getHeaders = function () {
            var token = mpLocalStorage.getItem('TokenInfo');

            return {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            };
        };

        self.getUserAccounts = function (options) {
            
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null,
                    filterColumns: null
                });
            
            return mpWebService.callWebApi('POST', data, '/UserAccountAPI/getUserAccounts').then(function (response) {               
                return response ? response.data : null;
            });

        };

        self.getUserAccountsV2 = function (options) {
            
            var data = _.defaults(options,
                {
                    searchText: '',
                    pageNumber: 1,
                    pageSize: DEFAULT_PAGESIZE,
                    sortColumns: null,
                    filterColumns: null
                });

            return mpWebService.callWebApi2('POST', data, '/UserAccountAPI/GetUserAccountsV2').then(function (response) {
                return response ? response.data : null;
            });

        };


        ////Get UserAccounts
        //self.getUserAccounts2 = function (options) {
        //    var DEFAULT_PAGESIZE = 50;
        //    var data = _.defaults(options,
        //        {
        //            searchText: '',
        //            pageNumber: 1,
        //            pageSize: DEFAULT_PAGESIZE,
        //            sortColumns : null
        //        });
           
        //    return $http({
        //        method: 'POST',
        //        data: data,
        //        url: '/UserAccountAPI/getUserAccounts'
        //    }).then(function successCallback(response) {
        //        if (response && response.data)
        //            return response.data;
        //        else
        //            return [];

        //    }, function errorCallback(response) {
        //        alert(error);
        //    }); 

        //};

        //Get UserAccountDetails
        self.getUserAccountDetails = function (uAccId) {

            console.log('The User Account Id...' + uAccId);

            return mpWebService.callWebApi('GET', null, '/UserAccountAPI/GetUserAccountDetails/' + uAccId).then(function (response) {
                console.log('The Response for GetUserAccountDetails...');

                return response;
            });
            
        };

        // Get UserRoles
        self.getUserRoles = function (uAccId) {
            return mpWebService.callWebApi('GET', null, '/UserAccountAPI/GetUserRoles/' + uAccId).then(function (response) {                
                return response;
            });
        };
            
        
        self.updateUserDetails = function (uAccId, userAccountDetails, userRoles) {
            var data = JSON.stringify(
                    {
                        UserId: uAccId,
                        UserAccountDetail: userAccountDetails,
                        UserRole: userRoles
                    });

            return mpWebService.callWebApi('POST', data, '/UserAccountAPI/UpdateUserDetails').then(function (response) {
                console.log('The Response for UpdateUserAccountDetails...');

                return response;
            });          
        };

        //Update UserAccountDetails
        self.updateUserAccountDetails = function (userAccId, userAccountDetails) {
            var data = JSON.stringify(
                    {
                        UserId: userAccId,
                        UserAccountDetail: userAccountDetails                        
                    });
            return mpWebService.callWebApi('POST', userAccountDetails, '/UserAccountAPI/UpdateUserAccountDetails').then(function (response) {
                console.log('The Response for UpdateUserAccountDetails...');

                return response;
            });
           
        };

        //LoadAuthMethodValues
        self.loadAuthMethodValues = function () {
            var data = null;
            return mpWebService.callWebApi('POST', data, '/UserAccountAPI/LoadAuthMethodValues').then(function (response) {
                console.log('The Response for LoadAuthMethodValues...');

                return response;
            });

        };


        ////Update UserRoles
        //self.updateUserRoles = function (uAccId, userRoles) {

        //    return $http({
        //        method: 'PUT',
        //        url: '/UserAccountAPI/UpdateUserRoles/' + uAccId,
        //        data: userRoles,
        //        dataType: 'json',
        //        contentType: "application/json"

        //    }).then(function successCallback(response) {

        //        console.log('The Response for UpdateUserAccountDetails...');

        //        return response;

        //    }, function errorCallback(response) {
        //        alert(error);
        //    });


        //};


        
    }
}());

