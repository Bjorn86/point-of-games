// IMPORT PACKAGES
import { Provider } from 'react-redux';

// IMPORT STORE
import { store } from 'app/store';

// EXPORT PROVIDER
export const withStore = (component) => () => (
  <Provider store={store}>{component()}</Provider>
);
