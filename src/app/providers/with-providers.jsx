import { AuthProvider } from './auth-provider';
import { FeatureFlagProvider } from './feature-flag-provider';
import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

export const withProviders = (Component) => () => (
  <StoreProvider>
    <RouterProvider>
      <AuthProvider>
        <FeatureFlagProvider>
          <Component />
        </FeatureFlagProvider>
      </AuthProvider>
    </RouterProvider>
  </StoreProvider>
);
