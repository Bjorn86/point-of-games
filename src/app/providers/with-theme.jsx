// IMPORT CONTEXT
import { ThemeContext } from 'app/context';

// EXPORT PROVIDER
export const withTheme = (component) => () => (
  <ThemeContext.Provider value='light'>{component()}</ThemeContext.Provider>
);
