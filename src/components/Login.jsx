import React, { useContext, useState } from 'react';
import { Lock, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { RoleContext } from '../contexts/RoleContext';
import About from './About';
import Services from './Services';
import Contact from './Contact';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { updateRole } = useContext(RoleContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9999/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('id', data.id);
        sessionStorage.setItem('username', form.username);

        updateRole(data.role);
        navigate(data.role === 'ARTIST' ? '/artist' : '/director');
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen relative flex items-center justify-center bg-cover bg-center pt-16"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        {/* Login Card */}
        <div className="relative z-10 w-full max-w-md mx-auto p-8 bg-white/90 rounded-lg shadow-2xl backdrop-blur-md">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Login to your account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Username Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="username"
                  type="text"
                  required
                  value={form.username}
                  onChange={handleChange}
                  className="w-full px-10 py-3 rounded-lg border border-gray-300 bg-white/60 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Username"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="password"
                  type="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  className="w-full px-10 py-3 rounded-lg border border-gray-300 bg-white/60 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Login
            </button>

            <div className="flex justify-between items-center mt-4">
              <Link
                to="/artist/signup"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Sign up as Artist
              </Link>
              <Link
                to="/director/signup"
                className="text-purple-600 hover:text-purple-700 font-semibold"
              >
                Sign up as Director
              </Link>
            </div>
          </form>
        </div>
      </section>

      {/* About, Services, and Contact Sections */}
      <About />
      <Services />
      <Contact />
    </>
  );
}
