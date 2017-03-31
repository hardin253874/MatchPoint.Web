(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesNationalitiesDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesNationalitiesDetailController]);

    function refEntitiesNationalitiesDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Nationality Details";

        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.NationalityDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getNationalityDetail($scope.pId).then(function (response) {
                console.log('Get Nationality Service.... ');
                if (response) {
                    $scope.NationalityDetail = response.Data;
                    console.log('The value for Nationality Detail: ' + $scope.NationalityDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationalityeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjNationalityDetail = {
                CountryName: $scope.NationalityDetail.CountryName,
                CountryCode: $scope.NationalityDetail.CountryCode,
                ISOCode: $scope.NationalityDetail.ISOCode,
                NationalityValue: $scope.NationalityDetail.NationalityValue
            };

            ReferenceEntitiesService.updateNationalityDetails($scope.pId, ObjNationalityDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationalitydetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationalitydetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationality', params);
        };

        init();


    }



}());