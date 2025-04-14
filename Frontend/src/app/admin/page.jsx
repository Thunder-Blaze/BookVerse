'use client';

import React from 'react';
import { Book, BookOpen, Users, AlertCircle, BookOpenCheck, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const AdminDashboard = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src="/icon.png" alt="Website logo" className="h-8 w-auto" />
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search books..." 
                className="w-96 h-10 pl-10 pr-4 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-300 text-gray-900 dark:text-white"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
              <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-medium cursor-pointer">
              A
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
          <div className="p-4">
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Add New Book</span>
              </a>
              <a href="#" className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Reports</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, Admin</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">Here's what's happening with your library today</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center space-x-2 cursor-pointer">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Add New Book</span>
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-100 dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Books</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">2,000</p>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                    <Book className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium cursor-pointer">View Details →</button>
                </div>
              </div>

              <div className="bg-green-100 dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Lended Books</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">500</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium cursor-pointer">View Details →</button>
                </div>
              </div>

              <div className="bg-purple-100 dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Available Books</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">800</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                    <BookOpenCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium cursor-pointer">View Details →</button>
                </div>
              </div>

              <div className="bg-yellow-100 dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Users</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">500</p>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                    <Users className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="text-sm text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-medium cursor-pointer">View Details →</button>
                </div>
              </div>

              <div className="bg-red-100 dark:bg-red-500/10 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Overdue Books</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">300</p>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium cursor-pointer">View Details →</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
