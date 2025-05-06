'use strict';

/**
 * global service.
 */

const { createCoreService } = require('@kazuki.m---strapi/strapi').factories;

module.exports = createCoreService('api::global.global');
