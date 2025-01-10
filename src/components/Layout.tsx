import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import TopBanner from './TopBanner';

export default function Layout() {
  return (
    <body className="bg-background dark:dark text-foreground-muted min-h-screen text-pretty font-normal leading-normal">
      <div className="mx-auto max-w-screen-xl">
        <header className="bg-background dark:bg-muted border-border border-b dark:rounded-b-lg">
          <TopBanner />
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-4">
                <img
                  src="https://i.postimg.cc/zbnD6HpG/android-chrome-512x512.png"
                  alt="User Icon"
                  className="size-12"
                />
                <h1>Torc Community Team</h1>
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
    </body>
  );
}
