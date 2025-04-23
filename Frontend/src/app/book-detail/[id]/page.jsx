'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/utils/api'

export default function BookDetail({ params }) {
    const router = useRouter()
    const [book, setBook] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
        if (!token) {
            router.push('/login')
            return
        }

        const fetchBook = async () => {
            try {
                const bookData = await api.getBookById(params.id)
                setBook(bookData)
            } catch (error) {
                console.error('Error fetching book:', error)
                setError('Failed to load book details. Please try again.')
            } finally {
                setLoading(false)
            }
        }

        fetchBook()
    }, [params.id, router])

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

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">Book not found</span>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <Link
                        href="/dashboard"
                        className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                    >
                        Back to Dashboard
                    </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border-2 border-black">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 relative h-96 md:h-auto">
                            <Image
                                src={book.imageUrl || '/components/default-book.jpg'}
                                alt={book.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="md:w-2/3 p-6">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                {book.title}
                            </h1>
                            <div className="space-y-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                        Author
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {book.author}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                        Genre
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {book.genre}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                        Description
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {book.description}
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                        Availability
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {book.available ? 'Available' : 'Not Available'}
                                    </p>
                                </div>
                                {book.available && (
                                    <button
                                        onClick={async () => {
                                            try {
                                                await api.issueBook(book.id)
                                                router.push('/dashboard')
                                            } catch (error) {
                                                console.error('Error issuing book:', error)
                                                setError('Failed to issue book. Please try again.')
                                            }
                                        }}
                                        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                                    >
                                        Issue Book
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 