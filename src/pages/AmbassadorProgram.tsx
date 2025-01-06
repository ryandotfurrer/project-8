import { Award, Globe, Users, Megaphone } from 'lucide-react';

export default function AmbassadorProgram() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Ambassador Program</h1>
          <p className="text-xl opacity-90">Represent our community and help it grow</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6">Program Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-3">
              <Award className="w-6 h-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Recognition</h3>
                <p className="text-gray-600">Exclusive ambassador badge and community recognition</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Globe className="w-6 h-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Network</h3>
                <p className="text-gray-600">Connect with industry leaders and fellow ambassadors</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-6">Ambassador Responsibilities</h2>
          <div className="space-y-6">
            <div className="flex gap-3">
              <Users className="w-6 h-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Community Building</h3>
                <p className="text-gray-600">Help grow and nurture our community through events and initiatives</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Megaphone className="w-6 h-6 text-indigo-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Advocacy</h3>
                <p className="text-gray-600">Represent our community at events and on social media</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Apply to be an Ambassador
          </button>
        </div>
      </div>
    </div>
  );
}