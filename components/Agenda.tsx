'use client';

import { useState } from 'react';
import { Section } from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Agenda() {
  const [activeDay, setActiveDay] = useState(1);

  const days = [
    { id: 1, date: "17th June 2025", title: "DAY 01" },
    { id: 2, date: "18th June 2025", title: "DAY 02" },
  ];

  interface Session {
    time: string;
    title: string;
    details?: string[];
  }

  const schedule: Record<number, Session[]> = {
    1: [
      { 
        time: "09:00 - 10:00", 
        title: "REGISTRATION & WELCOME COFFEE" 
      },
      { 
        time: "10:00 - 10:05", 
        title: "OPENING NOTE BY THE CHAIRPERSON" 
      },
      { 
        time: "10:05 - 10:25", 
        title: "ROLE OF THE LEADERSHIP IN DEFINING THE CUSTOMER EXPERIENCE",
        details: [
            "UAE's national strategy for artificial intelligence and its impact on customer experience",
            "Customer Happiness Centers and their role in improving public services",
            "Implementing customer advocacy programs to build long-term loyalty and trust"
        ]
      },
      { 
        time: "10:25 - 10:45", 
        title: "THE ROLE OF GENERATIVE AI IN PERSONALIZING CUSTOMER INTERACTIONS",
        details: [
            "Tailoring responses based on individual customer profiles and histories",
            "Real-time adaptation to customer needs and preferences",
            "Multichannel support: integrating GenAI across chat, email, voice, and social media"
        ]
      },
    ],
    2: [
      { time: "09:00 - 09:30", title: "WELCOME COFFEE & NETWORKING" },
      { time: "09:30 - 10:15", title: "PANEL: OMNICHANNEL STRATEGIES FOR 2025" },
      { time: "10:15 - 11:00", title: "WORKSHOP: DESIGNING CUSTOMER JOURNEYS" },
      { time: "11:00 - 11:30", title: "NETWORKING BREAK" },
      { time: "11:30 - 12:15", title: "CLOSING KEYNOTE: SUSTAINABLE CX" },
      { time: "12:15 - 13:00", title: "AWARDS CEREMONY" },
    ]
  };

  return (
    <Section className="bg-white" id="agenda">
      <div className="container mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-16"
        >
            <div className="hidden md:block h-0.5 w-32 bg-cx-blue/30"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-cx-blue text-center">Event Schedule</h2>
            <div className="hidden md:block h-0.5 w-32 bg-cx-blue/30"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center mb-0 relative z-10">
            <div className="bg-white rounded-t-lg overflow-hidden flex shadow-lg">
                {days.map((day) => (
                    <button
                    key={day.id}
                    onClick={() => setActiveDay(day.id)}
                    className={cn(
                        "px-10 py-4 font-bold text-center transition-all min-w-[160px]",
                        activeDay === day.id
                        ? "bg-cx-red text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    )}
                    >
                    <div className="text-xl">{day.title}</div>
                    <div className="text-sm opacity-90">{day.date}</div>
                    </button>
                ))}
            </div>
            </div>

            {/* Schedule List */}
            <div className="bg-cx-blue p-4 md:p-8 rounded-xl shadow-xl relative z-0 mt-[-10px] pt-10">
                <div className="bg-white rounded-lg p-6 md:p-8 min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="space-y-8">
                                {schedule[activeDay].map((session, idx) => (
                                    <div key={idx} className={cn("flex flex-col md:flex-row gap-6", idx !== schedule[activeDay].length - 1 && "border-b border-gray-200 pb-8")}>
                                        <div className="shrink-0">
                                            <span className="inline-block bg-cx-red text-white font-bold px-6 py-2 rounded-full text-sm shadow-md">
                                                {session.time}
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-cx-blue text-lg uppercase mb-3">{session.title}</h3>
                                            {session.details && (
                                                <ul className="space-y-2">
                                                    {session.details.map((detail, dIdx) => (
                                                        <li key={dIdx} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                                                            <div className="w-2 h-2 rounded-full bg-cx-red mt-2 shrink-0"></div>
                                                            <span>{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
        
        <div className="text-center mt-12">
             <button className="bg-cx-red text-white px-10 py-4 font-bold uppercase rounded hover:bg-red-700 transition-colors shadow-lg text-lg">
                View Full Schedule
             </button>
        </div>
      </div>
    </Section>
  );
}
