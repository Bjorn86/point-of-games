// IMPORT PACKAGES
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

// IMPORT STORE
import { store } from 'app/store';

// EXPORT PROVIDER
export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
