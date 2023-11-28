import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CurrentUserContext } from 'app/contexts';
import { paths } from 'shared/model/paths-config';

function ProtectedRoute({ children }) {
  const { currentUser } = useContext(CurrentUserContext);

  return currentUser ? children : <Navigate to={paths.registration} replace />;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
