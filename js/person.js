var Person = function() { 
    //defaults
    var _age  =  0,
        _name = 'John Doe';
 
    this.initialize = function(name, age) {
      _name = name || _name;
      _age  = age  || _age;
    };

    if (arguments.length) this.initialize();
      
    this.getName = function(){ return _name; };
    this.setName = function (name){ _name = name; };
    this.getAge = function(){ return _age};
 
    this.addBirthday = function()      { 
        _age++; 
    };

    this.toString    = function()      { 
        return 'My name is ' + this.getName() + 'and I am ' + _age + ' years old.'; 
    };
}; 