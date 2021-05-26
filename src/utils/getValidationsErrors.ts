import { ValidationError } from 'yup';

interface Errors{
    [key: string]: string;
}

export default function getValidationsErrors(err: ValidationError): Errors {
  const validationError: Errors = {};

  err.inner.forEach((error) => {
    validationError[error.path || 'name'] = error.message;
  });

  return validationError;
}
