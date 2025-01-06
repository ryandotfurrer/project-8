import { Users, Target, BookOpen, Award } from 'lucide-react';

export default function MentorshipProgram() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Mentorship Program</h1>
          <p className="text-xl opacity-90">Connect, learn, and grow with experienced industry professionals</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="w-8 h-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-3">For Mentees</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Personalized guidance and support</li>
              <li>• Career development advice</li>
              <li>• Technical skill enhancement</li>
              <li>• Network expansion</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Target className="w-8 h-8 text-indigo-600 mb-4" />
            <h2 className="text-xl font-semibold mb-3">For Mentors</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Share your expertise</li>
              <li>• Develop leadership skills</li>
              <li>• Give back to the community</li>
              <li>• Build meaningful connections</li>
            </ul>
          </div>
        </div>

        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6">Program Structure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <BookOpen className="w-6 h-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">3-Month Program</h3>
                <p className="text-gray-600">Structured learning path with regular check-ins and milestones</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Award className="w-6 h-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Certification</h3>
                <p className="text-gray-600">Receive recognition upon program completion</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}