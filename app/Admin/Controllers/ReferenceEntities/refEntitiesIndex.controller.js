(function()
{

    angular.module('mp.app.admin').controller('refEntitiesIndexController', ['ReferenceEntitiesService', '$scope', '$routeParams', '$location', 'mpNavService', '$stateParams', '$state', refEntitiesIndexController]);
 
    function refEntitiesIndexController(ReferenceEntitiesService, $scope, $routeParams, $location, mpNavService, $stateParams, $state) {

        $scope.ucId = $stateParams.Id;
        $scope.gridParams = $stateParams.gridParams;

        $scope.GoToTitles = function () {
            mpNavService.navigateToState('refentitytitles', null);
        };

        $scope.GoToAusPostalCodes = function () {
            mpNavService.navigateToState('refentityauspostcode', null);
        };

        $scope.GoToCountries = function () {
            mpNavService.navigateToState('refentitycountry', null);
        };

        $scope.GoToLanguages = function () {
            mpNavService.navigateToState('refentitylanguage', null);
        };

        $scope.GoToDiagnosis = function () {
            mpNavService.navigateToState('refentitydiagnosis', null);
        };

        $scope.GoToDriveFocus = function () {
            mpNavService.navigateToState('refentitydrivefocus', null);
        };

        $scope.GoToDriveType = function () {
            mpNavService.navigateToState('refentitydrivetype', null);
        };

        $scope.GoToDriveStatus = function () {
            mpNavService.navigateToState('refentitydrivestatus', null);
        };

        $scope.GoToStatusChangedReason = function () {
            mpNavService.navigateToState('refentitystatuschangedreason', null);
        };

        $scope.GoToCBUStatusChangedReason = function () {
            mpNavService.navigateToState('refentitycbustatuschangedreason', null);
        };

        $scope.GoToInvoiceNumCounters = function () {
            mpNavService.navigateToState('refentityinvoicenumcounter', null);
        };

        $scope.GoToPriceItem = function () {
            mpNavService.navigateToState('refentitypriceitem', null);
        };

        $scope.GoToRelationshipType = function () {
            mpNavService.navigateToState('refentityrelationshiptype', null);
        };
        
        $scope.GoToItemMapping = function () {
            mpNavService.navigateToState('refentityitemmapping', null);
        };               
        
        $scope.GoToFundingType = function () {
            mpNavService.navigateToState('refentityfundingtype', null);
        };                

        $scope.GoToOperationalMetrics = function () {
            mpNavService.navigateToState('refentityoperationalmetrics', null);
        };

        $scope.GoToConfiguration = function () {
            mpNavService.navigateToState('refentityconfiguration', null);
        };

        $scope.GoToReqNotifyConfiguration = function () {
            mpNavService.navigateToState('refentityreqnotifyconfigurationdetail', null);
        };
        
        $scope.GoToNationalities = function () {
            mpNavService.navigateToState('refentitynationality', null);
        };
    }


}());