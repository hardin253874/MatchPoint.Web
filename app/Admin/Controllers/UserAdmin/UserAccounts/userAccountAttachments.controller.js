(function () {

    "use strict";

    angular.module('mp.app.admin').controller('userAccountAttachmentsController', ['$scope', 'mpNavService', '$stateParams', userAccountAttachmentsController]);

    function userAccountAttachmentsController($scope, mpNavService, $stateParams) {
        $scope.NewItem = function () {
            console.log('New Item');
        };

        $scope.Close = function () {
            mpNavService.navigateToState('useraccounts', null);
        };

    }

}());