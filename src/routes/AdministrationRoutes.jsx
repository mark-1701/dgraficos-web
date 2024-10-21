import { Routes, Route, Navigate } from 'react-router-dom';
import AdministrationLayout from '../pages/administration/components/AdministrationLayout';
import Dashboard from '../pages/administration/pages/Dashbord';
import ResolveOrders from '../pages/administration/pages/ResolveOrders';
import AllOrders from '../pages/administration/pages/AllOrders/AllOrders';

const AdministrationRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="resolve-orders" />} />
      <Route
        path="dashboard"
        element={
          <AdministrationLayout
          module={<Dashboard />}
          />
        }
      />
      <Route
        path="resolve-orders"
        element={
          <AdministrationLayout
          module={<ResolveOrders />}
          />
        }
      />
      <Route
        path="all-orders"
        element={
          <AdministrationLayout
          module={<AllOrders />}
          />
        }
      />
    </Routes>
  );
};

export default AdministrationRoutes;
