import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function UpcomingTasks(){
  const [tasks, setTasks] = useState([])
  useEffect(()=> fetch(), [])
  async function fetch(){ const { data } = await supabase.from('tasks').select('*').eq('status','upcoming').order('creation_date',{ascending:false}); setTasks(data||[]) }
  async function markDone(id){ await supabase.from('tasks').update({status:'completed'}).eq('id',id); fetch() }
  async function cancelTask(id){ await supabase.from('tasks').update({status:'cancelled', value:0}).eq('id',id); fetch() }
  return (
    <div>
      <table className="min-w-full">
        <thead><tr className="text-left"><th>Name</th><th>Created</th><th>Expiry</th><th>Value</th><th>Priority</th><th>Actions</th></tr></thead>
        <tbody>
          {tasks.map(t=> <tr key={t.id}><td>{t.task_name}</td><td>{new Date(t.creation_date).toLocaleString()}</td><td>{t.expiration_date}</td><td>{t.value}</td><td>{t.priority_id}</td><td><button onClick={()=>markDone(t.id)} className="px-2 py-1 bg-green-600 text-white rounded mr-2">Done</button><button onClick={()=>cancelTask(t.id)} className="px-2 py-1 bg-red-600 text-white rounded">Cancel</button></td></tr>)}
        </tbody>
      </table>
    </div>
  )
}
