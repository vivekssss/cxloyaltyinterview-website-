'use client';

import { Section } from './Section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Pricing() {
  const benefits = [
    "Complete access to the two-day conference sessions",
    "5 Star Luncheon on both days",
    "Coffee Breaks with breakfast networking sessions",
    "Access to the CX & Loyalty MENA Awards 2025"
  ];

  return (
    <Section className="bg-white py-20" id="register">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-bold text-cx-blue">Conference Ticket Pricing</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          
          {/* Individual Pass */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white border border-gray-300 shadow-xl overflow-hidden flex flex-col"
          >
             <div className="bg-cx-blue text-white text-center py-6">
                <h3 className="text-2xl font-bold">Individual Pass</h3>
             </div>
             
             <div className="p-8 pb-10 flex-grow flex flex-col items-center">
                <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-cx-red mb-2 tracking-tight">$795</div>
                    <p className="text-sm text-gray-500 font-medium">(* Exclusive of VAT )</p>
                </div>
                
                <div className="w-full space-y-6 mb-10">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col">
                            {index > 0 && <div className="h-px w-3/4 bg-gray-200 mx-auto mb-4"></div>}
                            <div className="flex items-start gap-3 px-4">
                                <CheckCircle2 className="text-cx-blue w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                <span className="text-gray-700 font-medium text-base text-left leading-tight">{benefit}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto w-full px-4">
                    <button className="w-full bg-cx-blue text-white py-4 text-lg font-bold rounded shadow-md hover:bg-blue-900 transition-colors">
                        Register Now
                    </button>
                </div>
             </div>
          </motion.div>

          {/* Group Pass */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1 relative flex flex-col mt-6 lg:mt-0"
          >
             {/* Scallop Top Decoration */}
             <div className="absolute -top-3 left-0 w-full overflow-hidden flex flex-nowrap z-10">
                 {/* Row of circles to create scallop effect */}
                 {Array.from({ length: 30 }).map((_, i) => (
                     <div key={i} className="w-6 h-6 bg-cx-blue rounded-full flex-shrink-0 -mb-3"></div>
                 ))}
             </div>

             <div className="flex-grow bg-cx-blue text-white shadow-xl flex flex-col pt-8 pb-10 relative z-0">
                 <div className="text-center py-2 mb-4">
                    <h3 className="text-2xl font-bold">Group Pass</h3>
                 </div>
                 
                 <div className="p-8 pt-0 pb-10 flex-grow flex flex-col items-center">
                    <div className="text-center mb-10">
                        <div className="text-6xl font-bold text-cx-red mb-2 tracking-tight leading-none">Get a<br/>Quote</div>
                    </div>
                    
                    <div className="w-full space-y-6 mb-10">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-col">
                                {index > 0 && <div className="h-px w-3/4 bg-white/20 mx-auto mb-4"></div>}
                                <div className="flex items-start gap-3 px-4">
                                    <CheckCircle2 className="text-white w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                    <span className="text-white font-medium text-base text-left leading-tight">{benefit}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto w-full px-4">
                        <button className="w-full bg-white text-cx-blue py-4 text-lg font-bold rounded shadow-md hover:bg-gray-100 transition-colors">
                            Register Now
                        </button>
                    </div>
                 </div>
             </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
