describe('OrganisationUnitDetails.Tests', function () {

    var scope;
    var ctrl;
    var q;
    var deferred;
  
    beforeEach(module('mp.components.localStorage'));
    beforeEach(module('mp.app.organisationUnits'));

    //beforeEach(function () {
    //    inject(function ($injector) {
    //        OrganisationUnitService = $injector.get('OrganisationUnitService');
    //    });
    //});

    beforeEach(inject(function ($controller, $rootScope, $q, OrganisationUnitService) {
        $q = $q;
        scope = $rootScope.$new();
        
        deferred = $q.defer();
        spyOn(OrganisationUnitService, 'getOrganisationUnitDetails').and.returnValue(deferred.promise);
        ctrl = $controller('ouDetailsController', {  OrganisationUnitService: OrganisationUnitService , $scope: scope, $routeParams: { Id: 10 }});
    }));
 

    it('should pass route params', function () {
        expect(scope.ouId).toBeDefined();
        expect(scope.ouId).toBe(10);
    }); 
      
     
    it('should have two tabs', function () {
        expect(scope.tabs).toBeDefined();
        expect(scope.tabs.length).toBe(2);
    });

    it('should have a title without org Unit Name', function () {
        
        expect(scope.title).toBeDefined();
        expect(scope.title).toBe('Organisation Unit Details - ');
    });

    it('should have a title with org Unit Name', function () {

        deferred.resolve({ Name: "ABMDR", Id: 1 });
        scope.$apply();

        expect(scope.OrgUnit).not.toBe(undefined);
        expect(scope.OrgUnit.Id).toBe(1);
        expect(scope.title).toBeDefined();
        expect(scope.title).toBe('Organisation Unit Details - ABMDR');
    });
     
    
})