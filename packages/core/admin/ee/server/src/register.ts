import type { Core } from '@kazuki.m---strapi/types';

import executeCERegister from '../../../server/src/register';

export default async ({ strapi }: { strapi: Core.Strapi }) => {
  await executeCERegister({ strapi });
};
