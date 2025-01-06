import WeeklyCalendar from '../components/WeeklyCalendar';
import QuickLinks from '../components/QuickLinks';
import GetInvolved from '../components/GetInvolved';
import MainCarousel from '../components/carousel/MainCarousel';
import TheTeam from '../components/TheTeam';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome Home!</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hey friends, we want to be your "home base" throughout your career journey. We understand that your professional path can sometimes feel isolating or challenging, but that's why we're here. Our community supports you through the difficult moments and celebrates your successes.
        </p>
          <div className="my-16">
            <MainCarousel />
          </div>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          That's why we say <b>"Welcome Home."</b>  We're creating a space where you can always turn for support. Please don't hesitate to reach out if you need anything. We're glad you're here!
        </p>
      </div>
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Torc Community Team</h2>
        <p className="text-gray-600 mb-8">
          Meet your new friends
        </p>
        <TheTeam />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
        <p className="text-gray-600 mb-8">
          View our calendar below to see all upcoming community events and activities.
        </p>
        <WeeklyCalendar />
      </section>

      <QuickLinks />
      <GetInvolved />

      <section className="bg-white rounded-lg shadow-lg p-8 my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
        <p className="text-gray-600">
          Need help? Reach out to our community team on{' '}
          <a
            href="https://discord.gg/ZA8Gj95dbj"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Discord
          </a>
        </p>
      </section>
    </div>
  );
}