// IMPORT PACKAGES
import { Provider } from 'react-redux';

// IMPORT STORE
import { store } from 'app/store';

export const withStoreProvider = (component) => () => (
  <Provider store={store}>{component()}</Provider>
);
