// app/page.tsx
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Education from '@/components/sections/Education'
import Leadership from '@/components/sections/Leadership'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'
import TechMarquee from '@/components/TechMarquee'
import LinkedInPosts from '@/components/sections/LinkedInPosts'

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Leadership />
      <Achievements />
      <LinkedInPosts/>
      <Contact />
    </>
  )
}