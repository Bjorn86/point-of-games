// IMPORT WIDGETS
import AuthSection from 'widgets/auth-section/ui';

// IMPORT FEATURES
import { RegistrationForm } from 'features/registration';

// IMPORT STYLES

function Registration() {
  return (
    <AuthSection title='Регистрация'>
      <RegistrationForm />
    </AuthSection>
  );
}

export default Registration;
