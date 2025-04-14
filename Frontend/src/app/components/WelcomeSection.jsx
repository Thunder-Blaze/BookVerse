'use client'

import Link from 'next/link'
import React from 'react'

const WelcomeSection = ({ name, buttonText, buttonAction }) => {
    return (
        <div className="flex justify-between items-center mb-8">
            <div>
                <h1
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    suppressHydrationWarning
                >
                    Welcome back, {name}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Here's what's happening with your library today
                </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center space-x-2 cursor-pointer">
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
                <Link href={buttonAction}>{buttonText}</Link>
            </button>
        </div>
    )
}

export default WelcomeSection
