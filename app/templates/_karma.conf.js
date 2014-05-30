module.exports = function(config){
    config.set({

        basePath : '../',

        files : [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/scripts/**/*.js',
            'test/unit/**/*.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['PhantomJS'],
        // browsers : ['PhantomJS','Chrome','IE'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-ie-launcher',
            'karma-junit-reporter'
        ],

        reporters: ['progress','junit'],

        junitReporter : {
            outputFile: 'testreports/test-<%= _.slugify(appname) %>-unit.xml',
            suite: ''
        }

    });
};
