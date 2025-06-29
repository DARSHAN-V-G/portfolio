"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Download, ExternalLink, Github, Mail, MapPin, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl text-gray-900 dark:text-white"
            >
              Darshan V G
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {["Home", "Projects", "Skills", "Achievements", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-gray-800 dark:text-gray-200"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:flex items-center space-x-2 bg-transparent border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-800"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-400 dark:bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-500 dark:bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gray-300 dark:bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-gray-700 to-black dark:from-gray-300 dark:to-white bg-clip-text text-transparent">
                Darshan V G
              </span>{" "}
              👋
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8"
            >
              <TypewriterText texts={["Full-stack Developer", "AI/ML Explorer", "Hackathon Enthusiast"]} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:from-gray-700 hover:to-gray-900 dark:hover:from-gray-100 dark:hover:to-gray-300"
              >
                Explore Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">A showcase of my recent work and contributions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory key={category.title} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Milestones and recognitions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.title} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Feel free to reach out for collaborations or just a friendly hello
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((contact, index) => (
                <ContactCard key={contact.label} contact={contact} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2024 Darshan V G. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

// Typewriter Effect Component
function TypewriterText({ texts }: { texts: string[] }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex]

        if (isDeleting) {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        } else {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }

        if (!isDeleting && currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000)
        } else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentTextIndex, texts])

  return (
    <span>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// Project Card Component - Batman themed
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-500/20 dark:hover:shadow-gray-900/50 hover:-translate-y-2">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-300/50 dark:from-gray-700/20 dark:to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-600 dark:to-gray-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm -z-10"></div>

        <div className="relative p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-black dark:from-gray-300 dark:to-white flex items-center justify-center text-white dark:text-black font-bold text-lg shadow-lg">
              {project.title.charAt(0)}
            </div>
            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-3 h-3 rounded-full bg-gray-400"></div>
              <div className="w-3 h-3 rounded-full bg-gray-500"></div>
              <div className="w-3 h-3 rounded-full bg-gray-600"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech: string, techIndex: number) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:border-gray-300 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300"
                  style={{ animationDelay: `${techIndex * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 mt-auto">
            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black hover:border-gray-800 dark:hover:border-gray-200 transition-all duration-300 group/btn">
              <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-medium">Code</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white text-white dark:text-black rounded-xl hover:from-gray-700 hover:to-gray-900 dark:hover:from-gray-100 dark:hover:to-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl group/btn">
              <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-medium">Demo</span>
            </button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
          <div
            className="absolute bottom-4 left-4 w-1 h-1 bg-gray-600 dark:bg-gray-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>
    </motion.div>
  )
}

// Skill Category Component
function SkillCategory({ category, index }: { category: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
            <span className="text-2xl">{category.icon}</span>
            <span>{category.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill: string) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-sm border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Achievement Card Component
function AchievementCard({ achievement, index }: { achievement: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300">
        <CardHeader className="text-center">
          <div className="text-4xl mb-2">{achievement.icon}</div>
          <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.title}</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">{achievement.description}</CardDescription>
        </CardHeader>
      </Card>
    </motion.div>
  )
}

// Contact Card Component
function ContactCard({ contact, index }: { contact: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer">
        <CardContent className="p-6 text-center">
          <div className="text-3xl mb-3 text-gray-600 dark:text-gray-400">{contact.icon}</div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{contact.label}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{contact.value}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Data
const projects = [
  {
    title: "Kriya Bot",
    description: "RAG chatbot with HuggingFace and Llama3 for intelligent conversations",
    tech: ["Python", "HuggingFace", "Llama3", "RAG"],
  },
  {
    title: "Codopoly",
    description: "Auction and debugging game portal with competitive programming",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Gitogether Event Manager",
    description: "Comprehensive event management system for tech communities",
    tech: ["React", "Express", "PostgreSQL", "JWT"],
  },
  {
    title: "CSRC Testing Platform",
    description: "Automated testing platform for computer science courses",
    tech: ["Node.js", "Docker", "MongoDB", "Jest"],
  },
  {
    title: "History Revealed",
    description: "Interactive 3D historical experience with AI narration",
    tech: ["Three.js", "ElevenLabs", "React", "WebGL"],
  },
  {
    title: "Infinitum Registration",
    description: "Event registration system with real-time updates",
    tech: ["Supabase", "Docker", "React", "Tailwind"],
  },
  {
    title: "Quizer Platform",
    description: "Interactive quiz platform with real-time scoring",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "Nextech CMS",
    description: "Content management system for tech events",
    tech: ["Flask", "MongoDB", "Python", "Bootstrap"],
  },
]

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "React", "Vite", "Tailwind", "Figma"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Supabase"],
  },
  {
    title: "DevOps",
    icon: "🚀",
    skills: ["Docker", "Grafana", "Render", "Winston"],
  },
  {
    title: "AI/ML",
    icon: "🤖",
    skills: ["Python", "Regression", "RAG", "Gradient Descent"],
  },
]

const achievements = [
  {
    title: "NexTech 2024 Winner",
    description: "First place in the annual tech competition",
    icon: "🥇",
  },
  {
    title: "EY Gen AI Workshop",
    description: "Completed RAG implementation workshop",
    icon: "🧠",
  },
  {
    title: "InternEzy Certificates",
    description: "UI/UX & Full-stack development certifications",
    icon: "🎓",
  },
  {
    title: "Sociotech Hackathon",
    description: "Participated in social technology hackathon",
    icon: "🎯",
  },
  {
    title: "Event Management Lead",
    description: "Led a team of 8 for event management system",
    icon: "🎛️",
  },
  {
    title: "LeetCode 1680+",
    description: "Solved 1680+ coding problems",
    icon: "💻",
  },
]

const contactInfo = [
  {
    label: "Email",
    value: "darshanguna22@gmail.com",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/darshan-v-g",
    icon: <Linkedin className="w-6 h-6" />,
  },
  {
    label: "GitHub",
    value: "github.com/DARSHAN-V-G",
    icon: <Github className="w-6 h-6" />,
  },
  {
    label: "Location",
    value: "Coimbatore, India",
    icon: <MapPin className="w-6 h-6" />,
  },
]
