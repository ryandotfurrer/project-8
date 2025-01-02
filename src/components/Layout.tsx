import React from 'react';
import { Users } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/" className="flex items-center space-x-4">
            <Users className="w-10 h-10 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Our Community</h1>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}