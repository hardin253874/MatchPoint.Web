(function () {

    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesCreateCountryController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesCreateCountryController]);

    function refEntitiesCreateCountryController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {

        $scope.title = "Create Country";
        $scope.cId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.CountryDetail = {};

        function init() {
            console.log('init loading...');


        }

        $scope.CreateCountry = function () {
            console.log('Save function triggered');
            var ObjCountryDetail = {
                CountryName: $scope.CountryDetail.CountryName,
                CountryCode: $scope.CountryDetail.CountryCode,
                DiallingCode: $scope.CountryDetail.DiallingCode                
            };

            ReferenceEntitiesService.CreateCountry($scope.cId, ObjCountryDetail)
             .then(function (response) {
                 $scope.Message = "Created Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountry', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.cId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentitycountry', params);
        };

        init();

    }


}());