'use client';

import { Section } from './Section';
import { motion } from 'framer-motion';
import { Users, Lightbulb, BarChart } from 'lucide-react';

export default function WhySponsor() {
  const benefits = [
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-cx-red" />,
      text: "NETWORK & GENERATE LEADS"
    },
    {
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-cx-red" />,
      text: "DEMONSTRATE THOUGHT LEADERSHIP"
    },
    {
      icon: <BarChart className="w-8 h-8 md:w-10 md:h-10 text-cx-red" />,
      text: "BRAND POSITIONING"
    }
  ];

  return (
    <Section className="bg-cx-blue text-white py-20" id="why-sponsor">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-12"
        >
            <div className="hidden md:block h-0.5 w-32 bg-white/30"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-center">WHY SPONSOR</h2>
            <div className="hidden md:block h-0.5 w-32 bg-white/30"></div>
        </motion.div>

        {/* Intro Text */}
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-6xl mx-auto mb-16 text-lg md:text-xl leading-relaxed text-gray-200"
        >
            4th Edition CX & Loyalty Summit & Awards 2025, presents the perfect opportunity for solution providers to engage with key decision makers such as CXOs, Heads of Marketing, Heads of Customer Experience, Heads of Loyalty Programs etc from diverse industries such as BFSI, Retail & E-Commerce, Telco, Hospitality, Travel & Tourism, Aviation, CPG etc to differentiate their product and put forward their value proposition in this crowded marketplace. Some of the key reasons why you should sponsor:
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
            
            {/* Left Column: Benefits Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                {benefits.map((benefit, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white text-cx-blue p-6 rounded-lg shadow-lg flex items-center gap-6 transform hover:scale-105 transition-transform duration-300 cursor-default"
                    >
                        <div className="flex-shrink-0">
                            {benefit.icon}
                        </div>
                        <span className="font-bold text-lg md:text-xl tracking-wide">{benefit.text}</span>
                    </motion.div>
                ))}
            </div>

            {/* Right Column: Video */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
            >
                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/svEqRwTnh2o" 
                        title="CX & Loyalty Summit Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                </div>
            </motion.div>

        </div>
      </div>
    </Section>
  );
}
