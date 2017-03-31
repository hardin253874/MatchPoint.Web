(function () {
    "use strict";

    angular.module('mp.app.admin').controller('userAccountDetailController', ['UserAccountService', '$scope', '$routeParams', '$location', 'mpNavService', '$stateParams', '$state', userAccountDetailController])
                                  .controller('userAccountDetailTab1Controller', ['UserAccountService', 'mpNavService', '$scope', '$stateParams', userAccountDetailTab1Controller]);
   
    function userAccountDetailController(UserAccountService, $scope, $routeParams, $location, mpNavService, $stateParams, $state) {


        $scope.ucId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.model = {
            mode: "detail",
            tabs: [
                {
                    heading: 'Details', tabUrl: '../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetail.tpl.html', isLoaded: false, active: true
                },
                {
                    heading: 'Attachments', tabUrl: '../app/Admin/Views/UserAdmin/UserAccounts/userAccountAttachments.tpl.html', isLoaded: false
                }
            ],
            tabContentUrl: ''
        };

        var params = {
            Id: $scope.ucId,
            gridParams: $scope.gridParams,
        };
        $scope.Errors = null;

        function init() {

        }

        init();

        $scope.select = function (tabData) {
            $scope.model.tabContentUrl = tabData.tabUrl;
        };
    }
       

    function userAccountDetailTab1Controller(UserAccountService, mpNavService, $scope, $stateParams) {
        console.log('The user Account Tab1 Details .. controller loading');

        $scope.mode = "detail";
        $scope.ucId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.UserAccountDetails = {};
        $scope.UserRoles = {};
        $scope.title = "User Account Details";
        $scope.Errors = null;

        var params = {
            Id: $scope.ucId,
            gridParams: $scope.gridParams,
        };

        $scope.authMethodValues = {};
        $scope.selectedAuthValue = '';
        //$scope.authMethodValues = [{ name: "RSA (Token)", id: 1 }, { name: "Symantec (Token)", id: 2 }, { name: "Symantec (Email)", id: 3 }, { name: "Symantec (SMS)", id: 4 }];
        //$scope.selectedAuthValue = $scope.authMethodValues[0];

        $scope.editing = true;
        $scope.selectedAuthMethod = {};


        if ($scope.model.mode == 'detail') {

            //Load UserAccountDetails            
            UserAccountService.getUserAccountDetails($scope.ucId).then(function (response) {
                console.log('User Account Details Service.... ' + response.data);
                $scope.UserAccountDetails = angular.fromJson(response.data);
                $scope.UserAccountDetails.mobileNumber = '0414141414';
                if (!$scope.UserAccountDetails.comment)
                    $scope.UserAccountDetails.comment = '1234567890';

                $scope.UserAccountDetails.newUserName = '';              

            }, function (err) {
                console.log("Error" + err);
            });

            //Load UserRoles
            UserAccountService.getUserRoles($scope.ucId).then(function (response) {
                console.log('User Roles .... ' + response.data);
                $scope.UserRoles = angular.fromJson(response.data);
            }, function (err) {
                console.log("Error" + err);
            });
        }
        else
            {
            //loadAuthMethodValues
            UserAccountService.loadAuthMethodValues().then(function (response) {
                $scope.authMethodValues = response.data.Data;

                //Load UserAccountDetails            
                UserAccountService.getUserAccountDetails($scope.ucId).then(function (response) {
                    console.log('User Account Details Service.... ' + response.data);
                    $scope.UserAccountDetails = angular.fromJson(response.data);
                    $scope.UserAccountDetails.mobileNumber = '0414141414';
                    if (!$scope.UserAccountDetails.comment)
                        $scope.UserAccountDetails.comment = '1234567890';

                    $scope.UserAccountDetails.newUserName = '';
                    //Selection of dropdown value
                    var authMethodValue = $scope.UserAccountDetails.authMethod;
                    console.log('authMethodValue:' + authMethodValue);
                    var selectedIndex = 0;
                    for (var i = 0; i < $scope.authMethodValues.length; i++) {
                        var auValue = $scope.authMethodValues[i].Name;
                        if (auValue == authMethodValue) {
                            selectedIndex = i;
                            break;
                        }
                    }
                    $scope.selectedAuthValue = $scope.authMethodValues[selectedIndex];
                    console.log('Selected Option: ' + $scope.selectedAuthValue);

                }, function (err) {
                    console.log("Error" + err);
                });


            }, function (err) {
                console.log("Error" + err);
            });         

        }


        ////LoadAuthMethodValues
        //function init() {
        //    console.log('init loading...');          

        //    //loadAuthMethodValues
        //    UserAccountService.loadAuthMethodValues().then(function (response) {
        //        $scope.authMethodValues = response.data.Data;
        //    }, function (err) {
        //        console.log("Error" + err);
        //    });

        //    //Load UserAccountDetails            
        //    UserAccountService.getUserAccountDetails($scope.ucId).then(function (response) {
        //        console.log('User Account Details Service.... ' + response.data);
        //        $scope.UserAccountDetails = angular.fromJson(response.data);
        //        $scope.UserAccountDetails.mobileNumber = '0414141414';
        //        if (!$scope.UserAccountDetails.comment)
        //            $scope.UserAccountDetails.comment = '1234567890';

        //        $scope.UserAccountDetails.newUserName = '';
        //        //Selection of dropdown value
        //        var authMethodValue = $scope.UserAccountDetails.authMethod;
        //        console.log('authMethodValue:' + authMethodValue);
        //        var selectedIndex = 0;
        //        for (var i = 0; i < $scope.authMethodValues.length; i++) {
        //            var auValue = $scope.authMethodValues[i].Name;
        //            if (auValue == authMethodValue) {
        //                selectedIndex = i;
        //                break;
        //            }
        //        }
        //        $scope.selectedAuthValue = $scope.authMethodValues[selectedIndex];
        //        console.log('Selected Option: ' + $scope.selectedAuthValue);

        //    }, function (err) {
        //        console.log("Error" + err);
        //    });

        //    //Load UserRoles
        //    UserAccountService.getUserRoles($scope.ucId).then(function (response) {
        //        console.log('User Roles .... ' + response.data);
        //        $scope.UserRoles = angular.fromJson(response.data);
        //    }, function (err) {
        //        console.log("Error" + err);
        //    });

        //}

        $scope.EditItem = function () {           
            //var params = {
            //    Id: $scope.ucId,
            //    gridParams: $scope.gridParams
            //};
            //mpNavService.navigateToState('useraccounteditdetail', params);
            $scope.model.mode = "edit";
            $scope.model.tabContentUrl = "../app/Admin/Views/UserAdmin/UserAccounts/userAccountEditDetail.tpl.html";                    
        };

        $scope.Close = function () {
            var params = {
                Id: $scope.ucId,
                gridParams: $scope.gridParams,
            };

            mpNavService.navigateToState('useraccounts', params);
        };

        $scope.submit = function () {
            $scope.Save();        
        };

        $scope.Save = function () {
            var ObjUserAccountDetail = {
                Id: $scope.ucId,
                Email: $scope.UserAccountDetails.email,
                AlternativeEmail: $scope.UserAccountDetails.alternateEmail,
                AuthMethod: $scope.UserAccountDetails.authMethod,
                Comment: $scope.UserAccountDetails.comment
            };

            UserAccountService.updateUserAccountDetails($scope.ucId, ObjUserAccountDetail)
             .then(function (response) {
                     //if (res.data && res.data.Status && res.data.Status == "Error") {
                     //    $scope.Errors = res.data.Errors;
                     //}
                     //if (!res.data || (res.data && !res.data.Status)) {
                     //    params = _.defaults(params, {
                     //        mode: null
                     //    });
                     //    $scope.model.tabContentUrl = "../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetail.tpl.html";
                 //}

                 params = _.defaults(params, {
                     mode: null
                 });
                 $scope.model.tabContentUrl = "../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetail.tpl.html";

                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

           // $scope.editing = false;
           
            //var params = {
            //    Id: $scope.ucId,
            //    gridParams: $scope.gridParams
            //};
            //mpNavService.navigateToState('useraccountdetailindex', params);
        };

        $scope.Cancel = function () {
            //$scope.editing = false;
            //var params = {
            //    Id: $scope.ucId,
            //    gridParams: $scope.gridParams
            //};
            //mpNavService.navigateToState('useraccountdetailindex', params);
            ////$location.path('/useraccountdetail/' + $scope.ucId);

            params = _.defaults(params, {
                mode: null
            });
            // mpNavService.navigateToState('organisationunitdetails', params);
            $scope.model.tabContentUrl = "../app/Admin/Views/UserAdmin/UserAccounts/userAccountDetail.tpl.html";

        };

        //init();
    }
}());

