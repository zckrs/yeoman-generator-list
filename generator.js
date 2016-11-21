'use strict';

if (process.env.NEW_RELIC_APP_NAME && process.env.NEW_RELIC_LICENSE_KEY) {
  require('newrelic'); // eslint-disable-line import/no-unassigned-import
}

/* env Variables */
const npmListKeyword = process.env.NPM_LIST_KEYWORD || 'yeoman-generator';

const fs = require('fs');
const mkdirp = require('mkdirp');

/* Actual generator files */
const List = require('./src');

List.log.info(`----\nDate: ${new Date()}\n----`);

List.update(npmListKeyword)
  .then(response => {
    mkdirp.sync('dist/');
    fs.writeFileSync('dist/cache.json', response.data, 'utf8');
  });
