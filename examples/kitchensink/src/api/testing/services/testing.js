'use strict';

/**
 * testing service
 */

const { createCoreService } = require('@kazuki.m---strapi/strapi').factories;

module.exports = createCoreService('api::testing.testing');
