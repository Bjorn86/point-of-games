/* import { onAuthStateChanged } from 'firebase/auth'; */
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
/* import { auth } from 'app/firebase'; */
import { userDataReceived } from 'features/user/model/user-data-received';
import { AuthContext } from 'app/contexts';
import { checkAuth } from 'shared/api';

export const AuthProvider = ({ children }) => {
  const [isAuthorized, setAuthorized] = useState(false);
  const [isCheckingAuth, setCheckingAuth] = useState(true);
  const memoizedValues = useMemo(
    () => ({ isAuthorized, isCheckingAuth }),
    [isAuthorized, isCheckingAuth],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () =>
      checkAuth((user) => {
        if (user) {
          setAuthorized(true);
          dispatch(userDataReceived(user.email));
        } else {
          setAuthorized(false);
        }
        setCheckingAuth(false);
      });

    return unsubscribe();
  }, [dispatch]);

  return (
    <AuthContext.Provider value={memoizedValues}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
