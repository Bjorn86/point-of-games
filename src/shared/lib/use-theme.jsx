// IMPORT PACKAGES
import { useSelector } from 'react-redux';

// IMPORT SELECTORS
import { selectTheme } from 'entities/theme';

// USE THEME HOOK
export const useTheme = () => {
  // HOOKS
  const theme = useSelector(selectTheme);

  return theme;
};
