"use client";

import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "./data";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      // cubic-bezier array is strongly typed and avoids string-ease issues
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};


export function Testimonials() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="mt-30 max-w-6xl  mx-auto px-2"
    >
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold 
                     tracking-tight  bg-gradient-to-r from-white via-white/80 to-white/60 
                     bg-clip-text text-transparent">
        Loved by Creators
      </h2>
      <p className="text-center text-base sm:text-lg text-white/60 max-w-2xl mx-auto mt-4">
        Join thousands of creators who’ve elevated their portraits with a single click.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 
                       shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-all duration-500 group"
          >
            {/* Avatar */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20 bg-neutral-800" />
            </div>

            {/* Star icon - subtle accent */}
            <Star className="absolute top-4 right-4 text-white/30 w-5 h-5 group-hover:text-white/60 transition-colors" />

            {/* Testimonial text */}
            <p className="mt-10 text-sm sm:text-base text-white/80 leading-relaxed">
              {testimonial.text}
            </p>

            {/* Author */}
            <div className="mt-6 text-center">
              <p className="text-lg font-semibold text-white">{testimonial.author}</p>
              <p className="text-xs text-white/50">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
