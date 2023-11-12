// IMPORT WIDGETS
import AuthSection from 'widgets/auth-section/ui';

// IMPORT FEATURES
import { LoginForm } from 'features/login';

// IMPORT STYLES

function Login() {
  return (
    <AuthSection title='Вход'>
      <LoginForm />
    </AuthSection>
  );
}

export default Login;
