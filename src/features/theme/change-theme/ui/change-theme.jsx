// IMPORT PACKAGES
import { useContext } from 'react';

// IMPORT CONTEXT
import { ThemeContext } from 'app/contexts';

// IMPORT UI-KIT
import Button from 'shared/ui/button';

// IMPORT ICONS
import { ReactComponent as SunIcon } from 'shared/ui/assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'shared/ui/assets/icons/moon.svg';

// IMPORT HOOKS
import { useTheme } from 'entities/theme';

function ChangeTheme() {
  // HOOKS
  const theme = useContext(ThemeContext);
  const { toggleTheme } = useTheme();

  return (
    <Button
      content={theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      alt={
        theme === 'dark' ? 'Сменить тему на светлую' : 'Сменить тему на темную'
      }
      onClick={toggleTheme}
    />
  );
}

export default ChangeTheme;
