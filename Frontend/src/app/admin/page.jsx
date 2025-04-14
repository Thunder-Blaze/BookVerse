'use client';

import React from 'react';
import Header from '../components/header';
import Sidebar from '../components/admin-sidebar';
import WelcomeSection from '../components/WelcomeSection';
import StatsGrid from '../components/StatsGrid';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header role="admin"/>
      
      {/* Main Content */}
      <div className="pt-16 flex">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            <WelcomeSection name="Admin" buttonText="Add New Book" buttonAction="/admin/add-book" />
            <StatsGrid />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
