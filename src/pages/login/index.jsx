import { Navigate } from 'react-router-dom';
import { useContext, memo } from 'react';
import { AuthSection } from 'widgets/auth-section';
import { CurrentUserContext } from 'app/contexts';
import { LoginForm } from 'features/auth/login';
import { paths } from 'shared/routing/paths';

function Login() {
  const { currentUser } = useContext(CurrentUserContext);

  return currentUser ? (
    <Navigate to={paths.home} replace />
  ) : (
    <AuthSection title='Вход'>
      <LoginForm />
    </AuthSection>
  );
}

export default memo(Login);
