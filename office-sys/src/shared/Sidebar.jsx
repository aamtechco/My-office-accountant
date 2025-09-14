import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ListChecks, Users, Building2, FileBarChart2, Settings } from 'lucide-react'

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4 border-b font-bold">My System</div>
      <nav className="p-4 space-y-1">
        <Link to="/" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50"><Home size={16}/> Dashboard</Link>
        <Link to="/tasks" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50"><ListChecks size={16}/> Tasks</Link>
        <Link to="/clients" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50"><Users size={16}/> Clients</Link>
        <Link to="/offices" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50"><Building2 size={16}/> Offices</Link>
        <Link to="/reports" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50"><FileBarChart2 size={16}/> Reports</Link>
        <Link to="/settings" className="flex items-center gap-2 p-2 rounded hover:bg-gray-50"><Settings size={16}/> Settings</Link>
      </nav>
    </aside>
  )
}
