// components/sections/About.tsx
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Code2, Rocket, Coffee, Target, Award, Users } from 'lucide-react'
import profileImg from "@/app/assets/logo/profile.png"

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Expert',
    description: 'Proficient in MERN stack with production-level experience',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Rocket,
    title: 'Performance Focused',
    description: 'Optimizing applications for speed and scalability',
    color: 'text-accent-cyan',
    bgColor: 'bg-accent-cyan/10',
  },
  {
    icon: Coffee,
    title: 'Continuous Learner',
    description: 'Always exploring new technologies and best practices',
    color: 'text-accent-purple',
    bgColor: 'bg-accent-purple/10',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    description: '300+ DSA problems solved across multiple platforms',
    color: 'text-accent-green',
    bgColor: 'bg-accent-green/10',
  },
]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={containerRef} className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-text-primary">Crafting Digital </span>
            <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A passionate Full Stack Developer turning ideas into elegant, scalable solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image & Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Image Container */}
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent-cyan to-accent-purple rounded-2xl blur-sm opacity-75" />
              
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-background-secondary">
                <Image
                  src={profileImg}
                  alt="Sameer Khan"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIBAAAgEEAgMBAAAAAAAAAAAAAQIDAAQFEQYhEjFBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQCEAPwCzYcfx13jLiOW3JkkCqCJZQevsL7B0Qf2T/KKKD//2Q=="
                />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 glass rounded-xl p-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent-cyan flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-text-primary">3+</p>
                      <p className="text-sm text-text-muted">Years Coding</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-accent-cyan/30 rounded-full" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Bio */}
            <div className="space-y-6 mb-10">
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm a <span className="text-primary font-medium">Full Stack Developer</span> currently 
                pursuing my MCA at <span className="text-accent-cyan font-medium">Aligarh Muslim University</span>. 
                With hands-on experience from multiple internships, I specialize in building 
                production-level applications using the MERN stack.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                My journey in tech started with a curiosity about how things work on the web. 
                Today, I craft <span className="text-accent-purple font-medium">scalable solutions</span> that 
                solve real-world problems. From healthcare platforms to ed-tech solutions, 
                I've contributed to projects that impact users' lives.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                Beyond coding, I lead the <span className="text-accent-green font-medium">Web Development team</span> at 
                CSS Club and coordinate placement activities, helping fellow students achieve their career goals.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group p-4 rounded-xl glass hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center mb-3`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h4 className="font-medium text-text-primary mb-1">{item.title}</h4>
                  <p className="text-sm text-text-muted">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}