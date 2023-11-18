import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { CurrentUserContext } from 'app/contexts';
import { checkAuth } from 'shared/api';

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const memoizedValues = useMemo(
    () => ({ currentUser, isLoading }),
    [currentUser, isLoading],
  );

  useEffect(() => {
    const unsubscribe = checkAuth((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <CurrentUserContext.Provider value={memoizedValues}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
