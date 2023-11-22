import { useCallback } from 'react';
import { userValidationSchema } from 'shared/model/user-validation-schema';
import { useAuth } from 'features/auth/lib/use-auth';
import Input from 'shared/ui/input/input';
import Form from 'shared/ui/form/form';
import Info from 'shared/ui/info/info';

export function RegisterForm() {
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
        buttonText='Sign up'
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
          placeholder='Password'
          isDisabled={isRegisterLoading}
          withButton
        />
      </Form>
      {registerError && <Info message={registerError} />}
    </>
  );
}
