import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
export default function AddTask(){
  const [clients, setClients] = useState([])
  const [priorities, setPriorities] = useState([])
  const [taskName, setTaskName] = useState('')
  const [clientId, setClientId] = useState('')
  const [value, setValue] = useState('')
  useEffect(()=>{ fetchClients(); fetchPriorities() },[])
  async function fetchClients(){ const { data } = await supabase.from('clients').select('id, full_name').eq('is_active',true); setClients(data||[]) }
  async function fetchPriorities(){ const { data } = await supabase.from('priorities').select('*').eq('is_active',true); setPriorities(data||[]) }
  async function submit(){ if(!taskName || !clientId) return alert('Fill required'); await supabase.from('tasks').insert([{task_name:taskName, client_id:clientId, value: value||0, status:'upcoming'}]); alert('Added'); setTaskName(''); setClientId(''); setValue('') }
  return (
    <div>
      <div className="space-y-2 max-w-lg">
        <div><label className="block text-sm">Task Name</label><input className="w-full border rounded px-3 py-2" value={taskName} onChange={e=>setTaskName(e.target.value)} /></div>
        <div><label className="block text-sm">Client</label><select className="w-full border rounded px-3 py-2" value={clientId} onChange={e=>setClientId(e.target.value)}><option value=''>--</option>{clients.map(c=> <option key={c.id} value={c.id}>{c.full_name}</option>)}</select></div>
        <div><label className="block text-sm">Value</label><input className="w-full border rounded px-3 py-2" value={value} onChange={e=>setValue(e.target.value)} /></div>
        <div><button onClick={submit} className="px-4 py-2 bg-blue-600 text-white rounded">Create</button></div>
      </div>
    </div>
  )
}
