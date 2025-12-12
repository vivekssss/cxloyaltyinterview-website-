'use client';

import { Section } from './Section';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Sponsors() {
  const sponsors = [
    { name: "Comarch", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/comarch.png" },
    { name: "SleekFlow", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/sleekflow.png" },
    { name: "Related", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/related.png" },
    { name: "Capillary", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/capillary.png" },
    { name: "BNC", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/4.png" },
  ];

  const partners = [
    { name: "DX Talks", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/dx-talks-1.png" },
    { name: "International Business Magazine", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/international-business-magazine.png" },
    { name: "DGN", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/dubai-global-news.png" },
    { name: "World Business Outlook", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/world-business-outlook.png" },
    { name: "BNC", logo: "https://cxloyaltymena.com/wp-content/uploads/2024/05/4.png" },
  ];

  return (
    <Section className="bg-cx-blue text-white py-20" id="sponsors">
      <div className="container mx-auto px-4 text-center">
        
        {/* Series Sponsors */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-2 font-medium">Sponsors</p>
            <div className="flex items-center justify-center gap-4 mb-8">
                 <div className="h-px w-16 bg-gray-600"></div>
                 <h2 className="text-3xl md:text-5xl font-bold">Series Sponsors</h2>
                 <div className="h-px w-16 bg-gray-600"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sponsors.map((sponsor, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white h-32 rounded-xl flex items-center justify-center p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                <div className="relative w-full h-full">
                    <Image 
                        src={sponsor.logo} 
                        alt={sponsor.name}
                        fill
                        className="object-contain p-2"
                    />
                </div>
                </motion.div>
            ))}
            </div>
        </motion.div>

        {/* Series Media Partners */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 mt-20"
        >
             <p className="text-gray-400 text-sm uppercase tracking-[0.2em] mb-2 font-medium">Partner</p>
             <div className="flex items-center justify-center gap-4 mb-8">
                 <div className="h-px w-16 bg-gray-600"></div>
                 <h2 className="text-3xl md:text-5xl font-bold">Series Media Partners</h2>
                 <div className="h-px w-16 bg-gray-600"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partners.map((partner, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white h-32 rounded-xl flex items-center justify-center p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                <div className="relative w-full h-full">
                    <Image 
                        src={partner.logo} 
                        alt={partner.name}
                        fill
                        className="object-contain p-2"
                    />
                </div>
                </motion.div>
            ))}
            </div>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
        >
             <button className="bg-cx-red text-white px-10 py-4 font-bold uppercase rounded hover:bg-red-700 transition-colors shadow-lg text-lg flex items-center gap-2 mx-auto">
                <span className="text-xl">›</span> View All Sponsors & Partners
            </button>
        </motion.div>
      </div>
    </Section>
  );
}
