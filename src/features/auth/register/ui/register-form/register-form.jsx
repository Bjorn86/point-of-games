// IMPORT PACKAGES
import { useCallback } from 'react';

// IMPORT UI-KIT
import Input from 'shared/ui/input';
import Form from 'shared/ui/form';
import Info from 'shared/ui/info';

// IMPORT VALIDATION SCHEMA
import { userValidationSchema } from 'shared/model/user-validation-schema';

// IMPORT HOOKS
import { useAuth } from 'features/auth/lib/use-auth';

// REGISTRATION FEATURE
function RegisterForm() {
  // HOOKS
  const { isRegisterLoading, registerError, handleAction } = useAuth();

  // SUBMIT HANDLER
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
