import * as yup from 'yup';
import { validateYupSchema } from '@kazuki.m---strapi/utils';

const historyRestoreVersionSchema = yup
  .object()
  .shape({
    contentType: yup.string().trim().required(),
  })
  .required();

export const validateRestoreVersion = validateYupSchema(historyRestoreVersionSchema);
