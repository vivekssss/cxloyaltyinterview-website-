'use client';

import { Section } from './Section';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Speakers() {
  const speakers = [
    { 
        name: "HIMANSHU MALHOTRA", 
        title: "Advisor – Chairman’s Office", 
        company: "Department Of Municipalities and Transport", 
        image: "https://cxloyaltymena.com/wp-content/uploads/2024/05/s1.jpg" 
    },
    { 
        name: "JS ANAND", 
        title: "Founder & CEO", 
        company: "Leva Hotels", 
        image: "https://cxloyaltymena.com/wp-content/uploads/2024/05/s2.png" 
    },
    { 
        name: "SAKEB RASHID", 
        title: "Loyalty & Retention Head", 
        company: "Starbucks – Alshaya", 
        image: "https://cxloyaltymena.com/wp-content/uploads/2024/05/s30.jpg" 
    },
    { 
        name: "SAIF ABDULLA AL HASSANI", 
        title: "Service Development and User Experience Section Head", 
        company: "Emirates Health Services", 
        image: "https://cxloyaltymena.com/wp-content/uploads/2024/05/s31.jpg" 
    },
    { 
        name: "AHMED KHBEER", 
        title: "Managing Partner & Group CEO", 
        company: "Tafaseel Bpo", 
        image: "https://cxloyaltymena.com/wp-content/uploads/2024/05/s5.jpeg" 
    },
    { 
        name: "ALBERT FERNANDO", 
        title: "Chief Executive Officer", 
        company: "Travelwings Middle East Fz Llc", 
        image: "https://cxloyaltymena.com/wp-content/uploads/2024/05/s6.jpg" 
    },
    { 
        name: "HAZEM EL ZAYAT", 
        title: "Chief Experience Officer – MENA", 
        company: "Memac Ogilvy", 
        image: "https://cxloyaltymena.com/wp-content/uploads/2024/05/s7.jpg" 
    },
    { 
        name: "ABED BIBI", 
        title: "Chief Marketing Officer", 
        company: "Nakheel", 
        image: "https://cxloyaltymena.com/wp-content/uploads/2024/05/s8.jpg" 
    },
  ];

  return (
    <Section className="bg-gray-50" id="speakers">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-16"
        >
            <div className="hidden md:block h-0.5 w-32 bg-cx-blue/30"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-cx-blue text-center">Our Series Speakers</h2>
            <div className="hidden md:block h-0.5 w-32 bg-cx-blue/30"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative aspect-[4/4] overflow-hidden p-4 pb-0">
                 {/* LinkedIn Icon */}
                 <div className="absolute top-4 right-4 z-10">
                    <div className="w-8 h-8 bg-cx-red flex items-center justify-center rounded-sm hover:bg-red-700 transition-colors cursor-pointer shadow-md">
                        <Linkedin className="text-white w-5 h-5" />
                    </div>
                 </div>
                 
                 <div className="relative w-full h-full rounded-t-lg overflow-hidden">
                    <Image 
                        src={speaker.image} 
                        alt={speaker.name} 
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                 </div>
              </div>
              
              <div className="p-5 text-center bg-cx-blue text-white flex-grow flex flex-col justify-center min-h-[160px] relative mt-0">
                <h3 className="font-bold text-lg uppercase mb-2 leading-tight">{speaker.name}</h3>
                <div className="h-0.5 w-10 bg-cx-red mx-auto mb-3 opacity-80"></div>
                <p className="text-xs text-gray-300 font-medium mb-1 uppercase tracking-wide">{speaker.title}</p>
                <p className="text-xs text-cx-red font-bold uppercase mt-auto pt-2">{speaker.company}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
            <button className="bg-cx-red text-white px-10 py-4 font-bold uppercase rounded hover:bg-red-700 transition-colors shadow-lg text-lg">
            View All Speakers
            </button>
        </div>
      </div>
    </Section>
  );
}
