import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { ROUTES } from '@/constants';

/**
 * Gate for routes that require a signed-in shareholder. Renders nothing while
 * the session is still being restored, so a refresh does not bounce the user to
 * the login screen before `me()` resolves.
 */
export default function ProtectedRoute({ redirectTo = ROUTES.LOGIN }) {
  const { isAuthenticated, status } = useAuth();
  const location = useLocation();

  if (status === 'loading') {
    return (
      <div className="px-6 py-12 text-center text-sm font-bold text-muted">
        Loading session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  return <Outlet />;
}
