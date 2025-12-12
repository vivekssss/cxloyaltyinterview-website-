'use client';

import { Section } from './Section';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Features() {
  const attendees = [
    "CEOs/CIOs",
    "Chief Marketing Officers",
    "Heads of Customer Experience & UX",
    "Heads of Digital Transformation",
    "Heads of Customer Loyalty & Brand Loyalty",
    "CXOs, VPs, Directors",
    "Heads of Customer Insights & Analytics",
    "Heads of Customer Value & Loyalty Partnerships",
    "Heads of Rewards and Loyalty",
  ];

  return (
    <>
      {/* Who Will You Meet Section */}
      <Section className="bg-cx-blue text-white overflow-hidden" id="attendees">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <div className="hidden md:block h-0.5 w-32 bg-white/30"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center">Who Will You Meet</h2>
            <div className="hidden md:block h-0.5 w-32 bg-white/30"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4">
                {attendees.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white text-cx-blue p-4 rounded-xl shadow-lg hover:scale-[1.02] transition-transform"
                  >
                    <div className="shrink-0">
                        <div className="w-6 h-6 rounded-full bg-cx-blue flex items-center justify-center">
                            <Check className="text-white w-4 h-4" />
                        </div>
                    </div>
                    <span className="font-bold text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative"
            >
                <div className="relative h-[400px] lg:h-[600px] w-full rounded-l-[50px] md:rounded-l-[100px] rounded-r-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                    <Image 
                        src="https://cxloyaltymena.com/wp-content/uploads/2024/05/g31.jpg"
                        alt="Conference Attendees"
                        fill
                        className="object-cover"
                    />
                </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Why Should You Attend Section */}
      <Section className="bg-gray-50 overflow-hidden" id="why-attend">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <div className="hidden md:block h-0.5 w-32 bg-cx-blue/30"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-cx-blue text-center">Why Should You Attend</h2>
            <div className="hidden md:block h-0.5 w-32 bg-cx-blue/30"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image Section (Left) */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 relative order-2 lg:order-1"
            >
                <div className="relative">
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-cx-red/10 rounded-full blur-3xl z-0"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cx-blue/10 rounded-full blur-3xl z-0"></div>
                    
                    {/* SVG Pattern */}
                    <svg className="absolute -bottom-8 -left-8 z-10 w-24 h-24 text-cx-red" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-cx-blue" />
                        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" className="text-cx-red" />
                    </svg>

                     <svg className="absolute -top-8 -right-8 z-10 w-20 h-20 text-cx-blue" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0" y="0" width="100" height="100" fill="none" />
                         <pattern id="dots-blue" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="2" fill="currentColor" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#dots-blue)" />
                    </svg>

                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl z-20">
                        <Image 
                            src="https://cxloyaltymena.com/wp-content/uploads/2024/05/g4-1024x683.jpg"
                            alt="Summit Atmosphere"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Text Content (Right) */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 order-1 lg:order-2 space-y-6 text-gray-700 leading-relaxed text-lg"
            >
              <p>
                Join us for the highly anticipated <span className="font-bold text-cx-blue">4th Edition CX & Loyalty Summit 2025</span>, where industry leaders from diverse sectors converge to explore the latest trends in CX, EX, Loyalty, Customer Service, Digital Transformation, and more. This premier event will delve into cutting-edge CX strategies, emerging technologies such as Digitalization and Automation, and best practices designed to elevate your organization's CX, EX, & CL initiatives to new heights.
              </p>
              <p>
                Prepare to be immersed in a dynamic agenda featuring insightful presentations, engaging panel discussions, and keynote addresses delivered by renowned global experts, panellists, and moderators.
              </p>
              <p>
                Connect with industry specialists from around the world, forge valuable partnerships, and gain invaluable insights through networking opportunities and knowledge-sharing sessions.
              </p>
              <p>
                At the <span className="font-bold text-cx-blue">4th Edition CX & Loyalty Summit 2025</span>, discover innovative approaches employed by leading organizations to enhance customer interactions and maximize customer value.
              </p>
              <p className="font-semibold text-cx-red">
                If you're ready to drive innovation and join the ranks of industry trailblazers, don't miss out! Register today to secure your spot and unlock a world of possibilities.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
