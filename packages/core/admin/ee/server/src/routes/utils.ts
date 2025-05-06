import type { Core } from '@kazuki.m---strapi/types';

export const enableFeatureMiddleware =
  (featureName: string): Core.MiddlewareHandler =>
  (ctx, next) => {
    if (strapi.ee.features.isEnabled(featureName)) {
      return next();
    }

    ctx.status = 404;
  };
