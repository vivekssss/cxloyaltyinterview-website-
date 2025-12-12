'use client';

import { Section } from './Section';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JoinConference() {
  return (
    <Section className="bg-white py-0 pb-20 relative z-20 overflow-visible">
      <div className="container mx-auto px-4">
        {/* Main Container with specific gradient */}
        <div className="relative flex flex-col lg:flex-row shadow-2xl rounded-xl max-w-6xl mx-auto bg-gradient-to-r from-[#2FA4E7] to-[#0258A6] overflow-visible">
            
            {/* Left Side: CTA */}
            <div className="w-full lg:w-[60%] text-white p-10 md:p-16 flex flex-col justify-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-8 leading-tight"
                >
                    Join Conference & Book Your Seat
                </motion.h2>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <button className="bg-cx-red text-white px-8 py-3 font-bold text-lg rounded shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2 w-fit">
                        <span className="text-xl">›</span> Register
                    </button>
                </motion.div>
            </div>

            {/* Right Side: Image with Pop-out Effect */}
            <div className="w-full lg:w-[40%] relative min-h-[300px] lg:min-h-full lg:flex lg:items-end">
                <div className="relative w-full h-full lg:h-[115%] lg:-mt-[15%] lg:mr-4 lg:mb-4 rounded-lg overflow-hidden shadow-2xl transform translate-y-0 lg:-translate-y-8">
                    <Image 
                        src="https://cxloyaltymena.com/wp-content/uploads/2024/05/g22.jpg" 
                        alt="Conference Audience" 
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            
        </div>
      </div>
    </Section>
  );
}
