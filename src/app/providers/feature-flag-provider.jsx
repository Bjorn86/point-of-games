import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { FeatureFlagContext } from 'app/contexts/feature-flag';
import { useGetFeatureFlagQuery } from 'shared/api';

export const FeatureFlagProvider = ({ children }) => {
  const { data } = useGetFeatureFlagQuery();

  const value = useMemo(() => {
    if (data) {
      return data;
    }
    return { isFeatureFlagEnabled: false };
  }, [data]);

  return (
    <FeatureFlagContext.Provider value={value}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

FeatureFlagProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
