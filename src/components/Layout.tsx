import { Users } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4">
              <Users className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Our Community</h1>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}