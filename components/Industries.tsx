'use client';

import { Section } from './Section';
import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  Map, 
  Plane, 
  ShoppingBag, 
  Utensils, 
  Stethoscope, 
  GraduationCap, 
  Package, 
  Monitor, 
  Landmark, 
  BedDouble, 
  Car, 
  Clapperboard, 
  BarChart3 
} from 'lucide-react';

export default function Industries() {
  const industries = [
    { name: "Telecom", icon: PhoneCall },
    { name: "Travel & Tourism", icon: Map },
    { name: "Aviation", icon: Plane },
    { name: "Retail", icon: ShoppingBag },
    { name: "Food & Beverage", icon: Utensils },
    { name: "Healthcare", icon: Stethoscope },
    { name: "Educational Institutions", icon: GraduationCap },
    { name: "FMCG", icon: Package },
    { name: "E-commerce", icon: Monitor },
    { name: "Government", icon: Landmark },
    { name: "Hospitality", icon: BedDouble },
    { name: "Travel & Transport", icon: Car },
    { name: "Entertainment", icon: Clapperboard },
    { name: "BFSI", icon: BarChart3 },
  ];

  return (
    <Section className="bg-gray-100" id="industries">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Title */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 text-gray-500 font-bold uppercase tracking-widest">
              <div className="h-0.5 w-8 bg-gray-400"></div>
              <span>Industries</span>
              <div className="h-0.5 w-8 bg-gray-400"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-cx-blue mb-6">
              Industries Covered
            </h2>
          </motion.div>

          {/* Right Side: Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3"
          >
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              {industries.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all cursor-default"
                >
                  <item.icon className="w-5 h-5 text-gray-500" />
                  <span className="font-bold text-gray-700">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
