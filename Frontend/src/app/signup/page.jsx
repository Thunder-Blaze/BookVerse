'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { api } from '@/utils/api'

export default function Signup() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student', // Default role
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            return
        }

        try {
            const userData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.role,
            }

            const response = await api.register(userData)
            
            if (response.id) {
                // Registration successful, redirect to login
                router.push('/login')
            } else {
                setError('Registration failed. Please try again.')
            }
        } catch (error) {
            console.error('Registration error:', error)
            setError('An error occurred during registration. Please try again.')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-6xl mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-8 border-black">
                <div className="flex flex-col lg:flex-row">
                    {/* Left side - Image */}
                    <div className="hidden lg:block lg:w-1/2 relative">
                        <div className="absolute inset-0">
                            <Image
                                src="/components/Img5.png"
                                alt="Library Background"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12">
                        <div className="flex justify-center mb-8">
                            <Image
                                src="/components/clogo.png"
                                alt="Library Logo"
                                width={150}
                                height={150}
                                className="rounded-full"
                            />
                        </div>

                        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                            Welcome To Library
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
                                Sign Up
                            </h2>

                            {error && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                    <span className="block sm:inline">{error}</span>
                                </div>
                            )}

                            <div className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border-2 border-black rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border-2 border-black rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        minLength={8}
                                        className="w-full px-4 py-2 border-2 border-black rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                        minLength={8}
                                        className="w-full px-4 py-2 border-2 border-black rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="role"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Role
                                    </label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border-2 border-black rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                    >
                                        <option value="student">Student</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                                >
                                    Sign Up
                                </button>
                            </div>

                            <div className="text-center space-y-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <i>Terms and Conditions</i> •{' '}
                                    <i>Privacy Policy</i>
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Already have an account?{' '}
                                    <Link
                                        href="/login"
                                        className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                                    >
                                        Log in
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
