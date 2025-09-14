import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
export default function Roles(){ const [list,setList]=useState([]); const [name,setName]=useState(''); useEffect(()=> fetch(),[])
  async function fetch(){ const { data } = await supabase.from('roles').select('*'); setList(data||[]) }
  async function add(){ if(!name) return alert('name'); await supabase.from('roles').insert([{name}]); setName(''); fetch() }
  async function edit(id){ const n=prompt('New name'); if(!n) return; await supabase.from('roles').update({name:n}).eq('id',id); fetch() }
  return (
    <div>
      <div className="max-w-md mb-4"><label className="block text-sm">Name</label><input className="w-full border rounded px-3 py-2" value={name} onChange={e=>setName(e.target.value)}/><div className="mt-2"><button onClick={add} className="px-3 py-1 bg-blue-600 text-white rounded">Add Role</button></div></div>
      <table className="min-w-full"><thead><tr><th>Name</th><th>Actions</th></tr></thead><tbody>{list.map(r=> <tr key={r.id}><td>{r.name}</td><td><button onClick={()=>edit(r.id)} className="px-2 py-1 bg-gray-600 text-white rounded">Edit</button></td></tr>)}</tbody></table>
    </div>
  )
}
