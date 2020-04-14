# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
>
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Internal

## v1.1.5 (2020-04-14)

#### Dependency Updates

- regenerate package-lock.json ([e9cddbc](https://github.com/sibiraj-s/grunt-coffeelintr/commit/e9cddbc))
- use `@coffeelint/cli` instead of `coffeelint` ([cc5b260](https://github.com/sibiraj-s/grunt-coffeelintr/commit/cc5b260))
- bump devDependencies ([38bf6cb](https://github.com/sibiraj-s/grunt-coffeelintr/commit/38bf6cb))

## v1.1.4 (2019-12-16)

#### Dependency Updates

- update coffeelint-reporter to v2.0.1 ([08df5b7](https://github.com/sibiraj-s/grunt-coffeelintr/commit/08df5b7))
- bump devDependencies ([2e969de](https://github.com/sibiraj-s/grunt-coffeelintr/commit/2e969de))

#### Internal

- migrate to github actions from travis-ci ([c9314d7](https://github.com/sibiraj-s/grunt-coffeelintr/commit/c9314d7))
- add jest unit tests ([eb91bd4](https://github.com/sibiraj-s/grunt-coffeelintr/commit/eb91bd4))

## v1.1.3 (2019-09-02)

#### Dependency Updates

- update coffeelint-reporter to v1.0.6 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update chalk to v2.4.2 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update eslint to v6.3.0 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update eslint-config-standard to v14.1.0 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update eslint-plugin-import to v2.18.2 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update eslint-plugin-node to v9.2.0 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update eslint-plugin-promise to v4.2.1 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update eslint-plugin-standard to v4.0.1 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update grunt to v1.0.4 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update grunt-eslint to v22.0.0 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))
- update husky to v1.1.0 ([6a5fc9c](https://github.com/sibiraj-s/grunt-coffeelintr/commit/6a5fc9c))

#### Internal

- update LICENSE ([8b3d4a9](https://github.com/sibiraj-s/grunt-coffeelintr/commit/8b3d4a9))

## v1.1.2 (2018-10-05)

#### Dependency Updates

- update coffeelint-reporter to v1.0.5 ([d76e859](https://github.com/sibiraj-s/grunt-coffeelintr/commit/d76e859))
- update eslint to v5.6.1 ([d76e859](https://github.com/sibiraj-s/grunt-coffeelintr/commit/d76e859))
- update eslint-plugin-promise to v4.0.1 ([d76e859](https://github.com/sibiraj-s/grunt-coffeelintr/commit/d76e859))
- update husky to v1.1.0 ([d76e859](https://github.com/sibiraj-s/grunt-coffeelintr/commit/d76e859))

#### Internal

- remove vscode settings in favour of editorconfig ([e11a324](https://github.com/sibiraj-s/grunt-coffeelintr/commit/e11a324))
- update github username ([45935da](https://github.com/sibiraj-s/grunt-coffeelintr/commit/45935da))

## v1.1.1 (2018-08-29)

#### Dependency Updates

- update coffeelint-reporter to v1.0.4 ([19a1959](https://github.com/sibiraj-s/grunt-coffeelintr/commit/19a1959))

#### Internal

- add eslint to lint javascript files
- apply standardJS rules to eslint ([db4083d](https://github.com/sibiraj-s/grunt-coffeelintr/commit/db4083d))

## v1.1.0 (2018-07-26)

#### Bug Fixes

- don't print final results repeatedly for each file's lint result ([7820f53](https://github.com/sibiraj-s/grunt-coffeelintr/commit/7820f53))

#### Internal

- add eslint to verify jsfiles ([98b96af](https://github.com/sibiraj-s/grunt-coffeelintr/commit/98b96af))
- use husky to run precommit before test ([98b96af](https://github.com/sibiraj-s/grunt-coffeelintr/commit/98b96af))

#### Breaking Changes

- updated minimum node.js version to `>=8.0.0` ([7820f53](https://github.com/sibiraj-s/grunt-coffeelintr/commit/7820f53))

## v1.0.0 (2018-07-24)

#### Features

- grunt plugin to lint coffeescript files using coffeelint
