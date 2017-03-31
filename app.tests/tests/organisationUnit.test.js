describe('OrganisationUnit.Tests', function () {
    var $controllerConstructor;
    var scope;
    var ctrl;
    beforeEach(module('mp.app.organisationUnits'));
    beforeEach(inject(function ($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
		ctrl = $controllerConstructor('OrganisationUnitController', { $scope: scope });
    }));

    it('should initialize the title', function () {
       
        expect(scope.title).toBeDefined();
        expect(scope.title).toBe('Organisation Units');
    });

   

  

})