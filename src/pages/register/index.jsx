import { memo } from 'react';
import { RegisterForm } from 'features/auth/register';
import { AuthSection } from 'widgets/auth-section';

function Register() {
  /* TODO Добавить переход на главную в зависимости от текущего пользователя */
  return (
    <AuthSection title='Регистрация'>
      <RegisterForm />
    </AuthSection>
  );
}

export default memo(Register);
