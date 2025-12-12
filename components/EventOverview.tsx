'use client';

import { Section } from './Section';
import Image from 'next/image';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EventOverview() {
  return (
    <Section className="bg-white text-gray-800 py-16 md:py-24" id="overview">
      <div className="container mx-auto px-4">
        
        {/* Mobile Heading (Visible only on small screens) */}
        <div className="flex md:hidden items-center justify-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-cx-blue"></div>
            <h2 className="text-2xl font-bold uppercase tracking-wide text-cx-blue text-center">Event Overview</h2>
            <div className="h-[2px] w-12 bg-cx-blue"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          
          {/* Image Collage Section */}
          <div className="lg:w-1/2 relative">
             <div className="relative w-full max-w-[600px] mx-auto h-[400px] md:h-[500px]">
                {/* Dots Decoration */}
                <div className="absolute -top-6 -right-6 z-0 hidden md:block">
                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" className="text-cx-red fill-current" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#dots)" />
                    </svg>
                </div>

                {/* Main Image (Group) */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-0 left-0 right-12 md:right-16 h-[60%] z-10"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                        <Image
                            src="https://cxloyaltymena.com/wp-content/uploads/2024/06/DSC04630-1536x1024-1.webp"
                            alt="CX Loyalty Summit Attendees"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Bottom Left Image (Two Men) */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="absolute bottom-12 md:bottom-20 left-0 w-[45%] h-[40%] z-20"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="https://cxloyaltymena.com/wp-content/uploads/2024/06/DSC04726-1024x683-1.webp"
                            alt="Networking at CX Loyalty Summit"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Bottom Right Image (Speaker) */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute bottom-20 right-4 md:right-8 w-[40%] h-[55%] z-30"
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="https://cxloyaltymena.com/wp-content/uploads/2024/06/g18.webp"
                            alt="Speaker at CX Loyalty Summit"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
             </div>
             
             {/* Post Event Report Button (Moved here) */}
             <div className="mt-8 flex justify-center">
                <a href="#" className="bg-cx-red hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold uppercase text-lg transition-all inline-flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    <FileText className="w-6 h-6" />
                    Post Event Report
                </a>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="hidden md:flex items-center gap-4 mb-8">
              <div className="h-[2px] w-16 bg-cx-blue"></div>
              <h2 className="text-3xl font-bold uppercase tracking-wide text-cx-blue whitespace-nowrap">Event Overview</h2>
              <div className="h-[2px] flex-grow bg-cx-blue"></div>
            </div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed text-justify">
                <p className="mb-6">
                A strong customer experience, employee experience and customer loyalty program management are the hallmark of many of the world’s most successful brands – setting the bar for organizations across all industries to prioritize their CX, EX & CL strategies and deliver superior experiences across all channels.
                </p>
                
                <p className="mb-6">
                It’s no secret that over the past two years, customer expectations have evolved – making CX as one of the biggest differentiators between one’s brand and the competition. Two thirds of organizations globally now compete on customer experience alone with 87% of business leaders having identified CX as their top growth engine.
                </p>

                <p className="mb-6 font-semibold text-gray-800">
                The 4th Edition CX & Loyalty Summit & Awards MENA 2025 shifts focus on innovative approaches that the world’s leading organizations are deploying to manage customer interactions and maximize customer value.
                </p>

                <p className="mb-8">
                A stellar line-up featuring leading brands and organizations who have established CX, EX & Customer Loyalty at the top of their boardroom agenda will share insights into how digital experiences are transforming the way we work, deliver, transact, communicate, and live in an ever-changing world. With interactive keynote sessions, expert-led panels, and live case studies, we aim to pack value into every minute of the attendee experience.
                </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
