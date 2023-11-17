import { useCallback } from 'react';
import { userValidationSchema } from 'shared/model/user-validation-schema';
import { useAuth } from 'features/auth/lib/use-auth';
import Input from 'shared/ui/input';
import Form from 'shared/ui/form';
import Info from 'shared/ui/info';

function RegisterForm() {
  const { isRegisterLoading, registerError, handleAction } = useAuth();

  const handleSubmit = useCallback(
    ({ email, password }) => {
      handleAction({ email, password }, 'registration');
    },
    [handleAction],
  );

  return (
    <>
      <Form
        formName='registration'
        onSubmit={handleSubmit}
        buttonText='Зарегистрироваться'
        validationSchema={userValidationSchema}
        isDisabled={isRegisterLoading}
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
          placeholder='Пароль'
          isDisabled={isRegisterLoading}
          withButton
        />
      </Form>
      {registerError && <Info message={registerError} />}
    </>
  );
}

export default RegisterForm;
