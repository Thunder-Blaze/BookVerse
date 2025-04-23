'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/utils/api'
import Header from '../components/header'
import Sidebar from '../components/user-sidebar'
import WelcomeSection from '../components/WelcomeSection'

export default function Dashboard() {
    const router = useRouter()
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
        if (!token) {
            router.push('/login')
            return
        }

        const fetchData = async () => {
            try {
                const [booksData, userData] = await Promise.all([
                    api.getBooks(),
                    api.getUserProfile()
                ])
                setBooks(booksData)
                setUser(userData)
            } catch (error) {
                console.error('Error fetching data:', error)
                setError('Failed to load data. Please try again.')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [router])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{error}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Welcome, {user?.name || 'User'}
                    </h1>
                    <button
                        onClick={() => {
                            localStorage.removeItem('token')
                            sessionStorage.removeItem('token')
                            router.push('/login')
                        }}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-black"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={book.imageUrl || '/components/default-book.jpg'}
                                    alt={book.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                    {book.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-2">
                                    Author: {book.author}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Genre: {book.genre}
                                </p>
                                <Link
                                    href={`/book-detail/${book.id}`}
                                    className="inline-block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {user?.role === 'admin' && (
                    <div className="mt-8 text-center">
                        <Link
                            href="/admin"
                            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                        >
                            Go to Admin Dashboard
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
