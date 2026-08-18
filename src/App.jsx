import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import { I18nProvider } from '@/context/I18nContext';
import { marketplaceActions } from '@/features/marketplace/marketplaceStore';
import AppRoutes from '@/routes/AppRoutes';

/**
 * Application root: providers, router, routes. Everything else lives in
 * `routes/`, `pages/` and `features/`.
 */
export default function App() {
  // Cancel any pending simulated counterparty callbacks when the app unmounts.
  useEffect(() => () => marketplaceActions.teardown(), []);

  return (
    <I18nProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </I18nProvider>
  );
}
//