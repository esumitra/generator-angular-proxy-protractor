exports.config = {
    allScriptsTimeout: 11000,

    specs: [
	'e2e/*.js'
    ],

    capabilities: {
	'browserName': 'chrome'
    },

    baseUrl: 'http://127.0.0.1:9001/app',

    framework: 'jasmine',

    jasmineNodeOpts: {
	defaultTimeoutInterval: 30000,
        showColors: true, // Use colors in the command line report; turen off if piping to a log file
        isVerbose: true, // List all tests in the console
	includeStackTrace: false
    },

    onPrepare: function() {
    	require('jasmine-reporters');
    	jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());
	jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('<%= _.slugify(appname) %>/testreports/', true, true));
    }
};
