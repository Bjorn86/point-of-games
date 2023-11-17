// IMPORT API
import { logout } from 'shared/api';

// IMPORT STYLES
import s from './logout.module.scss';

function Logout() {
  return (
    <button className={s.button} type='button' onClick={logout}>
      Выход
    </button>
  );
}

export default Logout;
