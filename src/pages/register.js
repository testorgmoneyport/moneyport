// pages/register.js
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth', { ...formData });
      alert(response.data.message);
    } catch (error) {
      alert('Kayıt sırasında bir hata oluştu: ' + error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Kayıt Sayfası</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Kullanıcı Adı"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Şifre"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}
