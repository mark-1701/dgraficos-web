import { Routes, Route, Navigate } from 'react-router-dom';
import AdministrationLayout from '../pages/administration/components/AdministrationLayout';
import Dashboard from '../pages/administration/pages/Dashbord';

const AdministrationRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Navigate to="dashboard" />} />
      <Route
        path="dashboard"
        element={
          <AdministrationLayout
          module={<Dashboard />}
          />
        }
      />
    </Routes>
  );
};

export default AdministrationRoutes;
