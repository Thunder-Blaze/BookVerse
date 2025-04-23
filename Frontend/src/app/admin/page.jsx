'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/utils/api'
import Header from '../components/header'
import Sidebar from '../components/admin-sidebar'
import WelcomeSection from '../components/WelcomeSection'
import StatsGrid from '../components/StatsGrid'

const AdminDashboard = () => {
    const router = useRouter()
    const [books, setBooks] = useState([])
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [activeTab, setActiveTab] = useState('books')
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        genre: '',
        description: '',
        imageUrl: '',
    })
    const [newStudent, setNewStudent] = useState({
        name: '',
        email: '',
        department: '',
    })

    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token')
        if (!token) {
            router.push('/login')
            return
        }

        const fetchData = async () => {
            try {
                const [booksData, studentsData] = await Promise.all([
                    api.getBooks(),
                    api.getStudents()
                ])
                setBooks(booksData)
                setStudents(studentsData)
            } catch (error) {
                console.error('Error fetching data:', error)
                setError('Failed to load data. Please try again.')
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [router])

    const handleAddBook = async (e) => {
        e.preventDefault()
        try {
            const response = await api.addBook(newBook)
            setBooks([...books, response])
            setNewBook({
                title: '',
                author: '',
                genre: '',
                description: '',
                imageUrl: '',
            })
        } catch (error) {
            console.error('Error adding book:', error)
            setError('Failed to add book. Please try again.')
        }
    }

    const handleAddStudent = async (e) => {
        e.preventDefault()
        try {
            const response = await api.addStudent(newStudent)
            setStudents([...students, response])
            setNewStudent({
                name: '',
                email: '',
                department: '',
            })
        } catch (error) {
            console.error('Error adding student:', error)
            setError('Failed to add student. Please try again.')
        }
    }

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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Header role="admin" />

            {/* Main Content */}
            <div className="pt-16 flex">
                <Sidebar />

                {/* Main Content Area */}
                <main className="flex-1 ml-64 p-8">
                    <div className="max-w-7xl mx-auto">
                        <WelcomeSection
                            name="Admin"
                            buttonText="Add New Book"
                            buttonAction="/admin/add-book"
                        />
                        <StatsGrid />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AdminDashboard
