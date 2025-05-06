'use strict';

/**
 * unique service
 */

const { createCoreService } = require('@kazuki.m---strapi/strapi').factories;

module.exports = createCoreService('api::unique.unique');
