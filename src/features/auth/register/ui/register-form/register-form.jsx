import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { userValidationSchema } from 'shared/model/user-validation-schema';
import { useAuth } from 'features/auth/lib/use-auth';
import Input from 'shared/ui/input/input';
import Form from 'shared/ui/form/form';
import Info from 'shared/ui/info/info';
import s from './register-form.module.scss';

export function RegisterForm() {
  const { isRegisterLoading, registerError, handleAction } = useAuth();
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(userValidationSchema),
  });

  const onSubmit = useCallback(
    ({ email, password }) => {
      handleAction({ email, password }, 'registration');
    },
    [handleAction],
  );

  return (
    <>
      <Form
        control={control}
        formName='registration'
        onSubmit={handleSubmit(onSubmit)}
        buttonText='Sign up'
        isDisabled={isRegisterLoading}
        addButtonClass={s.button}
      >
        <Input
          inputId='email'
          inputType='text'
          formName='registration'
          placeholder='Email'
          isDisabled={isRegisterLoading}
        />
        <Input
          inputId='password'
          inputType='password'
          formName='registration'
          placeholder='Password'
          isDisabled={isRegisterLoading}
          withButton
        />
      </Form>
      {registerError && <Info message={registerError} />}
    </>
  );
}
