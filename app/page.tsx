"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Clock,
  ExternalLink,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Calendar,
  FileText
} from "lucide-react";
import { resumeData } from "@/lib/resume-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Tech stack with icon paths
const techStack = [
  { 
    name: "Next.js", 
    icon: "/icons/Nextjs.svg",
    bgColor: "from-slate-400/20 to-slate-600/20"
  },
  { 
    name: "React", 
    icon: "/icons/React_Logo_0.svg",
    bgColor: "from-cyan-400/20 to-blue-500/20"
  },
  { 
    name: "TypeScript", 
    icon: "/icons/Typescript.svg",
    bgColor: "from-blue-400/20 to-blue-600/20"
  },
  { 
    name: "Node.js", 
    icon: "/icons/Nodejs.svg",
    bgColor: "bg-white",
    customBg: true
  },
  { 
    name: "Python", 
    icon: "/icons/Python.svg",
    bgColor: "from-yellow-400/20 to-blue-500/20"
  },
  { 
    name: "PostgreSQL", 
    icon: "/icons/postgresql-database-logo-application-software-computer-software-mysql-logo.jpg",
    bgColor: "from-blue-500/20 to-indigo-600/20",
    isJpg: true
  },
  { 
    name: "Supabase", 
    icon: "/icons/Supabase.svg",
    bgColor: "from-emerald-400/20 to-green-500/20"
  },
  { 
    name: "Docker", 
    icon: "/icons/Docker.svg",
    bgColor: "from-blue-400/20 to-cyan-500/20"
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* SECTION 1: HOME / HERO */}
      <section id="home" className="min-h-screen py-12 px-6 sm:px-8 lg:px-12 flex items-center">
        <motion.div
          className="max-w-7xl mx-auto w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Bento Grid - Hero Section */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 p-4">
          
          {/* Profile Block - 2 cols, 2 rows (Top Left) */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-2 md:row-span-2"
          >
            <Card 
              className="h-full w-full p-8 flex flex-col group"
              animated={false}
            >
              {/* Top section - Profile Picture (centered, taking up half the card) */}
              <div className="flex items-center justify-center mb-6 flex-1 min-h-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 shadow-lg">
                  <Image
                    src="/icons/Profile Picture.jpg"
                    alt={resumeData.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
              </div>

              {/* Middle section - Name, Title, Location */}
              <div className="space-y-3 mb-6">
                <div className="space-y-2">
                  <h1 className="text-5xl font-bold text-zinc-100 leading-tight tracking-tight">
                    {resumeData.name}
                  </h1>
                  <p className="text-xl text-cyan-400 font-medium tracking-tight">
                    Full Stack Engineer
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-zinc-500">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm tracking-tight">{resumeData.location}</span>
                </div>
              </div>

              {/* Bottom section - Description and Buttons */}
              <div className="space-y-4 mt-auto">
                <p className="text-zinc-400 leading-relaxed tracking-tight">
                  Software Engineering student at SJSU building scalable full-stack 
                  applications with modern web technologies. Passionate about creating 
                  impactful solutions for nonprofits and startups.
                </p>
                
                <div className="flex gap-3">
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Button variant="primary" size="md" className="px-5 py-2.5">
                      View Work
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <Button variant="secondary" size="md" className="px-5 py-2.5">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Tech Stack Block - 2 cols, 1 row (Top Right) */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-2 md:row-span-1"
          >
            <Card 
              className="h-full w-full py-6 px-6 overflow-hidden group"
              animated={false}
            >
              <div className="space-y-4 h-full flex flex-col">
                <h3 className="text-lg font-semibold text-zinc-100 tracking-tight">Tech Stack</h3>
                
                {/* Marquee container */}
                <div className="flex-1 flex items-center overflow-hidden">
                  <motion.div
                    className="flex gap-3"
                    animate={{
                      x: [0, -1000],
                    }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                      },
                    }}
                  >
                    {/* Duplicate for seamless loop */}
                    {[...techStack, ...techStack].map((tech, index) => (
                      <div
                        key={`${tech.name}-${index}`}
                        className="flex-shrink-0 group"
                      >
                        <div className={`
                          w-24 h-24 rounded-xl
                          ${tech.customBg ? tech.bgColor : `bg-gradient-to-br ${tech.bgColor}`}
                          flex items-center justify-center
                          border border-white/10
                          transition-transform hover:scale-110
                          p-3
                          relative
                          cursor-pointer
                        `}
                        title={tech.name}
                        >
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={tech.name === "Python" ? 80 : 72}
                            height={tech.name === "Python" ? 80 : 72}
                            className={`object-contain ${tech.name === "Python" ? "w-20 h-20" : "w-full h-full"}`}
                            unoptimized
                          />
                          {/* Tooltip */}
                          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-md text-xs text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-20">
                            {tech.name}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Education Card - 1 col, 1 row */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-1 md:row-span-1"
          >
            <Card 
              className="h-full w-full p-4 flex flex-col items-center justify-center group bg-gradient-to-br from-blue-600/20 to-yellow-500/20"
              animated={false}
            >
              <div className="w-20 h-20 mb-2 flex items-center justify-center">
                <Image
                  src="/icons/San-Jose-State-Spartans-logo.png"
                  alt="SJSU Spartans Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="text-base font-semibold text-zinc-100 tracking-tight mb-0.5">
                SJSU
              </p>
              <p className="text-xs text-zinc-400 tracking-tight">
                Class of 2027
              </p>
            </Card>
          </motion.div>

          {/* GitHub Social - 1 col, 1 row */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-1 md:row-span-1"
          >
            <a
              href={`https://${resumeData.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <Card 
                className="h-full w-full p-6 flex flex-col items-center justify-center group cursor-pointer"
                animated={false}
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 group-hover:bg-white/10 transition-colors duration-300">
                  <Github className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-zinc-100 tracking-tight">GitHub</p>
                <p className="text-xs text-zinc-500 tracking-tight">@Jaabir-Ahamed</p>
              </Card>
            </a>
          </motion.div>

          {/* Location & Time - 1 col, 1 row */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-1 md:row-span-1"
          >
            <Card 
              className="h-full w-full p-6 flex flex-col justify-center group"
              animated={false}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100 tracking-tight">
                      San Jose, CA
                    </p>
                    <p className="text-xs text-zinc-500 tracking-tight">United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-100 tracking-tight">
                      PST (UTC-8)
                    </p>
                    <p className="text-xs text-zinc-500 tracking-tight">Pacific Time</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Status (Available) - 1 col, 1 row */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-1 md:row-span-1"
          >
            <Card 
              className="h-full w-full p-6 flex flex-col justify-center group"
              animated={false}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <p className="text-sm font-medium text-zinc-100 tracking-tight">
                    Available for Work
                  </p>
                </div>
                
                <div className="pt-2">
                  <p className="text-xs text-zinc-500 tracking-tight">Graduating</p>
                  <p className="text-sm text-zinc-300 font-medium tracking-tight">
                    June 2027
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* LinkedIn Social - 1 col, 1 row */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-1 md:row-span-1"
          >
            <a
              href={`https://${resumeData.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <Card 
                className="h-full w-full p-6 flex flex-col items-center justify-center group cursor-pointer"
                animated={false}
              >
                <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Linkedin className="w-8 h-8 text-blue-400" />
                </div>
                <p className="text-sm font-medium text-zinc-100 tracking-tight">LinkedIn</p>
                <p className="text-xs text-zinc-500 tracking-tight">Connect</p>
              </Card>
            </a>
          </motion.div>

          {/* Resume Card - 1 col, 1 row */}
          <motion.div
            variants={staggerItem}
            className="md:col-span-1 md:row-span-1"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
            >
              <Card 
                className="h-full w-full p-6 flex flex-col items-center justify-center group cursor-pointer"
                animated={false}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-3 group-hover:bg-purple-500/20 group-hover:border-purple-500/40 transition-colors duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FileText className="w-8 h-8 text-purple-400" />
                </motion.div>
                <p className="text-sm font-medium text-zinc-100 tracking-tight">Resume</p>
                <p className="text-xs text-zinc-500 tracking-tight">View & Download</p>
              </Card>
            </a>
          </motion.div>

          </div>
        </motion.div>
      </section>

      {/* SECTION 2: PROJECTS */}
      <section id="projects" className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-zinc-100 tracking-tight mb-2">
              Featured Projects
            </h2>
            <p className="text-zinc-400 tracking-tight">
              Building impactful solutions with modern web technologies
            </p>
          </motion.div>

          {/* BrainDeck Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <a
              href="https://brain-deck2.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Card 
                className="w-full p-8 flex flex-col group relative cursor-pointer"
                animated={false}
              >
                {/* Header with title */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-zinc-100 tracking-tight">
                      BrainDeck
                    </h3>
                    <span className="text-sm px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 tracking-tight flex items-center gap-2">
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </span>
                  </div>
                  <p className="text-base text-zinc-400 tracking-tight mb-3">
                    AI Study Decks from PDFs
                  </p>
                  
                  {/* Description */}
                  <p className="text-base text-zinc-400 tracking-tight leading-relaxed">
                    A full-stack RAG application built with Next.js and Supabase. It uses vector embeddings and Gemini AI to parse unstructured PDF data into structured Q&A pairs for efficient studying.
                  </p>
                </div>

                {/* Iframe Wrapper - Mini Browser */}
                <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-900 aspect-video">
                  <iframe
                    src="https://brain-deck2.vercel.app/"
                    className="absolute top-0 left-0 w-[200%] h-[200%] border-none pointer-events-none"
                    style={{
                      transform: 'scale(0.5)',
                      transformOrigin: 'top left',
                      width: '200%',
                      height: '200%',
                    }}
                    title="BrainDeck Live Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-top-navigation"
                    loading="lazy"
                  />
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Next.js", "Supabase", "Gemini AI", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1.5 rounded-lg bg-white/5 text-zinc-300 border border-white/10 tracking-tight"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </a>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCE */}
      <section id="experience" className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-zinc-100 tracking-tight mb-2">
              Work Experience
            </h2>
            <p className="text-zinc-400 tracking-tight">
              Professional journey and contributions
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Experience 1: Mainspring Energy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card 
                className="w-full p-8"
                animated={false}
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-blue-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-100 tracking-tight mb-1">
                          Software Engineering Intern (University Project)
                        </h3>
                        <p className="text-base text-cyan-400 font-medium tracking-tight">
                          Mainspring Energy
                        </p>
                        <p className="text-sm text-zinc-500 tracking-tight">Remote</p>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm tracking-tight">Jan 2025 - May 2025</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      <li className="text-zinc-400 tracking-tight leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>Developed Python & FastAPI service translating between HTTP and DDS, cutting integration time for new data types by 60% and manual conversion errors by 80%.</span>
                      </li>
                      <li className="text-zinc-400 tracking-tight leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>Implemented connection pooling and request batching, decreasing latency on frequent operations by 30% and increasing distributed-system throughput.</span>
                      </li>
                      <li className="text-zinc-400 tracking-tight leading-relaxed flex items-start gap-2">
                        <span className="text-cyan-400 mt-1.5">•</span>
                        <span>Collaborated with platform team to containerize the service with Docker and add health checks / metrics endpoints for observability.</span>
                      </li>
                    </ul>

                    {/* Tech/Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {["Python", "FastAPI", "Docker", "DDS", "REST API"].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/10 tracking-tight"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Experience 2: Salam Food Pantry */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card 
                className="w-full p-8"
                animated={false}
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                      <Briefcase className="w-7 h-7 text-emerald-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-100 tracking-tight mb-1">
                          Software Engineer
                        </h3>
                        <p className="text-base text-cyan-400 font-medium tracking-tight">
                          Salam Food Pantry
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm tracking-tight">Present</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 tracking-tight leading-relaxed mb-4">
                      Building full-stack web applications to streamline operations and improve service delivery for nonprofit organizations. Focused on creating scalable solutions with modern technologies.
                    </p>

                    {/* Tech/Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/10 tracking-tight"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 4: LEADERSHIP */}
      <section id="leadership" className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-zinc-100 tracking-tight mb-2">
              Leadership & Activities
            </h2>
            <p className="text-zinc-400 tracking-tight">
              Leading teams and driving innovation
            </p>
          </motion.div>

          {/* Leadership Items */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card 
                className="w-full p-8"
                animated={false}
              >
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-purple-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-100 tracking-tight mb-1">
                          Project Manager
                        </h3>
                        <p className="text-base text-cyan-400 font-medium tracking-tight">
                          SJSU High Speed Autonomous Plane (H.S.A.P.)
                        </p>
                        <p className="text-sm text-zinc-500 tracking-tight">San Jose, CA</p>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm tracking-tight">Aug 2025 - Present</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 tracking-tight leading-relaxed mb-4">
                      Lead multidisciplinary team of 20 using GitHub Projects and Jira to plan sprints, track issues, and deliver iterations on schedule.
                    </p>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {["Project Management", "GitHub Projects", "Jira", "Agile", "Team Leadership"].map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-md bg-white/5 text-zinc-400 border border-white/10 tracking-tight"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTACT */}
      <section id="contact" className="py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card 
              className="w-full p-12"
              animated={false}
            >
              <h2 className="text-4xl font-bold text-zinc-100 tracking-tight mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-lg text-zinc-400 tracking-tight leading-relaxed mb-8 max-w-xl mx-auto">
                I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>

              {/* Contact Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="inline-flex"
                >
                  <Button variant="primary" size="lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                </a>
                <a
                  href={`https://${resumeData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="secondary" size="lg">
                    <Linkedin className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-8 border-t border-white/10">
                <a
                  href={`https://${resumeData.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={`https://${resumeData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${resumeData.contact.email}`}
                  className="text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
