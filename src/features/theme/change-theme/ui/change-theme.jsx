import { useToggleTheme } from 'features/theme/lib/use-toggle-theme';
import { useTheme } from 'shared/lib/use-theme';
import { ReactComponent as SunIcon } from 'shared/ui/assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'shared/ui/assets/icons/moon.svg';
import Button from 'shared/ui/button';

function ChangeTheme() {
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
