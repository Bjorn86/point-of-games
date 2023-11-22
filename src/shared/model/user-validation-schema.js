import * as yup from 'yup';

export const userValidationSchema = yup.object({
  email: yup
    .string()
    .email('Enter correct Email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Minimum password length 6 characters')
    .max(30, 'Maximum password length 30 characters')
    .required('Password required'),
});
