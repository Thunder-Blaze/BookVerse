'use client'

import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const Header = ({ role }) => {
    const { theme, setTheme } = useTheme()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <img
                        src="/icon.png"
                        alt="Website logo"
                        className="h-8 w-auto dark:invert"
                    />
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                    {isMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="w-64 lg:w-96 h-10 pl-10 pr-4 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-300 text-gray-900 dark:text-white"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300">
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
                    <button
                        onClick={() =>
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                        }
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                        {theme === 'dark' ? (
                            <Sun
                                className="w-5 h-5 text-gray-500"
                                suppressHydrationWarning
                            />
                        ) : (
                            <Moon
                                className="w-5 h-5 text-gray-500"
                                suppressHydrationWarning
                            />
                        )}
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                        <svg
                            className="w-6 h-6 text-gray-600 dark:text-gray-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                            />
                        </svg>
                    </button>
                    {role ? (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium cursor-pointer">
                            {role.toUpperCase().charAt(0)}
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <button className="px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                Login
                            </button>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                Sign Up
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-3 space-y-3">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search books..."
                                className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-300 text-gray-900 dark:text-white"
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <button
                                onClick={() =>
                                    setTheme(
                                        theme === 'dark' ? 'light' : 'dark'
                                    )
                                }
                                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                            >
                                {theme === 'dark' ? (
                                    <Sun className="w-5 h-5 text-yellow-400" />
                                ) : (
                                    <Moon className="w-5 h-5 text-gray-600" />
                                )}
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                                <svg
                                    className="w-6 h-6 text-gray-600 dark:text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                        </div>
                        {role ? (
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium cursor-pointer">
                                {role.toUpperCase().charAt(0)}
                            </div>
                        ) : (
                            <div className="flex flex-col space-y-2">
                                <button className="w-full px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                                    Login
                                </button>
                                <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                                    Sign Up
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Header
