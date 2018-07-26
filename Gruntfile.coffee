'use strict'

module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    coffeelintr: 
      options:
        configFile: 'test/coffeelint.json'
      source: ['test/coffee/**/*.coffee']

  grunt.loadTasks 'tasks'

  # Grunt task(s).
  grunt.registerTask 'default', ['coffeelintr']

  return
