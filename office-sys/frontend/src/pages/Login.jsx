import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      setUser(res.data);
    } catch(err) {
      alert('Invalid username or password');
    }
  };
  return (
    <div>
      <input placeholder="Username" onChange={e=>setUsername(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}