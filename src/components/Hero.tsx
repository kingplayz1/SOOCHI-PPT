"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/40 to-luxury-black z-10" />

      {/* Background Image */}
      <div className="absolute inset-0 scale-105">
        <Image
          src="/soochi.jpg"
          alt="Soochi Japanese Restaurant"
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-gold text-xs md:text-xl tracking-[0.15em] md:tracking-[0.3em] uppercase mb-3 md:mb-4 font-poppins font-light">
            Premier Japanese Sushi
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-cinzel font-bold mb-6 md:mb-8 tracking-tighter leading-none">
            <span className="block text-white">SOOCHI</span>
            <span className="block gold-gradient-text animate-gold-glow lg:animate-neon-flicker">寿司</span>
          </h1>
          <div className="w-16 md:w-24 h-[2px] bg-gold mx-auto mb-6 md:mb-8" />
          <p className="max-w-2xl mx-auto text-gray-300 text-sm md:text-xl font-light mb-8 md:mb-12 px-2">
            An Unforgettable Waterfront Dining Experience at Del Perro Pier.
          </p>

          <motion.a
            href="#executive-summary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 md:px-10 py-3 md:py-4 bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-luxury-black transition-all duration-300 font-bold uppercase tracking-widest text-xs md:text-sm"
          >
            Explore Vision
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold/0 via-gold to-gold/0" />
      </motion.div>
    </section>
  );
}
