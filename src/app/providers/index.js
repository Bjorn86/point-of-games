// IMPORT PACKAGES
import compose from 'compose-function';

// IMPORT PROVIDERS
import { withStoreProvider } from './with-store-provider';

// EXPORT PROVIDERS
export const withProviders = compose(withStoreProvider);
