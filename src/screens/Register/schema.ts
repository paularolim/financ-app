import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .required('It is mandatory to enter a name')
      .min(5, 'Must be at least 5 characters')
      .max(200, 'Must be a maximum of 200 characters'),
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
