import { CurrentUserProvider } from './current-user-provider';
import { FeatureFlagProvider } from './feature-flag-provider';
import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

export const withProviders = (Component) => () => (
  <StoreProvider>
    <RouterProvider>
      <CurrentUserProvider>
        <FeatureFlagProvider>
          <Component />
        </FeatureFlagProvider>
      </CurrentUserProvider>
    </RouterProvider>
  </StoreProvider>
);
