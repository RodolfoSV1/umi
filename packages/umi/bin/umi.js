#!/usr/bin/env node

const resolveCwd = require('resolve-cwd');

const { name, bin } = require('../package.json');
const localCLI = resolveCwd.silent(`${name}/${bin['umi']}`);
if (!process.env.USE_GLOBAL_UMI && localCLI && localCLI !== __filename) {
  const debug = require('@rodolfosv1/utils').createDebug('umi:cli');
  debug('Using local install of umi');
  require(localCLI);
} else {
  require('../lib/cli');
}
