'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const books = [
  { id: 1, name: 'Book1', issuedTo: 'A', returnBy: '2025-04-20', fine: 'Rs.200' },
  { id: 2, name: 'Book2', issuedTo: 'B', returnBy: '2025-04-22', fine: 'Rs.200' },
  { id: 3, name: 'Book3', issuedTo: 'C', returnBy: '2025-04-25', fine: 'Rs.200' },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredBooks = books.filter(book =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Book Dashboard</h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-foreground"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Book Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Issued To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Return By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Fine</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredBooks.map((book) => (
                <tr key={book.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{book.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{book.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{book.issuedTo}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{book.returnBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{book.fine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 