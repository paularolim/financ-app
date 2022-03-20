import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    title: yup.string().required('It is mandatory to provide a title'),
    description: yup
      .string()
      .required('It is mandatory to provide a description'),
    amount: yup
      .number()
      .min(0)
      .required('It is mandatory to provide an amount'),
  })
  .required();
