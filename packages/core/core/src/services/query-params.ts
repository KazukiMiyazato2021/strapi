import { queryParams } from '@kazuki.m---strapi/utils';
import type { Core, UID } from '@kazuki.m---strapi/types';

export default (strapi: Core.Strapi) => {
  const { transformQueryParams } = queryParams.createTransformer({
    getModel: (uid: string) => strapi.getModel(uid as UID.Schema),
  });

  return {
    transform: transformQueryParams,
  };
};
