import React, { useState } from 'react';
import { User, Lock } from 'lucide-react'; // Import icons from Lucide
import { Link, useNavigate } from 'react-router-dom';
import About from "../About";
import Services from "../Services";
import Contact from "../Contact";

export default function DirectorSignup() {
    const [form, setForm] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:9999/api/auth/register/director', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const data = await response.json();
            if (response.ok) {
                navigate('/director/create-profile', { state: { directorId: data.id } });
            } else {
                console.log("Failed to register director");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            {/* Home Section */}
            <section id="home">
                <div className="min-h-screen bg-gray-900 flex items-start justify-center p-6 pt-16">
                    <div className="w-full max-w-6xl flex rounded-2xl shadow-2xl overflow-hidden">
                        {/* Form Section */}
                        <div className="w-full lg:w-1/2 bg-gray-800 p-8 lg:p-12">
                            <div className="max-w-md mx-auto">
                                <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Director Sign Up</h1>
                                <p className="text-gray-400 mb-8">
                                    Already have an account?{' '}
                                    <Link to="/login" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                                        Log in
                                    </Link>
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Username Field */}
                                    <div className="relative">
                                        <label
                                            htmlFor="username"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Username
                                        </label>
                                        <div className="flex items-center">
                                            <User className="absolute left-3 text-gray-400" size={20} />
                                            <input
                                                name="username"
                                                type="text"
                                                required
                                                className="w-full px-10 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                                                placeholder="Enter your username"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    {/* Password Field */}
                                    <div className="relative pb-2">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            Password
                                        </label>
                                        <div className="flex items-center">
                                            <Lock className="absolute left-3 text-gray-400" size={20} />
                                            <input
                                                name="password"
                                                type="password"
                                                required
                                                className="w-full px-10 py-3 bg-gray-700 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                                                placeholder="Create a password"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 px-4 rounded-full transition-colors duration-200"
                                    >
                                        Sign Up
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Artistic Section */}
                        <div className="hidden lg:block lg:w-1/2 relative bg-gray-900">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20" />
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <img
                                    src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Director at work"
                                    className="object-cover w-full rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About, Services, and Contact Sections */}
            <About />
            <Services />
            <Contact />
        </>
    );
}
