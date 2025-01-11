import { Link, Outlet } from 'react-router-dom';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';
import TopBanner from './TopBanner';

export default function Layout() {
  return (
    <body className="bg-background dark:dark text-muted-foreground min-h-screen text-pretty font-normal leading-normal">
      <div className="container mx-auto max-w-screen-xl">
        <header className="bg-background border-border border-b px-4 pb-8">
          <TopBanner />
          <div className="mx-auto mt-8">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="https://i.postimg.cc/zbnD6HpG/android-chrome-512x512.png"
                  alt="User Icon"
                  className="aspect-square size-12"
                />
                <h1 className="text-xl">Torc Community Team</h1>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="text-foreground-muted flex-1 text-pretty px-4 font-normal leading-normal">
          <Outlet />
        </main>
        <Footer />
      </div>
    </body>
  );
}
