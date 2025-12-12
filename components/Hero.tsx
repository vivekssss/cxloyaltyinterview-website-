'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, MapPin, Users } from 'lucide-react';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80", // Conference Hall
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80", // Networking
    "https://images.unsplash.com/photo-1512453979798-5ea932a235c8?auto=format&fit=crop&q=80", // Dubai
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Set target date to June 17, 2025
    const targetDate = new Date('2025-06-17T09:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="relative min-h-[85vh] flex flex-col justify-center text-white overflow-hidden bg-cx-blue">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 overflow-hidden">
         <div className="absolute inset-0 bg-cx-blue/70 z-10"></div> {/* Overlay */}
         <AnimatePresence mode="popLayout">
            <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 w-full h-full"
            >
                <Image 
                    src={backgroundImages[currentImageIndex]}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
         </AnimatePresence>
      </div>

      <div className="container mx-auto px-4 relative z-20 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-6"
        >
            <span className="uppercase tracking-widest text-sm md:text-base font-bold">Driving Revenue</span>
            <div className="h-6 w-[2px] bg-white"></div>
            <span className="uppercase tracking-widest text-sm md:text-base font-bold">Building Relations</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight max-w-5xl"
        >
          THROUGH CX TRANSFORMATION &<br/> INCREASED BRAND LOYALTY
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="bg-white text-cx-blue px-6 py-3 rounded-md flex items-center gap-3 font-bold min-w-[250px]">
            <Calendar className="text-cx-blue" />
            <span>17th - 18th June 2025</span>
          </div>
          <div className="bg-white text-cx-blue px-6 py-3 rounded-md flex items-center gap-3 font-bold min-w-[250px]">
             <MapPin className="text-cx-blue" />
             <span>Conrad Dubai</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16 md:mb-24"
        >
             <Link href="#register" className="bg-cx-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold uppercase text-lg transition-all inline-flex items-center gap-3">
                <Users className="w-6 h-6" />
                Registration
            </Link>
        </motion.div>
      </div>
    </section>

    {/* Countdown Bar */}
    <div className="bg-cx-red py-8 text-white relative z-20">
        <div className="container mx-auto px-4">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 max-w-6xl mx-auto">
                {[
                    { label: 'Days', value: timeLeft.days },
                    { label: 'Hours', value: timeLeft.hours },
                    { label: 'Minutes', value: timeLeft.minutes },
                    { label: 'Seconds', value: timeLeft.seconds },
                ].map((item, index) => (
                    <div key={item.label} className="flex items-center justify-center gap-4 md:gap-8 relative">
                        <div className="bg-white text-cx-blue rounded-lg p-4 w-full md:w-40 text-center shadow-lg">
                            <div className="text-3xl md:text-5xl font-bold">{String(item.value).padStart(2, '0')}</div>
                            <div className="text-sm md:text-base font-semibold">{item.label}</div>
                        </div>
                        {index < 3 && <div className="hidden md:block absolute -right-6 md:-right-8 text-4xl font-bold text-cx-blue z-10">:</div>}
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* Co-Located With Section */}
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white py-12 border-b border-gray-200"
    >
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12 max-w-6xl mx-auto items-center">
                <div className="flex flex-col items-start gap-4 md:col-span-1 pl-2">
                    <h2 className="text-2xl md:text-3xl font-bold text-cx-blue">Co-Located With</h2>
                    <a href="#" className="bg-cx-blue text-white px-8 py-2 rounded-full font-bold hover:bg-blue-900 transition-colors text-sm">
                        Visit Site
                    </a>
                </div>
                
                {/* Spacer column */}
                <div className="hidden md:block md:col-span-1"></div>

                <div className="md:col-span-2 flex justify-start md:justify-start pl-4">
                    <div className="relative w-full h-24 md:h-32">
                        <img 
                            src="https://cxloyaltymena.com/wp-content/uploads/2025/03/Logo-4th-Annual-Future-Banks-Summit-Awards-2025-01-1024x344.png"
                            alt="4th Annual Future Banks Summit & Awards 2025"
                            className="w-full h-full object-contain object-left"
                        />
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
    </>
  );
}
