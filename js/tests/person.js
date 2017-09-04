describe('Person', function() {
	var testPerson;
    
    beforeEach(
    	function() { 
    		testPerson = new Person();
    	}
    );   

    afterEach (
    	function() { 
    		testPerson = undefined;    
    	}
    );

	it('calls getName()', function(){
        spyOn(testPerson, 'getName');
        testPerson.toString();
		expect(testPerson.getName).toHaveBeenCalled();
	});

	it('updates age on birthdate', function(){
		var age = testPerson.getAge();
		testPerson.addBirthday();
		expect(testPerson.getAge()).toBeGreaterThan(age);
		expect(testPerson.getAge()).toEqual(age+1);
		expect(testPerson.getAge()).toEqual(jasmine.any(Number));
	});
});