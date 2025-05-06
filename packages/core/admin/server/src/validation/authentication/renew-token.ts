import { yup, validateYupSchema } from '@kazuki.m---strapi/utils';

const renewToken = yup.object().shape({ token: yup.string().required() }).required().noUnknown();

export default validateYupSchema(renewToken);
