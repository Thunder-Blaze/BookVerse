'use client';

import React from 'react';
import { Book, BookOpen, Users, AlertCircle, BookOpenCheck } from 'lucide-react';

const StatsGrid = () => {
  return (
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

      <div className="bg-red-100 dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow cursor-pointer">
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
  );
};

export default StatsGrid; 