// IMPORT UI-KIT
import Input from 'shared/ui/input';
import Form from 'shared/ui/form';

function LoginForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form formName='login' onSubmit={onSubmit} buttonText='Войти'>
      <Input
        inputId='email'
        inputType='text'
        formName='login'
        placeholder='Email'
        isDisabled={false}
      />
      <Input
        inputId='password'
        inputType='password'
        formName='login'
        placeholder='Пароль'
        isDisabled={false}
        withButton
      />
    </Form>
  );
}

export default LoginForm;
