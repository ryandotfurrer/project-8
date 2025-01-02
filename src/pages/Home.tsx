//import React from 'react';
import WeeklyCalendar from '../components/WeeklyCalendar';
import QuickLinks from '../components/QuickLinks';
import GetInvolved from '../components/GetInvolved';
import MainCarousel from '../components/carousel/MainCarousel';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
<<<<<<< HEAD
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome Home!</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
=======
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Welcome to Our Community!</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
>>>>>>> 9d149ec (test)
          We're excited to have you as part of our growing community. Here you'll find all the
          resources and information you need to stay connected.
        </p>
      </div>

      <div className="mb-16">
        <MainCarousel />
      </div>

      <section className="mb-12">
<<<<<<< HEAD
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
        <p className="text-gray-600 mb-8">
=======
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">Upcoming Events</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
>>>>>>> 9d149ec (test)
          View our calendar below to see all upcoming community events and activities.
        </p>
        <WeeklyCalendar />
      </section>

      <QuickLinks />
      <GetInvolved />

<<<<<<< HEAD
      <section className="bg-indigo-50 rounded-lg p-8 my-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h2>
        <p className="text-gray-600">
          Need help? Reach out to our community team on{' '}
          <a
            href="https://discord.gg/ZA8Gj95dbj"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
=======
      <section className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-8 my-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">Contact Information</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Need help? Reach out to our community team on{' '}
          <a
            href="https://discord.gg/ZA8Gj95dbj"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium"
>>>>>>> 9d149ec (test)
          >
            Discord
          </a>
        </p>
      </section>
    </div>
  );
}