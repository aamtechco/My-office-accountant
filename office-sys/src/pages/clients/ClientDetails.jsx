import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

export default function ClientDetails(){
  const { id } = useParams()
  const [client, setClient] = useState(null)
  useEffect(()=>{ if(id) fetch() },[id])
  async function fetch(){ const { data } = await supabase.from('clients').select('*').eq('id',id).single(); setClient(data) }
  if(!client) return <div>Loading...</div>
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{client.full_name}</h3>
      <p>Client #: {client.client_number}</p>
      <p>Mobile: {client.mobile_number}</p>
    </div>
  )
}
