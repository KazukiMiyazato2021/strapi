import type { Core } from '@kazuki.m---strapi/types';
import type { TypeRegistry } from './type-registry';

export type Context = {
  strapi: Core.Strapi;
  registry: TypeRegistry;
};
