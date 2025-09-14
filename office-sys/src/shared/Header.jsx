import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Header(){
  const [time, setTime] = useState(new Date())
  const [userName, setUserName] = useState('User')
  useEffect(()=>{
    const t = setInterval(()=> setTime(new Date()), 1000)
    supabase.auth.getUser().then(r=>{
      if(r.data?.user) setUserName(r.data.user.email ?? 'User')
    })
    return ()=> clearInterval(t)
  },[])
  async function logout(){ await supabase.auth.signOut(); window.location.href='/login' }
  return (
    <header className="flex items-center justify-between bg-white p-4 border-b">
      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600 font-mono">{time.toLocaleTimeString()}</div>
        <div className="text-sm">Welcome, <span className="font-medium">{userName}</span></div>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 bg-gray-100 rounded">EN/AR</button>
        <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button>
      </div>
    </header>
  )
}
