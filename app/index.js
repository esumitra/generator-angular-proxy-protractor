'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var AngularProxyProtractorGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the Angular-Proxy-Protractor generator! This will generate a template angular app and grunt configuration in the current directory.'));

        var prompts = [{
            type: 'confirm',
            name: 'generate_continue',
            message: 'Do you want to continue?',
        default: true
        },{
            type: 'input',
            name: 'app_name',
            message: 'What is the name of your application?',
        default: 'myapp'
        }];

        this.prompt(prompts, function (props) {
            this.generate_continue = props.generate_continue;
	    this.promptprops = props;
	    this.appname = props.app_name;
            done();
        }.bind(this));
    },

    app: function () {
	console.log('generating application ' + this.promptprops.app_name);
	this._generateAppFiles();
    },

    projectfiles: function () {
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
    },
    _generateAppFiles: function() {
        this.mkdir('app');
        this.mkdir('app/fonts');
        this.mkdir('app/images');
        this.mkdir('app/scripts');
        this.mkdir('app/styles');	
        this.mkdir('app/partials');
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        this.copy('_.bowerrc', '.bowerrc');
        this.copy('_Gruntfile.js', 'Gruntfile.js');
        this.template('_index.html', 'app/index.html');
        this.copy('404.html', 'app/404.html');
        this.copy('favicon.ico', 'app/favicon.ico');
        this.copy('starter-template.css', 'app/styles/starter-template.css');
        this.copy('favicon.ico', 'app/favicon.ico');
        this.template('_app.js', 'app/scripts/app.js');
    },
    _generateTestFiles: function() {
	
    }
});

module.exports = AngularProxyProtractorGenerator;
