'use strict'

module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    coffeelintr:
      options:
        configFile: 'test/fixtures/coffeelint.json'
      source: ['test/fixtures/coffee/**/*.coffee']
    
  grunt.loadTasks 'tasks'

  # Grunt task(s).
  grunt.registerTask 'default', ['coffeelintr']

  return
