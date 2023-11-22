import { useAuth } from 'features/auth/lib/use-auth';
import s from './logout.module.scss';

export function Logout() {
  const { handleLogout } = useAuth();

  return (
    <button className={s.button} type='button' onClick={handleLogout}>
      Logout
    </button>
  );
}
