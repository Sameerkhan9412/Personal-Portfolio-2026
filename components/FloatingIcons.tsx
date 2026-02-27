// components/FloatingIcons.tsx
'use client'

import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiMongodb, 
  SiTypescript,
  SiDocker,
  SiTailwindcss,
  SiGit
} from 'react-icons/si'

const icons = [
  { Icon: SiReact, color: '#61DAFB', delay: 0 },
  { Icon: SiNextdotjs, color: '#ffffff', delay: 0.2 },
  { Icon: SiNodedotjs, color: '#339933', delay: 0.4 },
  { Icon: SiMongodb, color: '#47A248', delay: 0.6 },
  { Icon: SiTypescript, color: '#3178C6', delay: 0.8 },
  { Icon: SiDocker, color: '#2496ED', delay: 1 },
  { Icon: SiTailwindcss, color: '#06B6D4', delay: 1.2 },
  { Icon: SiGit, color: '#F05032', delay: 1.4 },
]

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, color, delay }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [0.8, 1, 0.8],
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon
            className="w-8 h-8 md:w-12 md:h-12 opacity-20"
            style={{ color }}
          />
        </motion.div>
      ))}
    </div>
  )
}