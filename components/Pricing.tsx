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
             className="flex-1 bg-cx-blue text-white shadow-xl overflow-hidden flex flex-col relative"
          >
             {/* Wavy Top Decoration */}
             <div className="absolute top-0 left-0 right-0 h-4 bg-white" style={{ clipPath: 'ellipse(50% 100% at 50% 0%)' }}></div>
             <div className="absolute top-0 left-0 right-0 h-6 bg-white z-10" 
                  style={{ 
                    maskImage: 'radial-gradient(circle, transparent 70%, black 72%)',
                    maskSize: '20px 20px',
                    maskPosition: 'bottom',
                    maskRepeat: 'repeat-x',
                    WebkitMaskImage: 'radial-gradient(circle, transparent 70%, black 72%)',
                    WebkitMaskSize: '20px 20px',
                    WebkitMaskPosition: 'bottom',
                    WebkitMaskRepeat: 'repeat-x',
                    height: '20px',
                    top: '-10px',
                    background: 'white',
                    transform: 'rotate(180deg)'
                  }}>
             </div>

             {/* Alternative simplified wavy top using SVG if CSS mask is tricky across browsers, 
                 but for now let's use a simpler SVG divider approach or just standard border radius if complex.
                 Actually, the image shows a scallop edge. Let's try a clean SVG approach at the top.
             */}
             <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="block w-full h-8 fill-white">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="hidden"></path>
                    <path d="M0,0V15.81C13,29.12,27.46,41.94,42.87,54.18c21.32,16.89,45.3,31.7,70.1,43.94,30.34,15,62.82,25.48,96.17,31.25,32.89,5.69,66.6,6.38,100,2.39,36.42-4.35,71.55-15.68,105.42-29.74C486.27,72.67,557,48.4,630.36,46.56c52.12-1.29,103.87,11.53,152,32.48,31.11,13.56,60.67,31.11,92,44.29,38.83,16.29,81.16,24.58,123.75,23.63,42.23-.94,84.15-9.35,124.31-25.13,19.34-7.6,38.27-16.73,56.58-27.13V0Z" opacity=".5" className="hidden"></path>
                    {/* Scallop pattern simulation */}
                     <path d="M0,0 v10 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 a10,10 0 0 1 20,0 V0 H0 z" fill="white" />
                </svg>
             </div>
             {/* Using a simple CSS mask for scallop might be cleaner if supported, but let's stick to a clean top padding for now and maybe a simple SVG if needed. 
                 Actually, let's just use a top white SVG shape for the scallop effect.
             */}
             <div className="absolute top-0 left-0 w-full">
                <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 text-white fill-current transform rotate-180">
                     <path d="M0 48H1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0V48Z" fill="white"/>
                     {/* This is a curve, not scallop. Let's try a repeating circle pattern for scallop */}
                </svg>
                {/* Real Scallop SVG */}
                <div className="flex w-full overflow-hidden absolute top-0 h-4">
                     {Array.from({ length: 40 }).map((_, i) => (
                         <div key={i} className="w-8 h-8 bg-white rounded-full flex-shrink-0 -mt-4"></div>
                     ))}
                </div>
             </div>


             <div className="p-8 pb-10 pt-16 flex-grow flex flex-col items-center relative z-10">
                <h3 className="text-2xl font-bold mb-12">Group Pass</h3>
                
                <div className="text-center mb-12">
                    <div className="text-6xl font-bold text-cx-red mb-2 tracking-tight leading-tight">Get a<br/>Quote</div>
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
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
