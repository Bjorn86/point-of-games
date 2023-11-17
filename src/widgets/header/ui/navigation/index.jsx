import { navListForGuest } from './config';
import HeaderLink from '../header-link';
import s from './navigation.module.scss';

// NAVIGATION COMPONENT
function Navigation() {
  /* TODO Импортировать текущего пользователя */

  function renderLinksList(list) {
    return list.map((item) => (
      <li key={item.text}>
        <HeaderLink href={item.href} text={item.text} />
      </li>
    ));
  }

  return (
    <nav>
      <ul className={s.list}>
        {/* TODO Отображать список на основе текущего пользователя */}
        {renderLinksList(navListForGuest)}
        {/* TODO Заменить на Logout и отображать кнопку на основе текущего пользователя */}
        <button className={s.button} type='button'>
          Выход
        </button>
      </ul>
    </nav>
  );
}

export default Navigation;
