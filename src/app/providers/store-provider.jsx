import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { store } from 'app/store';

export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
