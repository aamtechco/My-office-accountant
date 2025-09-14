import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import jsPDF from 'jspdf'

export default function ReportsPage(){
  const [clients,setClients]=useState([]); const [sel,setSel]=useState(''); const [report,setReport]=useState(null)
  useEffect(()=> fetchClients(),[])
  async function fetchClients(){ const { data } = await supabase.from('clients').select('*').order('full_name'); setClients(data||[]) }
  async function gen(){ if(!sel) return alert('Select client'); const { data } = await supabase.from('tasks').select('*').eq('client_id',sel); setReport({tasks:data||[]}) }
  function exportPDF(){ if(!report) return alert('Generate first'); const doc=new jsPDF(); doc.text('Client Report',14,20); report.tasks.forEach((t,i)=> doc.text(`${i+1}. ${t.task_name} - ${t.status} - ${t.value}`,14,30+i*8)); doc.save('report.pdf') }
  return (
    <div>
      <div className="flex gap-2 mb-4">
        <select value={sel} onChange={e=>setSel(e.target.value)} className="border rounded px-3 py-2"><option value=''>-- Select Client --</option>{clients.map(c=> <option key={c.id} value={c.id}>{c.full_name}</option>)}</select>
        <button onClick={gen} className="px-3 py-1 bg-blue-600 text-white rounded">Generate</button>
        <button onClick={exportPDF} className="px-3 py-1 bg-green-600 text-white rounded">Export PDF</button>
      </div>
      {report && <div className="bg-white p-4 rounded shadow"><h3 className="mb-2">Results ({report.tasks.length})</h3><table className="min-w-full"><thead><tr><th>Name</th><th>Status</th><th>Value</th></tr></thead><tbody>{report.tasks.map(t=> <tr key={t.id}><td>{t.task_name}</td><td>{t.status}</td><td>{t.value}</td></tr>)}</tbody></table></div>}
    </div>
  )
}
