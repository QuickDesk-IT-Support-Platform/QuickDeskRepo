import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "@tanstack/react-router"

export function HeroSection() {
  const navigate = useNavigate()
  const words = ["support", "collaboration", "automation", "efficiency"]
  const [currentWord, setCurrentWord] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  // Efeito de escrita
  useEffect(() => {
    const current = words[currentWord]
    const speed = isDeleting ? 60 : 120

    const timeout = setTimeout(() => {
      setDisplayText(prev =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      )

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false)
        setCurrentWord((prev) => (prev + 1) % words.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWord])

  // Cursor piscante
  useEffect(() => {
    const interval = setInterval(() => setBlink(prev => !prev), 500)
    return () => clearInterval(interval)
  }, [])

  const cards = [
    {
      title: "Ticket Management",
      text: "Centralize all support requests in one place. Track, prioritize, and resolve with clarity.",
    },
    {
      title: "Collaboration",
      text: "Facilitate teamwork by assigning tasks, commenting on tickets, and improving communication.",
    },
    {
      title: "Automation",
      text: "Save time with smart automation that categorizes, routes, and escalates requests automatically.",
    },
    {
      title: "Customer Insights",
      text: "Analyze performance metrics and user feedback to continuously improve your service quality.",
    },
    {
      title: "Multi-Department Integration",
      text: "Whether it's IT, HR, or Operations — manage support flows across departments seamlessly.",
    },
    {
      title: "Notifications & Alerts",
      text: "Stay updated in real-time with smart alerts and progress updates for each ticket.",
    },
    {
      title: "Knowledge Base",
      text: "Empower users to solve common issues faster through a self-service portal and FAQs.",
    },
    {
        title: "Customizable Workflows",
        text: "Adapt QuickDesk to your team's unique processes with flexible workflow configurations.",
    },
    {
        title: "Secure & Compliant",
        text: "Built with top-tier security measures to protect your data and ensure compliance with industry standards.",
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-orange-50 to-white py-24 px-8 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl text-center"
      >
        <h1 className="text-5xl font-bold text-gray-900 leading-tight">
          We simplify{" "}
          <span className="text-orange-600">
            {displayText}
            <span className={`transition-opacity ${blink ? "opacity-100" : "opacity-0"}`}>|</span>
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          QuickDesk transforms how teams handle support. Streamline communication, automate workflows,
          and elevate user satisfaction — all from one unified platform.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate({ to: "/services/indexServices" })}
          className="mt-8 px-6 py-3 bg-orange-600 text-white font-semibold rounded-full shadow-md hover:bg-orange-500 transition"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* GRID de CARDS */}
      <div className="mt-20 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`p-6 rounded-lg shadow-md bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
              i % 2 === 0 ? "mt-0" : "mt-8"
            }`}
          >
            <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
            <p className="mt-3 text-gray-600 text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
