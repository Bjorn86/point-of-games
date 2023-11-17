// IMPORT HOOKS
import { useToggleTheme } from 'features/theme/lib/use-toggle-theme';
import { useTheme } from 'shared/lib/use-theme';

// IMPORT UI-KIT
import Button from 'shared/ui/button';

// IMPORT ICONS
import { ReactComponent as SunIcon } from 'shared/ui/assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'shared/ui/assets/icons/moon.svg';

// CHANGE THEME FEATURE
function ChangeTheme() {
  // HOOKS
  const handleToggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <Button
      view='rounded'
      content={theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      alt={
        theme === 'dark' ? 'Сменить тему на светлую' : 'Сменить тему на темную'
      }
      onClick={handleToggleTheme}
    />
  );
}

export default ChangeTheme;
