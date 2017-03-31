(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateNationalitiesController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateNationalitiesController]);

    function refEntitiesCreateNationalitiesController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "Nationality";
        $scope.cId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.NationalityDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreateNationalities = function () {
            console.log('Save function triggered');
            var ObjNationalityDetail = {
                CountryName: $scope.NationalityDetail.CountryName,
                CountryCode: $scope.NationalityDetail.CountryCode,
                ISOCode: $scope.NationalityDetail.ISOCode,
                NationalityValue: $scope.NationalityDetail.NationalityValue
            };

            ReferenceEntitiesService.createNationality($scope.cId, ObjNationalityDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfully";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationality', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitynationality', params);
        };

        init();

    }


}());