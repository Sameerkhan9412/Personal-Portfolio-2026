// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import Preloader from '@/components/Preloader'
import SmoothScroll from '@/components/SmoothScroll'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sameerwork.netlify.app/'),
  title: {
    default: 'Sameer Khan | Full Stack Developer | React.js, Next.js, Node.js Expert',
    template: '%s | Sameer Khan',
  },
  description: 'Full Stack Developer experienced in React.js, Next.js, Node.js, and MongoDB with proven experience delivering production-level applications. Expert in API design, performance optimization, Docker, and CI/CD pipelines.',
  keywords: [
    'Full Stack Developer',
    'React.js Developer',
    'Next.js Developer',
    'Node.js Developer',
    'MERN Stack Developer',
    'MongoDB',
    'TypeScript',
    'JavaScript',
    'Web Developer',
    'Software Engineer',
    'Sameer Khan',
    'Portfolio',
    'Frontend Developer',
    'Backend Developer',
    'API Development',
    'Docker',
    'CI/CD',
    'AWS',
    'Aligarh Muslim University',
    'India',
  ],
  authors: [{ name: 'Sameer Khan', url: 'https://sameerwork.netlify.app/' }],
  creator: 'Sameer Khan',
  publisher: 'Sameer Khan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sameerwork.netlify.app/',
    siteName: 'Sameer Khan Portfolio',
    title: 'Sameer Khan | Full Stack Developer',
    description: 'Full Stack Developer experienced in React.js, Next.js, Node.js, and MongoDB. Building production-level applications with modern tech stack.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sameer Khan - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sameer Khan | Full Stack Developer',
    description: 'Full Stack Developer experienced in React.js, Next.js, Node.js, and MongoDB.',
    images: ['/og-image.png'],
    creator: '@sameerkhn',
  },
  alternates: {
    canonical: 'https://sameerwork.netlify.app/',
  },
  category: 'technology',
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sameer Khan',
    url: 'https://sameerwork.netlify.app/',
    image: 'https://sameerwork.vercel.app/profile.jpg',
    sameAs: [
      'https://github.com/sameerkhan9412',
      'https://linkedin.com/in/sameerkhn',
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Technopedia Soft',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Aligarh Muslim University',
    },
    knowsAbout: [
      'React.js',
      'Next.js',
      'Node.js',
      'MongoDB',
      'TypeScript',
      'JavaScript',
      'Docker',
      'AWS',
      'Full Stack Development',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Aligarh',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'India',
    },
    email: 'sameerkhann9412@gmail.com',
  }

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <ScrollProgress />
          <div className="noise" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1a1a2e',
                color: '#fff',
                border: '1px solid #27272a',
              },
            }}
          />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}