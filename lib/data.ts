// lib/data.ts
import {
  Code2,
  Server,
  Database,
  Cloud,
  Brain,
  GitBranch,
  Layers,
  Zap,
  Shield,
  Terminal,
  Cpu,
  Globe,
} from 'lucide-react'

import codewayImg from "@/app/assets/projects/codeway.png"
import studybyteImg from "@/app/assets/projects/studybyte.png"
import samtubeImg from "@/app/assets/projects/samtube.png"

import amuLogo from "@/app/assets/logo/amu.png"
import schoolLogo from "@/app/assets/logo/school.png"
import cssLogo from "@/app/assets/logo/css.png"
import dsLogo from "@/app/assets/logo/ds.png"

export const personalInfo = {
  name: 'Sameer',
  title: 'Full Stack Developer',
  email: 'sameerkhan.cse1@gmail.com',
  phone: '+919412803911',
  location: 'Noida, Uttar Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/sameerkhn/',
  github: 'https://github.com/sameerkhan9412',
  portfolio: 'https://portfoliobysameer.vercel.app',
  resume: 'https://drive.google.com/file/d/1_Ky8_5W-IkpzoDCGfBNu1sVPCalUOtab/view?usp=sharing',
}

export const experiences = [
  {
    id: 1,
    title: 'Software Engineer Intern',
    company: 'Technopedia Soft',
    location: 'Greater Noida',
    type: 'Onsite',
    period: 'Jan 2026 - Feb 2026',
    description: [
      'Built a scalable healthcare platform with Next.js frontend and Node.js backend supporting appointment scheduling and e-pharmacy services.',
      'Architected secure backend modules including authentication, authorization, and protected APIs.',
      'Engineered a doctor wallet module with commission calculation, transaction history, and controlled payout management.',
      'Integrated secure payment workflows and optimized database queries for high-performance transaction handling.',
      'Collaborated directly with clients to gather requirements and translate business workflows into scalable technical solutions.',
    ],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'JWT', 'Payment Gateway'],
    color: 'from-primary to-accent-cyan',
  },
  {
    id: 2,
    title: 'Junior Software Engineer Intern',
    company: 'Sofyrus Technologies',
    location: 'Aligarh',
    type: 'Onsite',
    period: 'Sep 2025 - Dec 2025',
    description: [
      'Contributed to 3 production-level projects, including migrating a healthcare admin dashboard from ToolJet to React.js.',
      'Developed and optimized features using React.js, Next.js, Node.js, and TypeScript.',
      'Hands-on experience in API integration, Docker, debugging, and CI/CD pipelines.',
      'Collaborated with stakeholders and cross-functional teams using Swagger and GitHub.',
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Docker', 'CI/CD', '.NET'],
    color: 'from-accent-purple to-accent-pink',
  },
  {
    id: 3,
    title: 'Full Stack Web Developer Intern',
    company: 'Digiworld 360 Solutions',
    location: 'Aligarh',
    type: 'Onsite',
    period: 'Jan 2025 - June 2025',
    description: [
      'Developed and maintained MERN stack applications for multiple client-based projects.',
      'Built scalable frontend interfaces using React.js and robust backend APIs with Node.js, Express.js, and MongoDB.',
      'Collaborated with clients and internal teams to deliver features and deploy production-ready solutions.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    color: 'from-accent-cyan to-accent-green',
  },
]

export const skills = {
  languages: {
    title: 'Languages',
    icon: Code2,
    items: [
      { name: 'JavaScript', level: 70 },
      { name: 'TypeScript', level: 50 },
      { name: 'C/C++', level: 40 },
      { name: 'Java', level: 60 },
      { name: 'HTML/CSS', level: 80 },
    ],
  },
  frontend: {
    title: 'Frontend',
    icon: Layers,
    items: [
      { name: 'React.js', level: 85 },
      { name: 'Next.js', level: 60 },
      { name: 'Redux Toolkit', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 90 },
    ],
  },
  backend: {
    title: 'Backend',
    icon: Server,
    items: [
      { name: 'Node.js', level: 70 },
      { name: 'Express.js', level: 90 },
      { name: 'REST API', level: 80 },
      { name: 'JWT Auth', level: 82 },
      { name: 'Swagger', level: 80 },
    ],
  },
  database: {
    title: 'Database',
    icon: Database,
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 75 },
      { name: 'Redis', level: 70 },
      { name: 'Mongoose', level: 80 },
    ],
  },
  devops: {
    title: 'DevOps & Cloud',
    icon: Cloud,
    items: [
      { name: 'Docker', level: 70 },
      { name: 'GitHub Actions', level: 70 },
      { name: 'AWS EC2', level: 65 },
      { name: 'CI/CD', level: 70 },
    ],
  },
  tools: {
    title: 'Tools',
    icon: Terminal,
    items: [
      { name: 'Git/GitHub', level: 80 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 45 },
    ],
  },
}

export const projects = [
  {
    id: 1,
    title: 'The Codeway',
    subtitle: 'Interactive Coding & Practice Platform',
    description: 'Full-stack interactive coding platform with real-time code execution, AI-based interview simulation, DSA Visualizer, coding contests, and doubt forum.',
    image: codewayImg,
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Judge0 API', 'OpenAI API'],
    features: [
      'Real-time code execution with Judge0',
      'AI-based interview simulation',
      'DSA Visualizer for learning',
      'Coding contests & leaderboards',
      'Doubt forum with AI assistance',
      'Role-based dashboards',
      'Multi-language support',
      'Payment gateway integration',
    ],
    liveUrl: 'https://the-codeway.vercel.app/',
    githubUrl: 'https://github.com/Sameerkhan9412/The-Codeway',
    color: 'from-primary via-accent-cyan to-accent-purple',
    featured: true,
  },
  {
    id: 2,
    title: 'The StudyByte',
    subtitle: 'Full Stack Online EdTech Platform',
    description: 'Scalable ed-tech platform with role-based dashboards for instructors and students, used by 100+ mock users.',
    image: studybyteImg,
    technologies: ['React', 'Redux Toolkit', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Razorpay'],
    features: [
      'Role-based dashboards',
      'OTP verification & JWT auth',
      'Email-based password reset',
      'Course management system',
      'Earnings tracking',
      'Razorpay payment integration',
      'Automated email notifications',
      'Progress tracking',
    ],
    liveUrl: 'https://studybyte.vercel.app/',
    githubUrl: 'https://github.com/Sameerkhan9412/StudyByte',
    videoUrl: 'https://studybyte.vercel.app/',
    color: 'from-accent-purple via-accent-pink to-primary',
    featured: true,
  },
  {
    id: 3,
    title: 'Video Streaming Platform',
    subtitle: 'YouTube-like Web Application',
    description: 'Responsive video streaming platform with real-time search suggestions and 60% optimized API calls.',
    image: samtubeImg,
    technologies: ['React.js', 'Redux Toolkit', 'TailwindCSS', 'Node.js', 'YouTube APIs'],
    features: [
      'Real-time search suggestions',
      '60% reduced API calls',
      'Search caching & debouncing',
      'Static live chat',
      'Video download feature',
      'Dark/Light theme toggle',
      'Voice search',
      'Video recommendations',
    ],
    liveUrl: 'https://samtube-youtube-clone.vercel.app/',
    githubUrl: 'https://github.com/Sameerkhan9412/Youtube-Clone-Using-React',
    videoUrl: '#',
    color: 'from-accent-cyan via-accent-blue to-primary',
    featured: true,
  },
]

export const education = [
  {
    id: 1,
    degree: 'Master of Computer Application (MCA)',
    institution: 'Aligarh Muslim University',
    location: 'Aligarh, Uttar Pradesh, India',
    period: 'Aug 2024 - May 2026',
    grade: 'CGPA: 8.0',
    logo: amuLogo,
    website:"https://www.amu.ac.in/"
  },
  {
    id: 2,
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Dharma Samaj College',
    location: 'Aligarh, Uttar Pradesh, India',
    period: 'June 2020 - Aug 2023',
    grade: '75%',
    logo: dsLogo,
    website:"https://dscaligarh.ac.in/"
  },
  {
    id: 3,
    degree: 'Intermediate ',
    institution: 'H.I Inter College',
    location: 'Aligarh, Uttar Pradesh, India',
    period: 'June 2019 - Aug 2020',
    grade: '70%',
    logo: schoolLogo,
    website:"https://hiintercollege.com"
  },
  {
    id: 4,
    degree: 'High School ',
    institution: 'H.I Inter College',
    location: 'Aligarh, Uttar Pradesh, India',
    period: 'June 2017 - Aug 2018',
    grade: '80%',
    logo: schoolLogo,
    website:"https://hiintercollege.com"
  },
]

export const leadership = [
  {
    id: 1,
    title: 'Training & Placement Cell Coordinator',
    organization: 'Dept. of Computer Science, AMU',
    period: 'Aug 2025 - Present',
    description: [
      'Developed automation workflows using Google Apps Script API, Node.js, and Nodemailer to send automatic company invitations.',
      'Coordinated with companies & the Training & Placement Officer to facilitate recruitment drives, internships and placements.',
    ],
    icon: amuLogo,
  },
  {
    id: 2,
    title: 'Web Development Lead',
    organization: 'Computer Science Society (CSS) Club, AMU',
    period: 'Sep 2025 - Present',
    description: [
      'Designed and led development of CSS Club and AMUHacks 4.0 websites.',
      'Mentoring teams in full-stack development and best practices.',
    ],
    icon: cssLogo,
  },
]

export const achievements = [
  {
    id: 1,
    title: 'Bharatiya Antariksh Hackathon 2025 – ISRO',
    description: 'Developed an automated satellite image change-detection system with offline support and user-friendly visual analytics for non-technical users.',
    link: 'https://certificate.hack2skill.com/user/isrobah25/2025H2S06BAH25-P30133',
    icon: Cpu,
  },
  {
    id: 2,
    title: '300+ DSA Problems Solved',
    description: 'Solved 300+ Data Structure & Algorithm problems across platforms including LeetCode, GeeksforGeeks, and HackerRank.',
    icon: Brain,
  },
  {
    id: 3,
    title: 'Responsive Web Design Certification',
    description: 'Successfully completed 300 hours of Responsive Website Design training through freeCodeCamp.',
    link: 'https://www.freecodecamp.org/certification/Sameer_khan9412/responsive-web-design',
    icon: Code2,
  },
  {
    id: 4,
    title: 'Full Stack Web Development Training',
    description: 'Successfully completed a 6-month Full Stack Web Development training conducted by CodeHelp.',
    link: 'https://learn.codehelp.in/share-certificate?serialno=TVKFVADG',
    icon: Layers,
  },
  {
    id: 4,
    title: 'DevOps Training',
    description: 'Successfully completed a 6-month DevOps training conducted by 100xdevs.',
    link: 'https://generateinvoice.teachx.in/generatecertificate/certificate/harkirat_db/62767/43175/14',
    icon: Layers,
  },
]

export const techStack = [
  'React.js',
  'Next.js',
  'Node.js',
  'TypeScript',
  'MongoDB',
  'Express.js',
  'Redux',
  'Tailwind CSS',
  'Docker',
  'AWS',
  'Git',
  'PostgreSQL',
  'Redis',
  'GraphQL',
  'REST API',
  'JWT',
]

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/sameerkhan9412',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sameerkhn',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:sameerkhan.cse1@gmail.com',
    icon: 'mail',
  },
]

// lib/data.ts (add this to your existing data file)

import post1 from '@/app/assets/1.png'
import post2 from '@/app/assets/2.png'
import post3 from '@/app/assets/3.png'
import post4 from '@/app/assets/4.png'
import post6 from '@/app/assets/6.png'
export const linkedinPosts = [
  {
    id: 1,
    content: "🚀 𝗙𝗶𝗻𝗮𝗹𝗹𝘆, 𝘄𝗲 𝘄𝗿𝗮𝗽𝗽𝗲𝗱 𝘂𝗽 𝗔𝗠𝗨 𝗛𝗮𝗰𝗸 𝟱.𝟬!⁣ What an incredible journey it has been! From planning and coordinating to execution and wrap-up — AMU Hack 5.0 was truly a memorable experience.⁣",
    fullContent: "🚀 Just completed my journey as a Full Stack Developer Intern at MedTech Solutions! Built a healthcare platform serving 10,000+ patients with React.js, Node.js, and MongoDB. Key learnings: scalability, security, and user-centric design. Grateful for this amazing opportunity! #FullStackDeveloper #MERN #Healthcare",
    image: post1,
    likes: 234,
    comments: 45,
    shares: 12,
    date: "2026-02-20",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7431592642590978048/",
    type: "leadership",
  },
  {
    id: 2,
    content: "Honored and Grateful! I’m truly proud to have been part of the Tech Team for AMUHACKS 4.0, a global-level hackathon organized by Computer Science Society (CSS) Club, Aligarh Muslim University (AMU) ",
    fullContent: "💡 5 React.js patterns that improved my code quality by 40%:\n\n1. Custom Hooks for reusable logic\n2. Compound Components for flexibility\n3. Render Props for sharing code\n4. HOCs for cross-cutting concerns\n5. Context API for state management\n\nWhat patterns do you use? #ReactJS #WebDevelopment",
    image: post2,
    likes: 567,
    comments: 89,
    shares: 34,
    date: "2025-05-20",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7325718870072135682/",
    type: "milestone",
  },
  {
    id: 3,
    content: "I’m happy to share, I worked on this 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐂𝐥𝐨𝐧𝐞 𝐰𝐢𝐭𝐡 𝐑𝐞𝐚𝐜𝐭 ,𝐑𝐞𝐝𝐮𝐱 𝐓𝐨𝐨𝐥𝐤𝐢𝐭 ,𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒, 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐀𝐏𝐈 𝐚𝐧𝐝 𝐍𝐨𝐝𝐞.𝐣𝐬.",
    fullContent: "🎯 Crossed 300+ DSA problems on LeetCode & GeeksforGeeks!\n\nHere's my approach:\n✅ Daily 2-hour practice\n✅ Topic-wise preparation\n✅ Revision of solved problems\n✅ Discussing solutions with peers\n\nConsistency > Intensity\n\n#DSA #Programming #LeetCode",
    image: post3,
    likes: 892,
    comments: 156,
    shares: 67,
    date: "2025-04-7",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7280427317175181312/",
    type: "technical",
  },
  {
    id: 4,
    content: "𝐄𝐱𝐜𝐢𝐭𝐢𝐧𝐠 𝐀𝐧𝐧𝐨𝐮𝐧𝐜𝐞𝐦𝐞𝐧𝐭: 𝐒𝐭𝐮𝐝𝐲𝐁𝐲𝐭𝐞 𝐢𝐬 𝐋𝐢𝐯𝐞! 📚✨ ⁣I'm thrilled to introduce 𝐒𝐭𝐮𝐝𝐲𝐁𝐲𝐭𝐞, a cutting-edge EdTech platform built with the MERN stack that transforms the way 𝐬𝐭𝐮𝐝𝐞𝐧𝐭𝐬 𝐥𝐞𝐚𝐫𝐧 𝐚𝐧𝐝 𝐞𝐝𝐮𝐜𝐚𝐭𝐨𝐫𝐬 𝐭𝐞𝐚𝐜𝐡. 🎓 ⁣✅ 𝐅𝐨𝐫 𝐒𝐭𝐮𝐝𝐞𝐧𝐭𝐬 – Enjoy an interactive, engaging, and accessible learning",
    fullContent: "🌟 Thrilled to lead the Web Development Team at CSS Club, AMU!\n\nTogether, we're:\n🔹 Conducting weekly workshops\n🔹 Building real-world projects\n🔹 Mentoring juniors\n🔹 Organizing hackathons\n\nLet's connect if you want to collaborate! #Leadership #WebDevelopment #Community",
    image: post4,
    likes: 445,
    comments: 78,
    shares: 23,
    date: "2025-01-25",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7308099692054102018/",
    type: "technical",
  },
  {
    id: 5,
    content: "I’m happy to share that I’m starting a new position as Placement Coordinator - HR at Aligarh Muslim University!",
    fullContent: "📚 My journey from BCA to MCA at Aligarh Muslim University:\n\n3 years of:\n• Building 10+ projects\n• 3 internships\n• Leading teams\n• Solving 300+ DSA problems\n\nThe journey continues! #Education #Growth #AMU",
    image: "",
    likes: 678,
    comments: 112,
    shares: 45,
    date: "2025-10-05",
    postUrl: "https://www.linkedin.com/posts/sameerkhn_im-happy-to-share-that-im-starting-a-new-activity-7362654313539649537-_XzX",
    type: "leadership",
  },
  {
    id: 6,
    content: "𝐄𝐱𝐜𝐢𝐭𝐢𝐧𝐠 𝐀𝐧𝐧𝐨𝐮𝐧𝐜𝐞𝐦𝐞𝐧𝐭!⁣ I am humbled and thrilled to share that I have been selected as the 𝐖𝐞𝐛 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭 𝐌𝐞𝐧𝐭𝐨𝐫 for the Computer Science Society (CSS) , Department of Computer Science, Aligarh Muslim University for the academic session 2025–26.⁣",
    fullContent: "⚡ Optimized a React application from 4.2s to 1.1s load time!\n\nTechniques used:\n1. Code splitting with React.lazy()\n2. Image optimization\n3. Memoization with useMemo/useCallback\n4. Virtual scrolling\n5. CDN for static assets\n\n#Performance #React #WebDev",
    image: post6,
    likes: 723,
    comments: 98,
    shares: 56,
    date: "2025-07-18",
    postUrl: "https://www.linkedin.com/posts/sameerkhn_amu-computerscience-mentorship-activity-7368308670729760770-Spm5",
    type: "milestone",
  },
]