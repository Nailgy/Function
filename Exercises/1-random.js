'use strict';

const random = (min = 0, max) => {
  if (!max) max = min;
  const res = Math.floor(Math.random() * (max - min + 1) + min);
  return res;
};

module.exports = { random };
