import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12 relative">
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-teal-600"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Quote Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 bg-white p-4 rounded-full shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <p className="text-xl md:text-2xl italic text-gray-700 max-w-3xl mx-auto">
            &quot;Come to me, all who labor and are heavy laden, and I will give you rest.&quot;
          </p>
          <p className="mt-2 text-gray-500">— Matthew 11:28</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Office Location */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Our Office</h3>
            <address className="not-italic flex-grow">
              <p className="mb-2">1287 Maplewood Drive</p>
              <p className="mb-4">Los Angeles, CA 90026</p>
              <Link 
                href="https://maps.google.com/?q=1287+Maplewood+Drive,+Los+Angeles,+CA+90026" 
                target="_blank" 
                className="text-teal-600 hover:text-teal-700 hover:underline inline-flex items-center"
              >
                View on Google Maps
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </address>
          </div>

          {/* Office Hours */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Hours</h3>
            <div className="space-y-2 flex-grow">
              <div className="flex justify-between">
                <span className="font-medium">Tuesday & Thursday:</span>
                <span>10 AM–6 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Mon, Wed & Fri:</span>
                <span>1 PM–5 PM</span>
              </div>
              <p className="mt-4 text-sm text-teal-600">
                <span className="inline-block mr-2">•</span>In-person & Virtual appointments available
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Contact</h3>
            <div className="flex-grow">
              <p className="mb-3">
                <span className="font-medium">Phone:</span> (323) 555-0192
              </p>
              <p className="mb-6">
                <span className="font-medium">Email:</span> 
                <a href="mailto:serena@blakepsychology.com" className="text-teal-600 hover:underline ml-1">
                  serena@blakepsychology.com
                </a>
              </p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook" className="bg-teal-600 text-white hover:bg-teal-700 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="bg-teal-600 text-white hover:bg-teal-700 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="bg-teal-600 text-white hover:bg-teal-700 p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">Quick Links</h3>
            <ul className="space-y-3 flex-grow">
              <li>
                <Link href="/#about" className="text-gray-600 hover:text-teal-600 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-600 hover:text-teal-600 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-600 hover:text-teal-600 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 hover:text-teal-600 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="mt-4 inline-block bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md transition-colors text-sm">
                  Book a Free Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold text-teal-700">Dr. Serena Blake</span>
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {currentYear} Dr. Serena Blake. All rights reserved.</p>
            <p className="mt-2">
              <Link href="/privacy-policy" className="text-teal-600 hover:underline">Privacy Policy</Link>
              {" & "}
              <Link href="/terms-of-service" className="text-teal-600 hover:underline">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 