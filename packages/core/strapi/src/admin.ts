import { RenderAdminArgs, renderAdmin } from '@kazuki.m---strapi/admin/strapi-admin';
import contentTypeBuilder from '@kazuki.m---strapi/content-type-builder/strapi-admin';
import contentManager from '@kazuki.m---strapi/content-manager/strapi-admin';
import email from '@kazuki.m---strapi/email/strapi-admin';
import upload from '@kazuki.m---strapi/upload/strapi-admin';
import i18n from '@kazuki.m---strapi/i18n/strapi-admin';
import contentReleases from '@kazuki.m---strapi/content-releases/strapi-admin';
import reviewWorkflows from '@kazuki.m---strapi/review-workflows/strapi-admin';

const render = (mountNode: HTMLElement | null, { plugins, ...restArgs }: RenderAdminArgs) => {
  return renderAdmin(mountNode, {
    ...restArgs,
    plugins: {
      'content-manager': contentManager,
      'content-type-builder': contentTypeBuilder,
      email,
      upload,
      contentReleases,
      i18n,
      reviewWorkflows,
      ...plugins,
    },
  });
};

export { render as renderAdmin };
export type { RenderAdminArgs };

export * from '@kazuki.m---strapi/admin/strapi-admin';

export {
  unstable_useDocumentLayout,
  unstable_useDocumentActions,
  unstable_useDocument,
  unstable_useContentManagerContext,
  useDocumentRBAC,
} from '@kazuki.m---strapi/content-manager/strapi-admin';

export {
  private_useAutoReloadOverlayBlocker,
  private_AutoReloadOverlayBlockerProvider,
} from '@kazuki.m---strapi/content-type-builder/strapi-admin';
