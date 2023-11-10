// IMPORT PROVIDERS
import { ThemeProvider } from './theme-provider';
import { RouterProvider } from './router-provider';
import { StoreProvider } from './store-provider';

export const withProviders = (Component) => () => (
  <StoreProvider>
    <RouterProvider>
      <ThemeProvider>
        <Component />
      </ThemeProvider>
    </RouterProvider>
  </StoreProvider>
);
