import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import TopBanner from './TopBanner';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <TopBanner /> {/* Add the TopBanner component here */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4">
            <img src="https://i.postimg.cc/zbnD6HpG/android-chrome-512x512.png"alt="User Icon" className="w-12 h-12" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Torc Community Team</h1>
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