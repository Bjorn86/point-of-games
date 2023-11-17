// IMPORT PACKAGES
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';

// IMPORT UTILS
import { saveDataToLS } from 'shared/utils/utils';

// IMPORT ACTIONS AND SELECTORS
import { loadTheme } from 'features/theme/change-theme/model/load-theme';
import { changeTheme, selectTheme } from 'entities/theme';

// USE TOGGLE THEME HOOK
export const useToggleTheme = () => {
  // HOOKS
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  // TOGGLE THEME
  const handleToggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(newTheme));
    saveDataToLS('theme', newTheme);
  }, [dispatch, theme]);

  // HANDLE LOAD THEME
  const handleLoadTheme = useCallback(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  // LOAD THEME FROM LOCAL STORAGE
  useEffect(() => {
    handleLoadTheme();
  }, [handleLoadTheme]);

  return handleToggleTheme;
};
