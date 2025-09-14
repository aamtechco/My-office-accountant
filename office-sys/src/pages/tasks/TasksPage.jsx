import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import UpcomingTasks from './UpcomingTasks'
import CompletedTasks from './CompletedTasks'
import ArchivedTasks from './ArchivedTasks'
import AddTask from './AddTask'

export default function TasksPage(){ 
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <div className="space-x-2"><Link to="add" className="px-3 py-1 bg-blue-600 text-white rounded">Add Task</Link></div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <nav className="mb-4 space-x-3"><Link to="upcoming" className="text-sm text-blue-600">Upcoming</Link> <Link to="completed" className="text-sm text-blue-600">Completed</Link> <Link to="archived" className="text-sm text-blue-600">Archived</Link></nav>
        <Routes>
          <Route path="upcoming" element={<UpcomingTasks/>} />
          <Route path="completed" element={<CompletedTasks/>} />
          <Route path="archived" element={<ArchivedTasks/>} />
          <Route path="add" element={<AddTask/>} />
          <Route index element={<UpcomingTasks/>} />
        </Routes>
      </div>
    </div>
  )
}
