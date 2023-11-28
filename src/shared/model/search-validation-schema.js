import * as yup from 'yup';

export const searchValidationSchema = yup.object({
  search: yup
    .string()
    .min(2, 'Minimum search length 2 characters')
    .required('Search required'),
});
