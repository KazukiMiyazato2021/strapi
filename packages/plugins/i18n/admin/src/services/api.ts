import { adminApi } from '@kazuki.m---strapi/admin/strapi-admin';

const i18nApi = adminApi.enhanceEndpoints({
  addTagTypes: ['Locale'],
});

export { i18nApi };
