import type { Transform } from 'jscodeshift';
import { changeImportSpecifier } from '../../utils/change-import';
import { replaceJSXElement } from '../../utils/replace-jsx';

/**
 * This codemods automates all the imports and naming changes
 * for methods or components that used to be imported from '@kazuki.m---strapi/helper-plugin'
 */
const transform: Transform = (file, api) => {
  const { j } = api;

  const root = j.withParser('tsx')(file.source);

  type Replacement = {
    oldName: string;
    oldDependency: string;
    toReplace: boolean;
    toChangeImportSpecifier: boolean;
    newDependency?: string;
    newName?: string;
    newImport?: string;
  };

  const replacements: Replacement[] = [
    {
      oldName: 'AnErrorOccurred',
      newImport: 'Page',
      newName: 'Page.Error',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toReplace: true,
      toChangeImportSpecifier: true,
    },
    {
      oldName: 'CheckPagePermissions',
      newImport: 'Page',
      newName: 'Page.Protect',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toReplace: true,
      toChangeImportSpecifier: true,
    },
    {
      oldName: 'ConfirmDialog',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'DateTimePicker',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@strapi/design-system',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'getFetchClient',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'LoadingIndicatorPage',
      newImport: 'Page',
      newName: 'Page.Loading',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toReplace: true,
      toChangeImportSpecifier: true,
    },
    {
      oldName: 'NoContent',
      newImport: 'EmptyStateLayout',
      newName: 'EmptyStateLayout',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@strapi/design-system',
      toReplace: true,
      toChangeImportSpecifier: true,
    },
    {
      oldName: 'NoPermissions',
      newImport: 'Page',
      newName: 'Page.NoPermissions',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toReplace: true,
      toChangeImportSpecifier: true,
    },
    {
      oldName: 'Status',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@strapi/design-system',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'translatedErrors',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'useAPIErrorHandler',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'useCallbackRef',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@strapi/design-system',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'useCollator',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@strapi/design-system',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'useFetchClient',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'useFilter',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@strapi/design-system',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'useQueryParams',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'useRBAC',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'SearchURLQuery',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
    {
      oldName: 'useSettingsForm',
      oldDependency: '@kazuki.m---strapi/helper-plugin',
      newDependency: '@kazuki.m---strapi/strapi/admin',
      toChangeImportSpecifier: true,
      toReplace: false,
    },
  ];

  replacements.forEach((replacement) => {
    if (replacement.toReplace && replacement.newName) {
      replaceJSXElement(root, j, {
        oldElementName: replacement.oldName,
        newElementName: replacement.newName,
        oldDependency: replacement.oldDependency,
      });
    }

    if (replacement.toChangeImportSpecifier && replacement.newDependency) {
      changeImportSpecifier(root, j, {
        oldMethodName: replacement.oldName,
        newMethodName: replacement.newImport,
        oldDependency: replacement.oldDependency,
        newDependency: replacement.newDependency,
      });
    }
  });

  return root.toSource();
};

export default transform;
