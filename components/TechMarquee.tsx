// components/TechMarquee.tsx
'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/lib/data'

export default function TechMarquee() {
  const duplicatedTech = [...techStack, ...techStack]

  return (
    <section className="py-8 border-y border-border bg-background-secondary/50 overflow-hidden">
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background-secondary/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background-secondary/50 to-transparent z-10" />

        <motion.div
          className="flex gap-8 items-center whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-text-secondary"
            >
              <span className="text-lg font-medium">{tech}</span>
              <span className="text-primary">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}