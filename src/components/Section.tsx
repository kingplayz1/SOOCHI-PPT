"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({ children, id, className = "", title, subtitle }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 relative ${className}`}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {subtitle && (
              <span className="text-gold tracking-[0.3em] uppercase text-xs mb-2 block font-poppins">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4">
                {title}
              </h2>
            )}
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
