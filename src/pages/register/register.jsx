import { Navigate } from 'react-router-dom';
import { useContext, memo } from 'react';
import { RegisterForm } from 'features/auth/register';
import { AuthSection } from 'widgets/auth-section';
import { AuthContext } from 'app/contexts';
import { paths } from 'shared/model/paths-config';

function Register() {
  const { isAuthorized } = useContext(AuthContext);

  return isAuthorized ? (
    <Navigate to={paths.home} replace />
  ) : (
    <AuthSection title='Registration'>
      <RegisterForm />
    </AuthSection>
  );
}

export default memo(Register);
