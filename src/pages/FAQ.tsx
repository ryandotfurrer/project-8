import React from 'react';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How do I join the mentorship program?",
      answer: "You can apply through the Mentorship Program page. We match mentees with mentors based on experience, goals, and availability."
    },
    {
      question: "What is the Ambassador Program?",
      answer: "The Ambassador Program allows active community members to represent our community, organize events, and help grow our network."
    },
    {
      question: "How often are community events held?",
      answer: "We host weekly technical discussions, monthly workshops, and quarterly networking events."
    },
    {
      question: "Can I propose a new community initiative?",
      answer: "Yes! We encourage members to propose new initiatives. Contact the community team with your ideas."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-8 h-8 text-indigo-600" />
          <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}