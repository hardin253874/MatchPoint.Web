describe('donors.Tests', function () {
    var $controllerConstructor;
    var scope;
     
    beforeEach(module('mp.app.donors'));
    beforeEach(inject(function ($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

    it('should initialize the title', function () {
        var ctrl;
        ctrl = $controllerConstructor('donorsController', { $scope: scope });

        expect(scope.title).toBeDefined();
        expect(scope.title).toBe('Donors');
    });

  

})