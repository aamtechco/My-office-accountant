import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Users() {
  const [list, setList] = useState([])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [roles, setRoles] = useState([])
  const [role, setRole] = useState('')

  useEffect(() => {
    fetchUsers()
    fetchRoles()
  }, [])

  async function fetchUsers() {
    const { data } = await supabase.from('users_meta').select('*')
    setList(data || [])
  }

  async function fetchRoles() {
    const { data } = await supabase.from('roles').select('*')
    setRoles(data || [])
  }

  async function add() {
    if (!email) return alert('Please enter an email')
    const pw = prompt('Temporary password')
    if (!pw) return
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password: pw,
      email_confirm: true,
    })
    if (error) return alert(error.message)

    await supabase.from('users_meta').insert([
      {
        supabase_user_id: data.user.id,
        full_name: name,
        role_id: role,
      },
    ])
    setEmail('')
    setName('')
    setRole('')
    fetchUsers()
  }

  async function deactivate(id) {
    if (!confirm('Deactivate?')) return
    await supabase.from('users_meta').update({ is_active: false }).eq('id', id)
    fetchUsers()
  }

  return (
    <div>
      <div className="max-w-lg mb-4 space-y-2">
        <div>
          <label className="block text-sm">Email</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm">Full name</label>
          <input
            className="w-full border rounded px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm">Role</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">--</option>
            {roles.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={add}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Add User
          </button>
        </div>
      </div>

      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Email (id)</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Role id</th>
            <th className="border px-2 py-1">Active</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((u) => (
            <tr key={u.id}>
              <td className="border px-2 py-1">{u.supabase_user_id}</td>
              <td className="border px-2 py-1">{u.full_name}</td>
              <td className="border px-2 py-1">{u.role_id}</td>
              <td className="border px-2 py-1">
                {u.is_active ? 'Yes' : 'No'}
              </td>
              <td className="border px-2 py-1">
                <button
                  onClick={() => deactivate(u.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded"
                >
                  Deactivate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
