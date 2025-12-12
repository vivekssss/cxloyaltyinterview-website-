'use client';

import { useRef, useEffect, useState } from 'react';
import { Section } from './Section';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import Image from 'next/image';

export default function ImageGallery() {
  const [width, setWidth] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isDragging = useRef(false);

  const images = [
    "https://cxloyaltymena.com/wp-content/uploads/2024/06/g22-768x512.webp",
    "https://cxloyaltymena.com/wp-content/uploads/2024/05/g11-768x512.jpg",
    "https://cxloyaltymena.com/wp-content/uploads/2024/05/g45-768x512.jpg",
    "https://cxloyaltymena.com/wp-content/uploads/2024/05/g45-768x512.jpg",
    "https://cxloyaltymena.com/wp-content/uploads/2024/05/g4-768x512.jpg",
    "https://cxloyaltymena.com/wp-content/uploads/2024/05/g1-768x512.jpg",
    "https://cxloyaltymena.com/wp-content/uploads/2024/06/DSC04630-1536x1024-1-768x512.webp",
    "https://cxloyaltymena.com/wp-content/uploads/2024/06/g38-768x512.webp"
  ];

  // Duplicate images for infinite loop effect
  const carouselImages = [...images, ...images];

  useEffect(() => {
    if (sliderRef.current) {
      // Calculate total width of the content
      const totalWidth = sliderRef.current.scrollWidth;
      // We want to loop when we traverse half the width (one set of images)
      // Note: scrollWidth includes gaps.
      setWidth(totalWidth / 2);
    }
  }, []);

  useAnimationFrame((t, delta) => {
    let moveBy = (delta / 1000) * 50; // Speed: 50px/s
    
    // If dragging, we don't auto-move
    if (isDragging.current) {
        moveBy = 0;
    }

    // Get current x position
    // If dragging, this value is updated by the drag gesture
    let currentX = x.get();
    
    // Apply auto movement
    currentX -= moveBy;

    // Wrap logic for infinite loop
    if (width > 0) {
        if (currentX <= -width) {
            // If we scrolled past the end of first set, jump back to start
            currentX += width;
        } else if (currentX > 0) {
            // If we dragged past the start, jump to end of first set
             currentX -= width;
        }
    }

    // Only set if not dragging to avoid conflict, OR if we need to wrap
    // Actually, setting x while dragging might interfere with drag controls?
    // If we only update when wrap is needed or auto-moving, it's safer.
    // However, if we don't update x during auto-move, it won't move.
    
    if (!isDragging.current) {
        x.set(currentX);
    } else {
        // While dragging, we only update IF we need to wrap
        if (width > 0) {
            if (currentX <= -width) {
                x.set(currentX + width);
            } else if (currentX > 0) {
                x.set(currentX - width);
            }
        }
    }
  });

  return (
    <Section className="bg-white py-0 overflow-hidden" id="gallery">
      {/* Dotted Background Container */}
      <div className="relative py-20">
        {/* Dotted Pattern Background */}
        <div 
          className="absolute inset-0 z-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#3b82f6 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px'
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Image Slider */}
          <div className="overflow-hidden mb-16 cursor-grab active:cursor-grabbing">
            <motion.div 
              ref={sliderRef}
              style={{ x }}
              drag="x"
              onDragStart={() => isDragging.current = true}
              onDragEnd={() => isDragging.current = false}
              className="flex gap-6 w-max"
            >
              {carouselImages.map((src, index) => (
                <motion.div 
                  key={index} 
                  className="min-w-[300px] md:min-w-[400px] h-[250px] relative rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={src} 
                    alt={`Gallery Image ${index + 1}`}
                    fill
                    className="object-cover pointer-events-none"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center">
            <button className="bg-cx-red text-white px-8 py-3 font-bold rounded shadow-lg hover:bg-red-700 transition-colors flex items-center gap-2">
              <span className="text-xl">›</span> See All Latest
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
