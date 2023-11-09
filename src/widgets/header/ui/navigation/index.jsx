// IMPORT UI-KIT
import HeaderLink from 'shared/ui/header-link';

// IMPORT CONFIGS
import { navListForUser } from 'widgets/header/ui/navigation/config';

// IMPORT STYLES
import s from './navigation.module.scss';

// NAVIGATION COMPONENT
function Navigation() {
  // HANDLER RENDER LINKS LIST
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
        {/* TODO: Когда будет пользователь, проверять есть ли он, определять список и кнопку */}
        {renderLinksList(navListForUser)}
        <li>
          {/* TODO: Добавить обработчик на клик */}
          <button className={s.button} type='button'>
            Выход
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
