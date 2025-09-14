import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/login-logo.png'   // اللوجو
import bgImage from '../assets/background-login-logo.png'  // الخلفية الجديدة

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function signIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return alert(error.message)
    navigate('/')
  }

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 space-y-6">
        
        {/* اللوجو */}
        <div className="flex justify-center">
          <img src={logo} alt="App Logo" className="h-24 w-auto" />
        </div>

        <h2 className="text-2xl font-bold text-center">Sign in</h2>

        <div className="space-y-3">
          <div>
            <label className="block text-sm">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={signIn}
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}
