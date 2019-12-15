'use strict'

module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')

    coffeelintr:
      options:
        configFile: 'test/fixtures/coffeelint.json'
      source: ['test/fixtures/coffee/**/*.coffee', 'Gruntfile.coffee']
    
    eslint:
      target: [
        'tasks/**/*.js',
        'scripts/**/*.js'
      ]

  grunt.loadTasks 'tasks'
  grunt.loadNpmTasks 'grunt-eslint'

  # Grunt task(s).
  grunt.registerTask 'default', ['coffeelintr', 'eslint']

  return
