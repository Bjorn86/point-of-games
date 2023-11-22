import { Navigate } from 'react-router-dom';
import { useContext, memo } from 'react';
import { RegisterForm } from 'features/auth/register';
import { AuthSection } from 'widgets/auth-section';
import { CurrentUserContext } from 'app/contexts';
import { paths } from 'shared/model/paths-config';

function Register() {
  const { currentUser } = useContext(CurrentUserContext);

  return currentUser ? (
    <Navigate to={paths.home} replace />
  ) : (
    <AuthSection title='Registration'>
      <RegisterForm />
    </AuthSection>
  );
}

export default memo(Register);
