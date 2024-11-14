import React, { useContext, useState } from 'react';
import { Lock,User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { RoleContext } from '../contexts/RoleContext';


export default function Login() {
    const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const { updateRole } = useContext(RoleContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9999/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        // Store the token, role, and username in session storage
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("role", data.role);
        sessionStorage.setItem("id", data.id);
        sessionStorage.setItem("username", form.username);

        // Redirect based on role
        updateRole(data.role);
        navigate(data.role === 'ARTIST' ? '/artist' : '/director');
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-white">
            Login to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            {/* Email Field with Icon inside */}
            <div className="relative">
              <input
                name="username"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={handleChange}
              />
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            {/* Password Field with Icon inside */}
            <div className="relative">
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-10 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>

          <div className="flex justify-between items-center text-center">
            <Link to="/artist/signup" className="text-indigo-400 hover:text-indigo-500">
              Sign up as Artist
            </Link>
            <Link to="/director/signup" className="text-indigo-400 hover:text-indigo-500">
              Sign up as Director
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}