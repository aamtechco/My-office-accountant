import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { Link } from 'react-router-dom'

export default function AllClients(){
  const [clients, setClients] = useState([])
  useEffect(()=> fetch(),[])
  async function fetch(){ const { data } = await supabase.from('clients').select('*').order('full_name'); setClients(data||[]) }
  async function deactivate(id){ if(!confirm('Deactivate?')) return; await supabase.from('clients').update({is_active:false}).eq('id',id); fetch() }
  return (
    <div>
      <table className="min-w-full">
        <thead><tr><th>#</th><th>Name</th><th>Mobile</th><th>Active</th><th>Actions</th></tr></thead>
        <tbody>{clients.map(c=> <tr key={c.id}><td>{c.client_number}</td><td><Link to={'/clients/'+c.id}>{c.full_name}</Link></td><td>{c.mobile_number}</td><td>{c.is_active? 'Yes':'No'}</td><td><button onClick={()=>deactivate(c.id)} className="px-2 py-1 bg-red-500 text-white rounded">Deactivate</button></td></tr>)}</tbody>
      </table>
    </div>
  )
}
