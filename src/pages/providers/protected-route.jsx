import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from 'app/contexts';
import { paths } from 'shared/model/paths-config';

function ProtectedRoute({ children }) {
  const { isAuthorized } = useContext(AuthContext);

  return isAuthorized ? children : <Navigate to={paths.registration} replace />;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
