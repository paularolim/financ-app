import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('Must be a valid email')
      .required('It is mandatory to provide an email'),
    password: yup
      .string()
      .min(8, 'Must be at least 8 characters')
      .required('It is mandatory to provide a password'),
  })
  .required();
