'use client';

import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#001D4C] text-white pt-16 pb-8 border-t border-[#002866]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Logo Box */}
          <div className="flex flex-col items-start">
             <div className="bg-[#003380] rounded-xl p-8 w-64 h-64 flex items-center justify-center shadow-lg">
                {/* Using the header logo but containing it nicely */}
                <div className="relative w-full h-full">
                     <Image
                        src="https://cxloyaltymena.com/wp-content/uploads/2024/05/CX-Loyalty-MENA-2025-logo-02-1-1-1024x207.png"
                        alt="CX Loyalty MENA 2025"
                        fill
                        className="object-contain"
                     />
                </div>
             </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wider text-gray-300">Useful Links</h3>
            <div className="h-px w-10 bg-gray-600 mb-6"></div>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#agenda" className="hover:text-white transition-colors">Schedule</Link></li>
              <li><Link href="#speakers" className="hover:text-white transition-colors">Speakers</Link></li>
              <li><Link href="#attendees" className="hover:text-white transition-colors">Delegate List</Link></li>
              <li><Link href="#sponsors" className="hover:text-white transition-colors">Sponsors</Link></li>
              <li><Link href="#awards" className="hover:text-white transition-colors">Awards</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Media ▼</Link></li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wider text-gray-300">Address</h3>
            <div className="h-px w-10 bg-gray-600 mb-6"></div>
            <ul className="space-y-6 text-sm text-gray-300">
              <li className="flex items-start gap-4">
                <MapPin className="text-white shrink-0 mt-1 w-5 h-5" />
                <span className="leading-relaxed">1702 & 1706 , Mazaya Business Avenue BB2, Al Thanya Fifth, Jumeirah Lake Towers, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-white shrink-0 w-5 h-5" />
                <span>+971 4 243 4677/88</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-white shrink-0 w-5 h-5" />
                <span>info@verve-management.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Initiative By */}
          <div className="flex flex-col items-start">
             <h3 className="text-sm font-bold uppercase tracking-widest mb-4">AN INITIATIVE BY</h3>
             <div className="h-px w-full bg-white mb-6"></div>
             
             <div className="mb-8 relative w-48 h-20">
                <Image 
                    src="https://cxloyaltymena.com/wp-content/uploads/2024/05/verveManagement.png"
                    alt="Verve Management"
                    fill
                    className="object-contain object-left"
                />
             </div>

             <div className="flex gap-3">
              <a href="#" className="bg-[#0056b3] p-2 rounded-full hover:bg-white hover:text-[#0056b3] transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-[#0056b3] p-2 rounded-full hover:bg-white hover:text-[#0056b3] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-[#0056b3] p-2 rounded-full hover:bg-white hover:text-[#0056b3] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="bg-[#0056b3] p-2 rounded-full hover:bg-white hover:text-[#0056b3] transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#002866] pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">Copyrights &copy; 2025</p>
          <p>All Rights Reserved | CX & LOYALTY MENA SUMMIT 2025.</p>
        </div>
      </div>
    </footer>
  );
}
