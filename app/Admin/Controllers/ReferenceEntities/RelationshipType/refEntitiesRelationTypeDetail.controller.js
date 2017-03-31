(function () {
    "use strict";

    angular.module('mp.app.admin').controller('refEntitiesRelationshipTypeDetailController', ['ReferenceEntitiesService', '$scope', '$routeParams', 'mpNavService', '$stateParams', '$state', refEntitiesRelationshipTypeDetailController]);

    function refEntitiesRelationshipTypeDetailController(ReferenceEntitiesService, $scope, $routeParams, mpNavService, $stateParams, $state) {
        $scope.title = "View Relationship Type Details";

        $scope.pId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;
        $scope.RelationshipTypeDetail = {};

        function init() {
            console.log('init loading...');

            ReferenceEntitiesService.getRelationshipTypeDetail($scope.pId).then(function (response) {
                console.log('Get RelationshipType Service.... ');
                if (response) {
                    $scope.RelationshipTypeDetail = response.Data;
                    console.log('The value for RelationshipTypeDetail: ' + $scope.RelationshipTypeDetail);
                }
            });
        }

        $scope.EditItem = function () {
            console.log('Edit Item');
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptypeeditdetail', params);
        };

        $scope.Save = function () {
            console.log('Save function triggered');
            var ObjRelationshipTypeDetail = {
                ItemCode: $scope.RelationshipTypeDetail.ItemCode,
                Description: $scope.RelationshipTypeDetail.Description,
                InvoiceDescription: $scope.RelationshipTypeDetail.InvoiceDescription
            };

            ReferenceEntitiesService.updateRelationshipTypeDetails($scope.pId, ObjRelationshipTypeDetail)
             .then(function (response) {
                 $scope.Message = "Updated Successfuly";
             }, function (err) {
                 console.log("Error" + err);
             });

            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptypedetail', params);
        };

        $scope.Cancel = function () {
            var params = {
                Id: $scope.pId,
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptypedetail', params);
        };

        $scope.Close = function () {
            var params = {
                gridParams: $scope.gridParams
            };
            mpNavService.navigateToState('refentityrelationshiptype', params);
        };

        init();
    }

}());