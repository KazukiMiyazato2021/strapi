'use strict';

const { createCoreRouter } = require('@kazuki.m---strapi/strapi').factories;

module.exports = createCoreRouter('api::address.address', {
  config: {
    find: {
      // auth: false,
    },
  },
  only: ['find', 'findOne'],
});
