# CHANGELOG

All notable changes to this project will be documented in this file.

> **Tags**
> - Features
> - Bug Fixes
> - Performance Improvements
> - Dependency Updates
> - Breaking Changes
> - Documentation
> - Internal

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
