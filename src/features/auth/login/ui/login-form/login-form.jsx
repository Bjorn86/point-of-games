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

// LOGIN FEATURE
function LoginForm() {
  // HOOKS
  const { isLoginLoading, loginError, handleAction } = useAuth();

  // SUBMIT HANDLER
  const handleSubmit = useCallback(
    ({ email, password }) => {
      handleAction({ email, password }, 'login');
    },
    [handleAction],
  );

  return (
    <>
      <Form
        formName='login'
        onSubmit={handleSubmit}
        buttonText='Войти'
        validationSchema={userValidationSchema}
        isDisabled={isLoginLoading}
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
          placeholder='Пароль'
          isDisabled={isLoginLoading}
          withButton
        />
      </Form>
      {loginError && <Info message={loginError} />}
    </>
  );
}

export default LoginForm;
