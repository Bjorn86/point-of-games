// IMPORT PROVIDERS
import { CurrentUserProvider } from './current-user-provider';
import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

export const withProviders = (Component) => () => (
  <StoreProvider>
    <RouterProvider>
      <CurrentUserProvider>
        <Component />
      </CurrentUserProvider>
    </RouterProvider>
  </StoreProvider>
);
