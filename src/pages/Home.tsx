import React from 'react';
import WeeklyCalendar from '../components/WeeklyCalendar';
import QuickLinks from '../components/QuickLinks';
import GetInvolved from '../components/GetInvolved';
import MainCarousel from '../components/carousel/MainCarousel';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Our Community!</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're excited to have you as part of our growing community. Here you'll find all the
          resources and information you need to stay connected.
        </p>
      </div>

      <div className="mb-16">
        <MainCarousel />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
        <p className="text-gray-600 mb-8">
          View our calendar below to see all upcoming community events and activities.
        </p>
        <WeeklyCalendar />
      </section>

      <QuickLinks />
      <GetInvolved />

      <section className="bg-indigo-50 rounded-lg p-8 my-12">
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