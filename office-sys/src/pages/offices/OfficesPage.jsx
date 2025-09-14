import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import TaxOffices from './TaxOffices'
import VatOffices from './VatOffices'
import RegOffices from './RegOffices'
import Priorities from './Priorities'

export default function OfficesPage(){
  return (
    <div>
      <div className="flex items-center justify-between mb-4"><h2 className="text-xl font-semibold">Offices</h2></div>
      <div className="bg-white p-4 rounded shadow">
        <div className="space-x-3 mb-4"><Link to="tax" className="text-blue-600">Tax</Link><Link to="vat" className="text-blue-600">VAT</Link><Link to="reg" className="text-blue-600">Register</Link><Link to="priorities" className="text-blue-600">Priorities</Link></div>
        <Routes>
          <Route path="tax" element={<TaxOffices/>} />
          <Route path="vat" element={<VatOffices/>} />
          <Route path="reg" element={<RegOffices/>} />
          <Route path="priorities" element={<Priorities/>} />
          <Route index element={<TaxOffices/>} />
        </Routes>
      </div>
    </div>
  )
}
