import type { Core } from '@kazuki.m---strapi/types';

export default (strapi: Core.Strapi) => {
  strapi.get('validators').set('content-api', { input: [], query: [] });
};
