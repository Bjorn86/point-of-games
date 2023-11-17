// IMPORT PACKAGES
import * as yup from 'yup';

// VALIDATION SCHEMA
export const userValidationSchema = yup.object({
  email: yup
    .string()
    .email('Введите корректный email')
    .required('Email обязателен'),
  password: yup
    .string()
    .min(6, 'Минимальная длина пароля 6 символов')
    .max(30, 'Максимальная длина пароля 30 символов')
    .required('Пароль обязателен'),
});
