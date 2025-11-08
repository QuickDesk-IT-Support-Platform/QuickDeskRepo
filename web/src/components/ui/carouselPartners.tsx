import { useEffect, useRef } from "react"

const partners = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/600px-BMW_logo_%28gray%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Mercedes-Benz_Logo_2010.svg/960px-Mercedes-Benz_Logo_2010.svg.png?20220328172547",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Nike_SB_logo.svg/512px-Nike_SB_logo.svg.png?20241206205516",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Logo_da_Rolex.png/960px-Logo_da_Rolex.png?20210605010030"
]

export function CarouselPartners() {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 0.3 // velocidade

    const scroll = () => {
      scrollAmount += scrollStep
      scrollContainer.scrollLeft = scrollAmount
      if (scrollAmount >= scrollContainer.scrollWidth / 2) scrollAmount = 0
      requestAnimationFrame(scroll)
    }

    const cloned = scrollContainer.innerHTML
    scrollContainer.innerHTML += cloned // duplicar logos para loop infinito
    scroll()

    return () => cancelAnimationFrame(scroll)
  }, [])

  return (
    <div className="relative w-full overflow-hidden py-8 bg-transparent">
      <div
        ref={scrollRef}
        className="flex items-center gap-16 whitespace-nowrap overflow-x-hidden select-none"
      >
        {partners.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Partner logo"
            className="h-10 grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer"
          />
        ))}
      </div>

      {/* Gradiente nas margens para suavizar */}
      <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-gray-50 via-gray-50/60 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-gray-50 via-gray-50/60 to-transparent pointer-events-none" />
    </div>
  )
}
