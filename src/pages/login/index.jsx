// IMPORT PACKAGES
import { Navigate } from 'react-router-dom';
import { useContext, memo } from 'react';

// IMPORT CONTEXT
import { CurrentUserContext } from 'app/contexts';

// IMPORT WIDGETS
import { AuthSection } from 'widgets/auth-section';

// IMPORT FEATURES
import { LoginForm } from 'features/auth/login';

// IMPORT PATHS
import { paths } from 'shared/routing/paths';

// LOGIN PAGE
function Login() {
  // HOOKS
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
