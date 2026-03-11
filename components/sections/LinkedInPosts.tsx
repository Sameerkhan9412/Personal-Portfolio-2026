// components/sections/LinkedInPosts.tsx
'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  Linkedin, 
  Heart, 
  MessageCircle, 
  Share2, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  TrendingUp,
  Award,
  Code2,
  Users,
  BookOpen,
  Zap
} from 'lucide-react'
import { linkedinPosts, personalInfo } from '@/lib/data'
import { cn } from '@/lib/utils'

const postTypeIcons = {
  achievement: Award,
  technical: Code2,
  milestone: TrendingUp,
  leadership: Users,
  journey: BookOpen,
}

const postTypeColors = {
  achievement: 'from-yellow-500 to-orange-500',
  technical: 'from-primary to-accent-cyan',
  milestone: 'from-accent-green to-emerald-500',
  leadership: 'from-accent-purple to-pink-500',
  journey: 'from-accent-cyan to-blue-500',
}

export default function LinkedInPosts() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedPost, setExpandedPost] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('grid')

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % linkedinPosts.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + linkedinPosts.length) % linkedinPosts.length)
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  return (
    <section id="linkedin" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 w-80 h-80 bg-[#0077B5]/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-cyan/15 rounded-full blur-[140px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#0077B5] mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Insights</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3" />
            </motion.span>
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-text-primary">Thoughts & </span>
            <span className="gradient-text">Learnings</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Sharing knowledge, celebrating milestones, and connecting with the tech community
          </p>

          {/* View Mode Toggle */}
          {/* <motion.div
            className="inline-flex items-center gap-2 p-1.5 rounded-full glass"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button
              onClick={() => setViewMode('carousel')}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                viewMode === 'carousel'
                  ? 'bg-gradient-to-r from-[#0077B5] to-accent-cyan text-white'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              Carousel
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                viewMode === 'grid'
                  ? 'bg-gradient-to-r from-[#0077B5] to-accent-cyan text-white'
                  : 'text-text-secondary hover:text-text-primary'
              )}
            >
              Grid View
            </button>
          </motion.div> */}
        </motion.div>

        {/* Carousel View */}
        <AnimatePresence mode="wait">
          {/* Grid View */}
          {viewMode === 'grid' && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
              {linkedinPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <LinkedInCard
                    post={post}
                    isExpanded={expandedPost === post.id}
                    onToggleExpand={() =>
                      setExpandedPost(expandedPost === post.id ? null : post.id)
                    }
                    formatNumber={formatNumber}
                    formatDate={formatDate}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        {/* <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            { label: 'Total Posts', value: linkedinPosts.length.toString() + '+', icon: Linkedin },
            { label: 'Total Likes', value: formatNumber(linkedinPosts.reduce((acc, p) => acc + p.likes, 0)), icon: Heart },
            { label: 'Comments', value: formatNumber(linkedinPosts.reduce((acc, p) => acc + p.comments, 0)), icon: MessageCircle },
            { label: 'Shares', value: formatNumber(linkedinPosts.reduce((acc, p) => acc + p.shares, 0)), icon: Share2 },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-2xl glass"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-[#0077B5]/20 to-accent-cyan/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-[#0077B5]" />
              </div>
              <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#0077B5] to-[#00A0DC] text-white font-medium overflow-hidden relative"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00A0DC] to-accent-cyan"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

// LinkedIn Card Component
interface LinkedInCardProps {
  post: typeof linkedinPosts[0]
  isExpanded: boolean
  onToggleExpand: () => void
  formatNumber: (num: number) => string
  formatDate: (date: string) => string
  featured?: boolean
}

function LinkedInCard({
  post,
  isExpanded,
  onToggleExpand,
  formatNumber,
  formatDate,
  featured = false,
}: LinkedInCardProps) {
  const TypeIcon = postTypeIcons[post.type as keyof typeof postTypeIcons] || Zap
  const colorClass = postTypeColors[post.type as keyof typeof postTypeColors] || 'from-primary to-accent-cyan'

  return (
    <motion.div
      className={cn(
        'group relative rounded-2xl glass overflow-hidden transition-all duration-500',
        featured ? 'p-8' : 'p-6',
        'hover:shadow-2xl hover:shadow-[#0077B5]/10'
      )}
      whileHover={{ y: -5 }}
    >
      {/* Gradient Border Effect */}
      <div className={cn(
        'absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500',
        colorClass
      )} />

      {/* Header */}
      <div className="relative flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Profile Avatar */}
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0077B5] to-accent-cyan p-0.5">
              <div className="w-full h-full rounded-full bg-background-secondary flex items-center justify-center">
                <span className="text-lg font-bold text-primary">S</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0077B5] flex items-center justify-center">
              <Linkedin className="w-3 h-3 text-white" />
            </div>
          </div>

          <div>
            <h4 className="font-medium text-text-primary">Sameer Khan</h4>
            <p className="text-xs text-text-muted">{formatDate(post.date)}</p>
          </div>
        </div>

        {/* Post Type Badge */}
        <div className={cn(
          'flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r text-white text-xs font-medium',
          colorClass
        )}>
          <TypeIcon className="w-3 h-3" />
          <span className="capitalize">{post.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative mb-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={isExpanded ? 'full' : 'preview'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              'text-text-secondary leading-relaxed whitespace-pre-line line-clamp-3',
              featured ? 'text-base' : 'text-sm'
            )}
          >
            {isExpanded ? post.fullContent : post.content}
          </motion.p>
        </AnimatePresence>

        {/* {post.fullContent !== post.content && (
          <button
            onClick={onToggleExpand}
            className="mt-2 text-sm text-primary hover:text-accent-cyan transition-colors font-medium"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )} */}
      </div>

      {/* Image Preview */}
      {post.image && (
        <motion.div
          className={cn(
            'relative rounded-xl overflow-hidden mb-4 bg-gradient-to-br',
            colorClass,
            featured ? 'aspect-video' : 'aspect-[16/10]'
          )}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/80">
              <Linkedin className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="text-sm opacity-70">Post Preview</p>
            </div>
          </div>
          
          {/* Uncomment when you have actual images */}
          <Image
            src={post.image}
            alt="LinkedIn Post"
            fill
            className="object-cover"
          />
        </motion.div>
      )}

      {/* Engagement Stats */}
      <div className="relative flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-6">
          <motion.div
            className="flex items-center gap-2 text-text-muted hover:text-red-400 transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium">{formatNumber(post.likes)}</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-text-muted hover:text-accent-cyan transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">{formatNumber(post.comments)}</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 text-text-muted hover:text-accent-green transition-colors cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium">{formatNumber(post.shares)}</span>
          </motion.div>
        </div>

        <motion.a
          href={post.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View Post</span>
          <ExternalLink className="w-3 h-3" />
        </motion.a>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 119, 181, 0.15), transparent 50%)',
        }}
      />
    </motion.div>
  )
}