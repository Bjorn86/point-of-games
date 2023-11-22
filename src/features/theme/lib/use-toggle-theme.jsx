import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import { loadTheme } from 'features/theme/change-theme/model/load-theme';
import { changeTheme, selectTheme } from 'entities/theme';
import { saveDataToLS } from 'shared/lib/utils';

export const useToggleTheme = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const handleToggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(changeTheme(newTheme));
    saveDataToLS('theme', newTheme);
  }, [dispatch, theme]);

  const handleLoadTheme = useCallback(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  // LOAD THEME FROM LOCAL STORAGE
  useEffect(() => {
    handleLoadTheme();
  }, [handleLoadTheme]);

  return handleToggleTheme;
};
