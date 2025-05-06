import { env } from '@kazuki.m---strapi/utils';

export interface Config {
  validator: (config: Record<string, unknown>) => void;
  default: Record<string, unknown> | ((opts: { env: typeof env }) => Record<string, unknown>);
}
