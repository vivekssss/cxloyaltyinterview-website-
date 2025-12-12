'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cx-blue text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>CX</span><span className="text-cx-red">Loyalty</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The 4th Edition CX & Loyalty Summit & Awards MENA 2025 brings together the biggest names in customer experience and provides them with leading solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-cx-red transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-cx-red transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-cx-red transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded hover:bg-cx-red transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase border-b-2 border-cx-red inline-block pb-1">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cx-red transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cx-red transition-colors">About Event</a></li>
              <li><a href="#speakers" className="hover:text-cx-red transition-colors">Speakers</a></li>
              <li><a href="#agenda" className="hover:text-cx-red transition-colors">Agenda</a></li>
              <li><a href="#sponsors" className="hover:text-cx-red transition-colors">Sponsors</a></li>
              <li><a href="#contact" className="hover:text-cx-red transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase border-b-2 border-cx-red inline-block pb-1">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-cx-red shrink-0 mt-1" size={18} />
                <span>123 Business Avenue, Tech District, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-cx-red shrink-0" size={18} />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-cx-red shrink-0" size={18} />
                <span>info@cxloyaltymena.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase border-b-2 border-cx-red inline-block pb-1">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for latest updates.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cx-red"
              />
              <button className="bg-cx-red text-white px-4 py-2 rounded font-bold uppercase hover:bg-red-700 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 CX & Loyalty Summit MENA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
