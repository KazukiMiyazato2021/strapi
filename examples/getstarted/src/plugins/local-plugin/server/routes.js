const { createCoreRouter } = require('@kazuki.m---strapi/strapi').factories;

module.exports = {
  test: createCoreRouter('plugin::myplugin.test', {
    type: 'content-api',
    only: ['find', 'findOne'],
  }),
};
