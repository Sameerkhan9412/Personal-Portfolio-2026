// components/sections/Projects.tsx
'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Play, ChevronRight, Sparkles } from 'lucide-react'
import { projects } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section id="projects" className="py-24 lg:py-32 relative overflow-hidden bg-background-secondary/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px]" />
      </div>

      <div ref={containerRef} className="container mx-auto px-4 md:px-6 relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent-green mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <Sparkles className="w-4 h-4" />
            Featured Projects
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-text-primary">Things I've </span>
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={cn(
                  'relative grid lg:grid-cols-2 gap-8 p-6 md:p-8 rounded-3xl glass overflow-hidden transition-all duration-500',
                  index % 2 === 0 ? '' : 'lg:direction-rtl'
                )}
              >
                {/* Gradient Overlay */}
                <div
                  className={cn(
                    'absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500',
                    project.color
                  )}
                />

                {/* Image */}
                <div className={cn('relative', index % 2 === 0 ? '' : 'lg:order-2')}>
                  <motion.div
                    className="relative aspect-video rounded-2xl overflow-hidden bg-background-tertiary"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Placeholder gradient background */}
                    {/* <div className={cn('absolute inset-0 bg-gradient-to-br opacity-50', project.color)} /> */}
                    
                    <Image src={project.image} height={300} width={200} className='w-full h-auto object-fill' alt='project img'/>
                    {/* Project Preview Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full glass flex items-center justify-center">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={false}
                    >
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium text-sm hover:bg-primary hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-full glass text-white font-medium text-sm hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </motion.div>
                  </motion.div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent-cyan text-white text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={cn('flex flex-col justify-center', index % 2 === 0 ? '' : 'lg:order-1 lg:text-right')}>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className={cn('text-sm font-medium mb-4 bg-gradient-to-r bg-clip-text text-transparent', project.color)}>
                    {project.subtitle}
                  </p>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className={cn('mb-6', index % 2 === 0 ? '' : 'lg:ml-auto')}>
                    <h4 className="text-sm font-medium text-text-muted mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className={cn(
                            'flex items-center gap-2 text-sm text-text-secondary',
                            index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                          )}
                        >
                          <ChevronRight className="w-3 h-3 text-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className={cn('flex flex-wrap gap-2', index % 2 === 0 ? '' : 'lg:justify-end')}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-background-tertiary text-xs font-medium text-text-secondary hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/sameerkhan9412"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary/50 text-primary font-medium hover:bg-primary hover:text-white transition-all"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}