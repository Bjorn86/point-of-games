import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { userValidationSchema } from 'shared/model/user-validation-schema';
import { useAuth } from 'features/auth/lib/use-auth';
import Input from 'shared/ui/input/input';
import Form from 'shared/ui/form/form';
import Info from 'shared/ui/info/info';
import s from './login-form.module.scss';

export function LoginForm() {
  const { isLoginLoading, loginError, handleAction } = useAuth();
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(userValidationSchema),
  });

  const onSubmit = useCallback(
    ({ email, password }) => {
      handleAction({ email, password }, 'login');
    },
    [handleAction],
  );

  return (
    <>
      <Form
        control={control}
        formName='login'
        onSubmit={handleSubmit(onSubmit)}
        buttonText='Sign in'
        isDisabled={isLoginLoading}
        addButtonClass={s.button}
      >
        <Input
          inputId='email'
          inputType='text'
          formName='login'
          placeholder='Email'
          isDisabled={isLoginLoading}
        />
        <Input
          inputId='password'
          inputType='password'
          formName='login'
          placeholder='Password'
          isDisabled={isLoginLoading}
          withButton
        />
      </Form>
      {loginError && <Info message={loginError} />}
    </>
  );
}
