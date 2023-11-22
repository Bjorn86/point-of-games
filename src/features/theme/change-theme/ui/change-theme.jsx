import { ReactComponent as MoonIcon } from 'shared/ui/assets/icons/moon.svg';
import { ReactComponent as SunIcon } from 'shared/ui/assets/icons/sun.svg';
import { useToggleTheme } from 'features/theme/lib/use-toggle-theme';
import { useTheme } from 'shared/lib/use-theme';
import Button from 'shared/ui/button/button';

export function ChangeTheme() {
  const handleToggleTheme = useToggleTheme();
  const theme = useTheme();

  return (
    <Button
      view='rounded'
      content={theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      alt={
        theme === 'dark'
          ? 'Change the theme to light'
          : 'Change the theme to dark'
      }
      onClick={handleToggleTheme}
    />
  );
}
