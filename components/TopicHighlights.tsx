'use client';

import { useState } from 'react';
import { Section } from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Topic {
  title: string;
  content: string;
}

const topics: Topic[] = [
  { title: "Fostering Corporate Culture for CX Transformation", content: "Strategies to build a customer-centric culture from the inside out." },
  { title: "Healthcare CX: Enhancing Patient Satisfaction & Loyalty", content: "Improving patient experience through digital innovation and empathy." },
  { title: "From Loyal Customers to Brand Advocates", content: "Harnessing the power of brand communities to foster loyalty, retention, and advocacy among customers." },
  { title: "Gamification for Loyalty and Revenue", content: "Using game mechanics to drive engagement and increase revenue." },
  { title: "AI Integration for Enhanced Customer Experiences", content: "Leveraging Artificial Intelligence to deliver personalized and efficient support." },
  { title: "Aligning Multi-Channel Experience with Brand Promise", content: "Ensuring consistency across all touchpoints to build trust." },
  { title: "Achieving Hyper Personalization in CX", content: "Using data to deliver unique experiences for every customer." },
  { title: "Linking Employee and Customer Feedback", content: "Understanding the connection between employee satisfaction and customer loyalty." },
  { title: "Retention Strategies of Exceptional Brands", content: "Best practices from top brands on keeping customers coming back." },
  { title: "Social media for Brand Perception and CX", content: "Managing brand reputation and customer service on social platforms." },
  { title: "Balancing CX and Operational Excellence", content: "Optimizing operations without compromising the customer experience." },
  { title: "Advancements in Customer Analytics", content: "Using advanced analytics to gain deeper insights into customer behavior." },
  { title: "Digital Transformation Strategies for Seamless Customer Journeys", content: "Integrating digital tools to create frictionless customer journeys." },
  { title: "Effective Complaint Handling for Retention", content: "Turning negative experiences into opportunities for loyalty." },
  { title: "Multichannel Excellence", content: "Mastering the art of serving customers across multiple channels." },
  { title: "Measuring the Impact of Loyalty Programs", content: "Key metrics to evaluate the success and ROI of loyalty initiatives." },
];

export default function TopicHighlights() {
  const [openIndex, setOpenIndex] = useState<number | null>(2); // Default open the 3rd one as in image

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-white py-20" id="topic-highlights">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-cx-blue uppercase tracking-tight">Topic Highlights</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 max-w-7xl mx-auto">
            {topics.map((topic, index) => (
                <div key={index} className="flex flex-col">
                    <motion.button
                        onClick={() => toggle(index)}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between w-full bg-cx-red text-white px-6 py-4 rounded-md shadow-sm hover:bg-red-700 transition-colors text-left group"
                    >
                        <span className="font-bold text-sm md:text-[15px] pr-4 leading-tight">{topic.title}</span>
                        <div className="border border-white/40 rounded p-1 group-hover:border-white transition-colors flex-shrink-0">
                            {openIndex === index ? <ChevronUp size={20} strokeWidth={2.5} /> : <ChevronDown size={20} strokeWidth={2.5} />}
                        </div>
                    </motion.button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="bg-white border border-gray-100 p-6 shadow-xl text-cx-blue/80 font-medium text-base leading-relaxed relative z-10 mb-4 rounded-b-md mx-1 mt-1">
                                    {topic.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
      </div>
    </Section>
  );
}
