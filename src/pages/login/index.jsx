import { memo } from 'react';
import { AuthSection } from 'widgets/auth-section';
import { LoginForm } from 'features/auth/login';

function Login() {
  /* TODO Добавить переход на главную в зависимости от текущего пользователя */
  return (
    <AuthSection title='Вход'>
      <LoginForm />
    </AuthSection>
  );
}

export default memo(Login);
