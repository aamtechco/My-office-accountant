import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import AllClients from './AllClients'
import AddClient from './AddClient'
import ClientDetails from './ClientDetails'

export default function ClientsPage(){
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Clients</h2>
        <div><Link to="add" className="px-3 py-1 bg-blue-600 text-white rounded">Add Client</Link></div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <Routes>
          <Route path="all" element={<AllClients/>} />
          <Route path="add" element={<AddClient/>} />
          <Route path=":id" element={<ClientDetails/>} />
          <Route index element={<AllClients/>} />
        </Routes>
      </div>
    </div>
  )
}
