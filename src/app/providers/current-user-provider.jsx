// IMPORT PACKAGES
import { useEffect, useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

// IMPORT CONTEXT
import { CurrentUserContext } from 'app/contexts';

// IMPORT API METHODS
import { checkAuth } from 'shared/api';

export const CurrentUserProvider = ({ children }) => {
  // HOOKS
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const memoizedValues = useMemo(
    () => ({ currentUser, isLoading }),
    [currentUser, isLoading],
  );

  // CHECK AUTHORIZATION HANDLER
  const unsubscribe = useCallback(() => checkAuth(setCurrentUser), []);

  // CHECK AUTHORIZATION EFFECT
  useEffect(() => {
    unsubscribe();
    setIsLoading(false);

    return () => {
      unsubscribe();
    };
  }, [unsubscribe]);

  return (
    <CurrentUserContext.Provider value={memoizedValues}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
