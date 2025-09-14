import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Dashboard() {
  const [clients, setClients] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/clients')
      .then(res=>setClients(res.data))
      .catch(err=>console.log(err));
  },[]);
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Clients List:</h2>
      <ul>{clients.map(c=><li key={c.id}>{c.name}</li>)}</ul>
    </div>
  );
}