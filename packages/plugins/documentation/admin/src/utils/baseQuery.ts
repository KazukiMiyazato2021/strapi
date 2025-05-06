import { SerializedError } from '@reduxjs/toolkit';
import { type UnknownApiError, type ApiError } from '@kazuki.m---strapi/strapi/admin';

type BaseQueryError = ApiError | UnknownApiError | SerializedError;

const isBaseQueryError = (error: BaseQueryError): error is ApiError | UnknownApiError => {
  return error.name !== undefined;
};

export { isBaseQueryError };
