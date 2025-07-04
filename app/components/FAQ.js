"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission to your insurance company for potential reimbursement."
    },
    {
      id: 2,
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via Zoom. These are available on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM."
    },
    {
      id: 3,
      question: "What is your cancellation policy?",
      answer: "A 24-hour notice is required for all cancellations. Sessions cancelled with less than 24 hours notice will be charged the full session fee."
    },
    {
      id: 4,
      question: "How long are therapy sessions?",
      answer: "Individual therapy sessions are 50 minutes, while couples sessions are 75 minutes in duration."
    },
    {
      id: 5,
      question: "How do I know if therapy is right for me?",
      answer: "I offer a free 15-minute phone consultation to discuss your needs and determine if my approach would be beneficial for you. This gives us both an opportunity to ensure we're a good fit before committing to sessions."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title and Image */}
          <div>
            <div className="sticky top-24">
              <span className="text-teal-600 font-medium">Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-6">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-teal-600 mb-6"></div>
              <p className="text-gray-600 mb-8">
                Find answers to common questions about therapy services with Dr. Blake. If you don&apos;t see your question here, feel free to reach out directly.
              </p>
              
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Still have questions?</h3>
                <p className="text-gray-600 mb-4">
                  I&apos;m here to help you navigate your journey to emotional wellness. If you have any other questions, please don&apos;t hesitate to contact me.
                </p>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                >
                  Get in touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="hidden lg:block">
                <div className="flex items-center">
                  <span className="text-teal-600 font-medium mr-2">Session Fees:</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm font-medium">$200 Individual</span>
                  <span className="mx-2">•</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm font-medium">$240 Couples</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={faq.id} 
                  className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
                >
                  <button
                    suppressHydrationWarning={true}
                    className={`flex justify-between items-center w-full p-5 text-left ${
                      activeIndex === index ? "bg-teal-50 border-b border-teal-100" : "bg-white"
                    } hover:bg-teal-50/50 transition-colors`}
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="font-medium text-gray-800">{faq.question}</span>
                    <div className={`flex-shrink-0 ml-2 w-6 h-6 rounded-full ${activeIndex === index ? 'bg-teal-600' : 'bg-gray-200'} flex items-center justify-center transition-colors`}>
                      <svg
                        className={`w-4 h-4 text-white transform transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </button>
                  <div
                    id={`faq-answer-${faq.id}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="bg-white p-5 border-t border-gray-100">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 lg:hidden">
              <div className="flex items-center justify-center flex-wrap gap-3">
                <span className="text-teal-600 font-medium">Session Fees:</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm font-medium">$200 Individual</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-gray-700 text-sm font-medium">$240 Couples</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 