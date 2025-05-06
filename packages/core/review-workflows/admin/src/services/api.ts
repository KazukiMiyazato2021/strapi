import { adminApi } from '@kazuki.m---strapi/admin/strapi-admin';

const reviewWorkflowsApi = adminApi.enhanceEndpoints({
  addTagTypes: ['ReviewWorkflow', 'ReviewWorkflowStages', 'Document', 'ContentTypeSettings'],
});

export { reviewWorkflowsApi };
