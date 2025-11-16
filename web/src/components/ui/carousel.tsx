import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"

interface CarouselItem {
  id: number
  title: string
  image: string
}

interface CarouselProps {
  items: CarouselItem[]
}

export function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const total = items.length

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
  const handleNext = () => setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1))

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 4000) // muda de slide a cada 2 segundos

    return () => clearInterval(interval)
  }, [activeIndex]) // dependência: refaz o loop sempre que muda o slide

  return (
    <div className="relative w-full max-w-[1500px] h-[650px] overflow-hidden rounded-3xl shadow-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-br from-indigo-50 to-sky-100">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={items[activeIndex].id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={items[activeIndex].image}
            alt={items[activeIndex].title}
            className="w-full h-full object-cover rounded-3xl"
          />

          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-start justify-start p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h2
              className="text-white text-6xl font-extrabold drop-shadow-lg leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 380 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {items[activeIndex].title}
            </motion.h2>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Botões */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-sky-700 hover:text-sky-900 rounded-full p-1.5 shadow-md backdrop-blur-sm transition"
      >
        <ArrowBigLeft />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-sky-700 hover:text-sky-900 rounded-full p-1.5 shadow-md backdrop-blur-sm transition"
      >
        <ArrowBigRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {items.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === i
                ? "bg-sky-500 scale-125 shadow-md"
                : "bg-white/70 hover:bg-sky-300"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  )
}
