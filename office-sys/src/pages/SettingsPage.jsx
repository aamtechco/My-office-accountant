import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Users from './settings/Users'
import Roles from './settings/Roles'

export default function SettingsPage(){
  return (
    <div>
      <div className="flex items-center justify-between mb-4"><h2 className="text-xl font-semibold">Settings</h2></div>
      <div className="bg-white p-4 rounded shadow">
        <div className="space-x-3 mb-4"><Link to="users" className="text-blue-600">Users</Link><Link to="roles" className="text-blue-600">Roles</Link></div>
        <Routes>
          <Route path="users" element={<Users/>} />
          <Route path="roles" element={<Roles/>} />
          <Route index element={<Users/>} />
        </Routes>
      </div>
    </div>
  )
}
