module.exports = (grunt) => {
  grunt.initConfig({
    coffeelintr: {
      options: {
        configFile: 'test/fixtures/coffeelint.json',
      },
      source: ['test/fixtures/**/*.coffee'],
    },
  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['coffeelintr']);
};
