'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add your login logic here
        console.log(formData)
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
                                Login Page
                            </h2>

                            <div className="space-y-4">
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

                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="w-4 h-4 border-2 border-black rounded shadow-[0px_0px_0_0_rgba(0,0,0,1)] focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="rememberMe"
                                        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                                >
                                    Log in
                                </button>

                                <button
                                    type="button"
                                    className="w-full py-3 px-4 bg-white hover:bg-gray-100 text-gray-700 font-medium rounded-lg border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none flex items-center justify-center gap-2"
                                >
                                    <Image
                                        src="/components/google.png"
                                        alt="Google"
                                        width={20}
                                        height={20}
                                    />
                                    Continue with Google
                                </button>
                            </div>

                            <div className="text-center space-y-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <i>Terms and Conditions</i> •{' '}
                                    <i>Privacy Policy</i>
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    New user?{' '}
                                    <Link
                                        href="/signup"
                                        className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
                                    >
                                        Sign up
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
