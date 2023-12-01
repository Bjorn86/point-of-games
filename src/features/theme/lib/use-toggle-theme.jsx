import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { themeLoaded } from 'features/theme/change-theme/model/theme-loaded';
import { themeToggled, selectTheme } from 'entities/theme';
import { saveDataToLS } from 'shared/lib/utils';

export const useToggleTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleToggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(themeToggled(newTheme));
    saveDataToLS('theme', newTheme);
  }, [dispatch, theme]);

  const handleLoadTheme = useCallback(() => {
    dispatch(themeLoaded());
  }, [dispatch]);

  // LOAD THEME FROM LOCAL STORAGE
  useEffect(() => {
    handleLoadTheme();
  }, [handleLoadTheme]);

  return handleToggleTheme;
};
