// IMPORT UI-KIT
import Input from 'shared/ui/input';
import Form from 'shared/ui/form';

function RegistrationForm() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form
      formName='registration'
      onSubmit={onSubmit}
      buttonText='Зарегистрироваться'
    >
      <Input
        inputId='email'
        inputType='text'
        formName='registration'
        placeholder='Email'
        isDisabled={false}
      />
      <Input
        inputId='password'
        inputType='password'
        formName='registration'
        placeholder='Пароль'
        isDisabled={false}
        withButton
      />
    </Form>
  );
}

export default RegistrationForm;
