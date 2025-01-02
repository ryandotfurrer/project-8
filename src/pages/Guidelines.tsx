import React from 'react';
import { Shield, Users, MessageSquare, Heart } from 'lucide-react';

export default function Guidelines() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Community Guidelines</h1>
        
        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold">Core Values</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Our community is built on trust, respect, and collaboration. We expect all members to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Be respectful and inclusive of all members</li>
              <li>Share knowledge and help others grow</li>
              <li>Maintain professional conduct in all interactions</li>
              <li>Contribute positively to discussions</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold">Member Expectations</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-2">
                <MessageSquare className="w-5 h-5 mt-1 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Communication</h3>
                  <p>Use clear, professional language. Avoid harassment, hate speech, or discriminatory remarks.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 mt-1 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Support</h3>
                  <p>Help fellow members, share experiences, and provide constructive feedback.</p>
                </div>
              </li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Enforcement</h2>
            <p className="text-gray-600">
              Violations of these guidelines may result in warnings or removal from the community.
              We maintain zero tolerance for harassment or discriminatory behavior.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}