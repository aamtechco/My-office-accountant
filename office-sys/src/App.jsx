import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TasksPage from './pages/tasks/TasksPage';
import ClientsPage from './pages/clients/ClientsPage';
import OfficesPage from './pages/offices/OfficesPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import { supabase } from './lib/supabase';

function RequireAuth({ children }) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    supabase.auth.getUser().then((res) => {
      setUser(res.data?.user ?? null);
      setLoading(false);
    });

    const sub = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => sub?.subscription?.unsubscribe?.();
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;

  return children;
}

export default function App() {
  return (
    <Routes>
      {/* Public route */}
      <Route path="/login" element={<Login />} />

      {/* Protected routes */}
      <Route
        path="/"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      >
        <Route index element={<div className="p-6">Welcome to the dashboard</div>} />
        <Route path="tasks/*" element={<TasksPage />} />
        <Route path="clients/*" element={<ClientsPage />} />
        <Route path="offices/*" element={<OfficesPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings/*" element={<SettingsPage />} />
      </Route>

      {/* Fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
