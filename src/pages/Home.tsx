import GetInvolved from '../components/GetInvolved';
import MainCarousel from '../components/carousel/MainCarousel';
import QuickLinks from '../components/QuickLinks';
import TheTeam from '../components/TheTeam';
import WeeklyCalendar from '../components/WeeklyCalendar';
import '../index.css';

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      {/* RSS Ticker */}
      <div className="relative h-14 w-full overflow-hidden">
        <iframe
          className="absolute left-0 top-0 h-full w-full border-none"
          src="https://rss.app/embed/v1/ticker/yVNdgL3YxmVflzqi"
          title="RSS Ticker"
        />
      </div>
      <section className="my-12 space-y-4 md:my-16 lg:my-24">
        <header className="text-center">
          <h2 className="mb-4 text-4xl">Welcome Home!</h2>
          <div className="mb-4">
            <MainCarousel />
          </div>
        </header>
        <section className="mx-auto max-w-xl space-y-4">
          <p>
            Hey friends! Think of the{' '}
            <a href="https://torc.dev" target="_blank" rel="noopener noreferrer">
              Torc community
            </a>{' '}
            as your "home base" for your career journey. We know the path can be tough and sometimes lonely, but that’s
            why we’re here, to have your back in the hard times and cheer you on in the good ones.💛
          </p>

          <p className="mx-auto mb-2">
            That’s why we say <span className="text-foreground font-bold">Welcome Home</span>. If you ever need support,
            don’t hesitate to reach out. We’re so glad you’re here!
          </p>
          <p className="mx-auto"> Best, Taylor</p>
        </section>
      </section>
      <section className="outline-border bg-muted container mx-auto my-24 max-w-screen-md rounded-lg p-4 outline md:p-16">
        <div className="mb-8 text-center">
          <h2>Torc Community Team</h2>
          <p>Meet your new friends</p>
        </div>
        <TheTeam />
      </section>

      <section className="mb-12">
        <div className="mb-8">
          <h2>Upcoming Events</h2>
          <p className="">View our calendar below to see all upcoming community events and activities.</p>
        </div>
        <WeeklyCalendar />
      </section>
      <QuickLinks />
      <GetInvolved />

      <section className="my-12 rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Contact Information</h2>
        <p className="">
          Need help? Reach out to our community team on{' '}
          <a href="https://discord.gg/ZA8Gj95dbj" className="">
            Discord
          </a>
        </p>
      </section>
    </div>
  );
}
