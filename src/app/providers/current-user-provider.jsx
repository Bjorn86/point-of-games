import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserData } from 'features/user/model/get-user-data';
import { CurrentUserContext } from 'app/contexts';
import { checkAuth } from 'shared/api';

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const memoizedValues = useMemo(
    () => ({ currentUser, isLoading }),
    [currentUser, isLoading],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = () =>
      checkAuth((user) => {
        setCurrentUser(user);
        setIsLoading(false);
        if (user) {
          dispatch(getUserData(user.email));
        }
      });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <CurrentUserContext.Provider value={memoizedValues}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
