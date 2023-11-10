// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT CONTEXT
import { ThemeContext } from 'app/contexts';

// IMPORT HOOKS
import { useTheme } from 'entities/theme';

export const ThemeProvider = ({ children }) => {
  const { theme } = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
