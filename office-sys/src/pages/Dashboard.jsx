import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/Header'
import Sidebar from '../shared/Sidebar'

export default function Dashboard(){
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 overflow-auto bg-gray-50 flex-1">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
