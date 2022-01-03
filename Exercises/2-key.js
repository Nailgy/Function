'use strict';

const generateKey = (length, possible) => {
  let res = '';
  const base = possible.length;
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * base);
    res += possible[index];
  }
  return res;
};

module.exports = { generateKey };
