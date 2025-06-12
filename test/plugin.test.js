const grunt = require('grunt');
const { expect, beforeAll, it } = require('@jest/globals');

const config = require('../Gruntfile');

beforeAll(() => {
  config(grunt);
});

it('should register task correctly', (done) => {
  expect(grunt.task.exists('coffeelintr')).toBe(true);
  done();
});
