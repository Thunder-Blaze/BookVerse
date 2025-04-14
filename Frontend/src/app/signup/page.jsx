'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Mail, Lock } from 'lucide-react';
import Header from '../components/header';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex-1 flex items-center justify-center pt-16">
        <div className="flex w-full max-w-7xl justify-center lg:justify-between items-center gap-8">
          <div className="flex-1 max-w-md w-full space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Create Account</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Join our community today
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Confirm Password
                  </label>
                  <div className="mt-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Sign Up
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{' '}
                  <Link href="/login" className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400">
                    Log in
                  </Link>
                </p>
              </div>

              <div>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <div className="m-auto w-fit mt-6 grid grid-cols-3 gap-3">
                  <div className="flex justify-center">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/016/716/447/non_2x/facebook-icon-free-png.png"
                      alt="Facebook"
                      width={40}
                      height={40}
                      className="cursor-pointer hover:opacity-80"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/016/716/467/non_2x/twitter-icon-free-png.png"
                      alt="Twitter"
                      width={40}
                      height={40}
                      className="cursor-pointer hover:opacity-80"
                    />
                  </div>
                  <div className="flex justify-center">
                    <img
                      src="/components/google.png"
                      alt="Google"
                      width={40}
                      height={40}
                      className="cursor-pointer hover:opacity-80"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          <div className="hidden lg:block flex-1">
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src="/components/clogo.png"
                alt="Signup Illustration"
                width={700}
                height={700}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
