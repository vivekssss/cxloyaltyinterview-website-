'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Schedule', href: '#agenda' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Delegate List', href: '#attendees' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-cx-blue shadow-lg py-2" : "bg-gradient-to-b from-cx-blue/90 to-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center text-white">
        <Link href="/" className="relative h-12 w-48 md:h-16 md:w-64">
           <Image
             src="https://cxloyaltymena.com/wp-content/uploads/2024/05/CX-Loyalty-MENA-2025-logo-02-1-1-1024x207.png"
             alt="CX Loyalty MENA 2025"
             fill
             className="object-contain"
             priority
           />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-cx-red transition-colors text-sm font-bold capitalize"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#register"
            className="bg-cx-red hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold uppercase text-sm transition-colors flex items-center gap-2"
          >
            Registration
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="xl:hidden bg-cx-blue border-t border-gray-700"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-cx-red block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#register"
              className="bg-cx-red text-center text-white px-6 py-3 rounded-md font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              Registration
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
