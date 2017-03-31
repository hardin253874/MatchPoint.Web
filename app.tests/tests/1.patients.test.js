describe('patients.Tests', function()
{
	it('should initialize the title', function(){
	module('mp.app.patients');
		
	var scope = {};
	var ctrl;
	inject(function ($controller) {
     ctrl = $controller('patientsController', { $scope: scope });
        
     });
	    expect(scope.title).toBeDefined();
		expect(scope.title).toBe('Patients');
	});
	
})