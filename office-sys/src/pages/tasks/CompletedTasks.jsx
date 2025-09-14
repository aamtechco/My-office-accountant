import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
export default function CompletedTasks(){
  const [tasks, setTasks] = useState([])
  useEffect(()=> fetch(),[])
  async function fetch(){ const { data } = await supabase.from('tasks').select('*').eq('status','completed').order('creation_date',{ascending:false}); setTasks(data||[]) }
  return (
    <div>
      <table className="min-w-full">
        <thead><tr className="text-left"><th>Name</th><th>Client</th><th>Date</th><th>Value</th></tr></thead>
        <tbody>{tasks.map(t=> <tr key={t.id}><td>{t.task_name}</td><td>{t.client_id}</td><td>{new Date(t.creation_date).toLocaleString()}</td><td>{t.value}</td></tr>)}</tbody>
      </table>
    </div>
  )
}
