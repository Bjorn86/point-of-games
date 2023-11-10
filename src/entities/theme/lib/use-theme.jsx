// IMPORT PACKAGES
import { useSelector, useDispatch } from 'react-redux';

// IMPORT ACTIONS
import { changeTheme } from '../model/slice';

// USE THEME HOOK
export const useTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  // TOGGLE THEME
  const toggleTheme = () => {
    dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};
