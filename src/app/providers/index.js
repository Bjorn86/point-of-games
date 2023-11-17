import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

export const withProviders = (Component) => () => (
  <StoreProvider>
    <RouterProvider>
      <Component />
    </RouterProvider>
  </StoreProvider>
);
