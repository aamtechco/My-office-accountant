import React, { useState } from 'react';
import Login from './pages/Login';
import AdminDashboard from './admin/Dashboard';
import ClientDashboard from './client/Dashboard';

export default function App() {
  const [user, setUser] = useState(null);
  if(!user) return <Login setUser={setUser}/>;
  return user.role === 'admin' ? <AdminDashboard /> : <ClientDashboard />;
}