// components/sections/Skills.tsx
'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { skills } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState<string>('languages')

  const categories = Object.entries(skills)

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent-purple mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <span className="text-lg">⚡</span>
            Technical Skills
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-text-primary">My </span>
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(([key, category]) => {
            const Icon = category.icon
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all',
                  activeCategory === key
                    ? 'bg-gradient-to-r from-primary to-accent-cyan text-white'
                    : 'glass text-text-secondary hover:text-text-primary'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
                {category.title}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {skills[activeCategory as keyof typeof skills].items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="group p-6 rounded-xl glass hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-mono text-primary">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 rounded-full bg-background-tertiary overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-accent-cyan to-accent-purple"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                    />
                    
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-display font-bold text-text-primary mb-6">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['OOPs', 'DBMS', 'Operating System', 'Computer Networks', 'Software Engineering'].map(
              (subject, index) => (
                <motion.span
                  key={subject}
                  className="px-4 py-2 rounded-full glass text-sm text-text-secondary hover:text-primary transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {subject}
                </motion.span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}