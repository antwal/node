'use strict';

require('../common');
const assert = require('assert');
const constants = process.binding('constants');

if (process.platform === 'linux') {
  assert('O_NOATIME' in constants);
  assert.strictEqual(constants.O_NOATIME, 0x40000);
} else {
  assert(!('O_NOATIME' in constants));
}
