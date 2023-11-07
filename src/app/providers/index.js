// IMPORT PACKAGES
import compose from 'compose-function';

// IMPORT PROVIDERS
import { withRouter } from './with-router';
import { withStore } from './with-store';

// EXPORT PROVIDERS
export const withProviders = compose(withStore, withRouter);
