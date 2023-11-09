// IMPORT PACKAGES
import compose from 'compose-function';

// IMPORT PROVIDERS
import { withRouter } from './with-router';
import { withStore } from './with-store';
import { withTheme } from './with-theme';

// EXPORT PROVIDERS
export const withProviders = compose(withStore, withRouter, withTheme);
