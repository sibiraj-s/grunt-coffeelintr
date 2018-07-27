'use-strict';

const chalk = require('chalk');
const RELEASE_MODE = process.env.RELEASE_MODE;

const errorMessgae = 'Publishing directly to npm is restricted.' +
    '\n' +
    'Run ' + chalk.black('`' + chalk.underline('npm run release') + '`') + ' to publish the package.' +
    '\n';

if (!RELEASE_MODE) {
    console.log(chalk.red(errorMessgae));
    process.exit(1);
}
