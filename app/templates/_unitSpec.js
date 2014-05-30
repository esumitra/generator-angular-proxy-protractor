'use strict';

/* jasmine specs for controllers go here */

describe('<%= _.slugify(_.humanize(appname)) %>', function(){
    beforeEach(module('<%= _.slugify(appname) %>'));
    beforeEach(function(){
	this.addMatchers({
	    toEqualData: function(expected) {
		return angular.equals(this.actual, expected);
	    }
	});
    });

    it('should pass data compare test', function() {
	var expData = {user: "test user", active: true};
	expect(expData).toEqualData({user: "test user", active: true});
    });

});
