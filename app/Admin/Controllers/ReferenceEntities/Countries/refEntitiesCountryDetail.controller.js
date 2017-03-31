(function () {

    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCountryDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCountryDetailController]);

    function refEntitiesCountryDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Country Details";

        $scope.cId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.CountryDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getCountryDetail($scope.cId).then(function (response) {
                console.log('Get Country Service.... ');
                if (response) {
                    $scope.CountryDetail = response.Data;
                    console.log('The value for CountryDetail: ' + $scope.CountryDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountryeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjCountryDetail = {
                CountryName: $scope.CountryDetail.CountryName,
                CountryCode: $scope.CountryDetail.CountryCode,
                DiallingCode: $scope.CountryDetail.DiallingCode,
                IsActive: $scope.CountryDetail.IsActive
            };

            ReferenceEntitiesService.updateCountryDetails($scope.cId, ObjCountryDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountrydetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountrydetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountry', params);
        };

        init();


    }


}());