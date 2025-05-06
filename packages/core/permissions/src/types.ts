/**
 * These were imported from `@kazuki.m---strapi/types` but if we do that
 * it becomes a circular dependency. This is the source of truth,
 * they're re-exported from `@kazuki.m---strapi/types` for convenience.
 */
import type { Subject } from '@casl/ability';

export interface ParametrizedAction {
  name: string;
  params: Record<string, unknown>;
}
export interface PermissionRule {
  action: string | ParametrizedAction;
  subject?: Subject | null;
  properties?: {
    fields?: string[];
  };
  condition?: Record<string, unknown>;
}
