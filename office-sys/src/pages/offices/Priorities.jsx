import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
export default function Priorities(){
  const [list,setList]=useState([]); const [name,setName]=useState('')
  useEffect(()=> fetch(),[])
  async function fetch(){ const { data } = await supabase.from('priorities').select('*').order('id'); setList(data||[]) }
  async function add(){ if(!name) return alert('name'); await supabase.from('priorities').insert([{name,is_active:true}]); setName(''); fetch() }
  async function edit(id){ const n=prompt('New name'); if(!n) return; await supabase.from('priorities').update({name:n}).eq('id',id); fetch() }
  async function deactivate(id){ await supabase.from('priorities').update({is_active:false}).eq('id',id); fetch() }
  return (
    <div>
      <div className="max-w-lg mb-4 space-y-2">
        <div><label className="block text-sm">Name</label><input className="w-full border rounded px-3 py-2" value={name} onChange={e=>setName(e.target.value)}/></div>
        <div><button onClick={add} className="px-3 py-1 bg-blue-600 text-white rounded">Add</button></div>
      </div>
      <table className="min-w-full"><thead><tr><th>Name</th><th>Active</th><th>Actions</th></tr></thead><tbody>{list.map(p=> <tr key={p.id}><td>{p.name}</td><td>{p.is_active?'Yes':'No'}</td><td><button onClick={()=>edit(p.id)} className="px-2 py-1 bg-gray-600 text-white rounded mr-2">Edit</button><button onClick={()=>deactivate(p.id)} className="px-2 py-1 bg-red-600 text-white rounded">Deactivate</button></td></tr>)}</tbody></table>
    </div>
  )
}
