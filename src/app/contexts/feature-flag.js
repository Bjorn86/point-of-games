import { createContext } from 'react';

export const FeatureFlagContext = createContext({
  isFeatureFlagEnabled: false,
});
