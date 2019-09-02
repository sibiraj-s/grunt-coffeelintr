'use strict';

const coffeelint = require('coffeelint');
const reporter = require('coffeelint-reporter').reporter;

module.exports = function (grunt) {
  grunt.registerMultiTask('coffeelintr', 'A Grunt Plugin to lint Cofeescrript', function () {
    const files = this.filesSrc;
    const options = this.options();
    let coffeelintOptions = {};
    let errorCount = 0;
    let warningCount = 0;

    if (!files.length) {
      grunt.log.error('File Not Found\n');
    }

    if (Object.prototype.hasOwnProperty.call(options, 'configFile') && !grunt.file.exists(options.configFile)) {
      grunt.log.error('Error Reading Configuration File: `' + options.configFile + '` not found.');
      return false;
    }

    if (options.configFile !== undefined) {
      coffeelintOptions = grunt.file.readJSON(options.configFile);
    }

    files.forEach(function (fileName) {
      const lintResults = coffeelint.lint(grunt.file.read(fileName), coffeelintOptions);

      reporter(fileName, lintResults);

      lintResults.forEach(function (error) {
        if (error.level === 'error') errorCount += 1;
        else if (error.level === 'warn') warningCount += 1;
      });
    });

    if (errorCount && !options.force) return false;

    if (!warningCount && !errorCount) {
      grunt.log.ok(files.length + ' file' + (files.length === 1 ? '' : 's') + ' lint free.');
    }
  });
};
