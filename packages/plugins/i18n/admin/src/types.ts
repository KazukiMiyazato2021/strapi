import type { Modules } from '@kazuki.m---strapi/types';

export interface I18nBaseQuery {
  plugins?: {
    i18n?: {
      locale?: string;
      relatedEntityId?: Modules.Documents.ID;
    };
  };
}
