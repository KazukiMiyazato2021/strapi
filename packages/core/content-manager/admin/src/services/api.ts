import { adminApi } from '@kazuki.m---strapi/admin/strapi-admin';

const contentManagerApi = adminApi.enhanceEndpoints({
  addTagTypes: [
    'ComponentConfiguration',
    'ContentTypesConfiguration',
    'ContentTypeSettings',
    'Document',
    'InitialData',
    'HistoryVersion',
    'Relations',
    'UidAvailability',
    'RecentDocumentList',
  ],
});

export { contentManagerApi };
