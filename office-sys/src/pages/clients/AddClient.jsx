import React, { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function AddClient(){
  const [clientNumber, setClientNumber] = useState('')
  const [fullName, setFullName] = useState('')
  const [mobile, setMobile] = useState('')

  function onlyDigits(v){ return /^\d*$/.test(v) }
  async function submit(){ if(!clientNumber||!fullName||!mobile) return alert('Fill required'); if(!onlyDigits(mobile)) return alert('Mobile digits only'); await supabase.from('clients').insert([{client_number:clientNumber, full_name:fullName, mobile_number:mobile}]); alert('Added'); setClientNumber(''); setFullName(''); setMobile('') }
  return (
    <div className="max-w-lg space-y-3">
      <div><label className="block text-sm">Client Number</label><input className="w-full border rounded px-3 py-2" value={clientNumber} onChange={e=>setClientNumber(e.target.value)} /></div>
      <div><label className="block text-sm">Full Name</label><input className="w-full border rounded px-3 py-2" value={fullName} onChange={e=>setFullName(e.target.value)} /></div>
      <div><label className="block text-sm">Mobile</label><input className="w-full border rounded px-3 py-2" value={mobile} onChange={e=>setMobile(e.target.value)} /></div>
      <div><button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Add Client</button></div>
    </div>
  )
}
