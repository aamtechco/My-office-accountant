import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(){
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'><Link to='/tasks'>Tasks</Link></li>
        <li className='nav-item'><Link to='/clients'>Clients</Link></li>
        <li className='nav-item'><Link to='/offices'>Offices</Link></li>
        <li className='nav-item'><Link to='/reports'>Reports</Link></li>
        <li className='nav-item'><Link to='/settings'>Settings</Link></li>
      </ul>
    </nav>
  )
}
