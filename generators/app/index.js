'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var fs = require('fs');



module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mathematical ' + chalk.red('generator-gagulp-webpack') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var sourceRoot = this.sourceRoot();
    var files = fs.readdirSync(sourceRoot);
    var _this = this;
    files.forEach(function(file){
      _this.fs.copy(
        _this.templatePath(file),
        _this.destinationPath(file)
      );
    });
    //this.fs.copy(
    //  this.templatePath('dummyfile.txt'),
    //  this.destinationPath('dummyfile.txt')
    //);
  },

  install: function () {
    //this.installDependencies();
  }
});
