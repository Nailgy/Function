'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (acc, value) => ((acc << 8) + parseInt(value));
  return ip.split('.').reduce(fn, 0);
};

module.exports = { ipToInt };


