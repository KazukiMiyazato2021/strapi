import type { Core, UID } from '@kazuki.m---strapi/types';
import { errors } from '@kazuki.m---strapi/utils';

import { getService } from '../utils';
import type { HandlerParams } from './preview-config';

/**
 * Responsible of routing an entry to a preview URL.
 */
const createPreviewService = ({ strapi }: { strapi: Core.Strapi }) => {
  const config = getService(strapi, 'preview-config');

  return {
    async getPreviewUrl(uid: UID.ContentType, params: HandlerParams) {
      const handler = config.getPreviewHandler();

      try {
        // Try to get the preview URL from the user-defined handler
        return handler(uid, params);
      } catch (error) {
        // Log the error and throw a generic error
        strapi.log.error(`Failed to get preview URL: ${error}`);
        throw new errors.ApplicationError('Failed to get preview URL');
      }
    },
  };
};

export { createPreviewService };
