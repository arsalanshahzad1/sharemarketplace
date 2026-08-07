import { Route, Routes } from 'react-router-dom';
import PageWrapper from '@/components/layout/PageWrapper/PageWrapper';
import { ROUTES } from '@/constants';
import Home from '@/pages/Home/Home';
import Dashboard from '@/pages/Dashboard/Dashboard';
import Browse from '@/pages/Browse/Browse';
import ListingDetail from '@/pages/ListingDetail/ListingDetail';
import Sell from '@/pages/Sell/Sell';
import Offers from '@/pages/Offers/Offers';
import Payment from '@/pages/Payment/Payment';
import PaymentSuccess from '@/pages/PaymentSuccess/PaymentSuccess';
import Transactions from '@/pages/Transactions/Transactions';
import NotFound from '@/pages/NotFound/NotFound';

/**
 * Route table. Every screen sits inside `PageWrapper`, which supplies the nav,
 * footer and toast layer.
 *
 * Marketplace routes are open in this build — the registry demo signs the user
 * in automatically. Wrapping them in `<Route element={<ProtectedRoute />}>` is
 * all that is needed once a real login exists.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageWrapper />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.BROWSE} element={<Browse />} />
        <Route path={ROUTES.LISTING} element={<ListingDetail />} />
        <Route path={ROUTES.SELL} element={<Sell />} />
        <Route path={ROUTES.OFFERS} element={<Offers />} />
        <Route path={ROUTES.PAYMENT} element={<Payment />} />
        <Route path={ROUTES.PAYMENT_SUCCESS} element={<PaymentSuccess />} />
        <Route path={ROUTES.TRANSACTIONS} element={<Transactions />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
