import type { Core } from '@kazuki.m---strapi/types';

export const getService = (
  name: string,
  { strapi }: { strapi: Core.Strapi } = { strapi: global.strapi }
) => {
  return strapi.service(`admin::${name}`);
};

export default {
  getService,
};
