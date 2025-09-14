import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
export default function RegOffices(){
  const [list, setList] = useState([]); const [name,setName]=useState(''); const [addr,setAddr]=useState('')
  useEffect(()=> fetch(),[])
  async function fetch(){ const { data } = await supabase.from('commercial_register_offices').select('*').order('name'); setList(data||[]) }
  async function add(){ if(!name) return alert('name'); await supabase.from('commercial_register_offices').insert([{name,address:addr}]); setName(''); setAddr(''); fetch() }
  async function edit(id){ const n = prompt('New name'); if(!n) return; await supabase.from('commercial_register_offices').update({name:n}).eq('id',id); fetch() }
  return (
    <div>
      <div className="max-w-lg space-y-2 mb-4">
        <div><label className="block text-sm">Name</label><input className="w-full border rounded px-3 py-2" value={name} onChange={e=>setName(e.target.value)}/></div>
        <div><label className="block text-sm">Address</label><input className="w-full border rounded px-3 py-2" value={addr} onChange={e=>setAddr(e.target.value)}/></div>
        <div><button onClick={add} className="px-3 py-1 bg-blue-600 text-white rounded">Add</button></div>
      </div>
      <table className="min-w-full"><thead><tr><th>Name</th><th>Address</th><th>Actions</th></tr></thead><tbody>{list.map(o=> <tr key={o.id}><td>{o.name}</td><td>{o.address}</td><td><button onClick={()=>edit(o.id)} className="px-2 py-1 bg-gray-600 text-white rounded">Edit</button></td></tr>)}</tbody></table>
    </div>
  )
}
