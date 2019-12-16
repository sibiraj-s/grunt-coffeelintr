const grunt = require('grunt');

const config = require('../Gruntfile');

beforeAll(() => {
  config(grunt);
});

it('should register task correctly', (done) => {
  expect(grunt.task.exists('coffeelintr')).toBe(true);
  done();
});
