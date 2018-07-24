'use strict'

module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    coffeelintr: ['test/**/*.coffee']

  grunt.loadTasks 'tasks'

  # Grunt task(s).
  grunt.registerTask 'default', ['coffeelintr']

  return
