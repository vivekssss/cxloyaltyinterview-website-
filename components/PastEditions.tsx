'use client';

import { Section } from './Section';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PastEditions() {
  return (
    <Section className="bg-gray-50 py-16 md:py-24 relative overflow-hidden" id="past-editions">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         {/* Base Gradient */}
         <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 opacity-90"></div>
         
         {/* Architectural Sweeping Lines Pattern */}
         <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Left side sweeping curves */}
            <path d="M0 100 C 20 50 50 20 100 0" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cx-blue" />
            <path d="M-10 100 C 15 45 45 15 100 -10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cx-blue" />
            <path d="M-20 100 C 10 40 40 10 100 -20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cx-blue" />
            
            {/* Right side counter curves */}
            <path d="M100 100 C 80 50 50 20 0 0" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cx-blue" />
            <path d="M110 100 C 85 45 55 15 0 -10" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cx-blue" />
            <path d="M120 100 C 90 40 60 10 0 -20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cx-blue" />
         </svg>

         {/* Concentric Circles / Spiral Effect */}
         <svg className="absolute -left-[20%] top-[10%] w-[80%] h-[120%] opacity-[0.05]" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-cx-blue" />
             <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-cx-blue" />
             <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-cx-blue" />
             <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-cx-blue" />
             <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-cx-blue" />
             <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cx-blue" />
             <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-cx-blue" />
         </svg>

         <svg className="absolute -right-[20%] -bottom-[20%] w-[80%] h-[120%] opacity-[0.05]" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-cx-red" />
             <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.3" fill="none" className="text-cx-red" />
             <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-cx-red" />
             <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.4" fill="none" className="text-cx-red" />
             <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-cx-red" />
             <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-cx-red" />
             <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.2" fill="none" className="text-cx-red" />
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[2px] w-12 md:w-24 bg-cx-blue"></div>
            <h2 className="text-2xl md:text-4xl font-bold text-cx-blue text-center uppercase tracking-wide">
                Experience the Past editions
            </h2>
            <div className="h-[2px] w-12 md:w-24 bg-cx-blue"></div>
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-12">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white bg-black"
            >
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/i8giYRx7dfM?rel=0" 
                    title="CX & Loyalty Summit MENA Highlights" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
            </motion.div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a 
                href="#"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-cx-red hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold uppercase text-lg transition-all inline-flex items-center gap-3 min-w-[200px] justify-center shadow-lg"
            >
                <ArrowRight className="w-5 h-5" />
                2023 Edition
            </motion.a>
            
            <motion.a 
                href="#"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-cx-blue hover:bg-blue-900 text-white px-8 py-3 rounded-md font-bold uppercase text-lg transition-all inline-flex items-center gap-3 min-w-[200px] justify-center shadow-lg"
            >
                <ArrowRight className="w-5 h-5" />
                2022 Edition
            </motion.a>
        </div>
      </div>
    </Section>
  );
}
