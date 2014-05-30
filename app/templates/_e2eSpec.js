'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('<%= _.slugify(_.humanize(appname)) %>', function() {
    browser.get('index.html');

    it('should load', function() {
	expect(browser.getLocationAbsUrl()).toMatch("/index");
    });

});
