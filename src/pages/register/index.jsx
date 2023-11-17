// IMPORT PACKAGES
import { Navigate } from 'react-router-dom';
import { useContext, memo } from 'react';

// IMPORT CONTEXT
import { CurrentUserContext } from 'app/contexts';

// IMPORT WIDGETS
import { AuthSection } from 'widgets/auth-section';

// IMPORT FEATURES
import { RegisterForm } from 'features/auth/register';

// IMPORT PATHS
import { paths } from 'shared/routing/paths';

// REGISTRATION PAGE
function Register() {
  // HOOKS
  const { currentUser } = useContext(CurrentUserContext);

  return currentUser ? (
    <Navigate to={paths.home} replace />
  ) : (
    <AuthSection title='Регистрация'>
      <RegisterForm />
    </AuthSection>
  );
}

export default memo(Register);
