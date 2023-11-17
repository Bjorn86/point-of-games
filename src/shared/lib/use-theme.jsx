import { useSelector } from 'react-redux';
import { selectTheme } from 'entities/theme';

export const useTheme = () => {
  const theme = useSelector(selectTheme);

  return theme;
};
