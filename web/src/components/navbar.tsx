import { useEffect, useState } from "react"
import { Link } from "@tanstack/react-router"
import { Button } from "./ui/button"
import { HomeIcon, Ticket, LogOut, Settings, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu"
import { Avatar, AvatarImage } from "./ui/avatar"
import { motion, AnimatePresence } from "framer-motion"
import logo from "./ui/logo.png"

export function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // A esconder quando desce
        setShow(false)
      } else {
        // A mostrar quando sobe
        setShow(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="top-0 left-0 w-full z-50 bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg backdrop-blur-sm"
        >
          <div className="flex items-center justify-between w-full px-7 py-3 transition-all duration-300">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.img
                src={logo}
                alt="QuickDesk Logo"
                className="h-15 ml-23 scale-400 w-auto object-contain transform transition-transform duration-200 group-hover:scale-360"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
              />
            </Link>

            {/* Links e Avatar */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="lg" className="text-white/90 hover:text-white" asChild>
                <Link to="/" className="[&.active]:bg-white/15 [&.active]:text-white">
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </Button>

              <Button variant="ghost" size="lg" className="text-white/90 hover:text-white" asChild>
                <Link to="/services/indexServices" className="[&.active]:bg-white/15 [&.active]:text-white">
                  <Ticket className="h-4 w-4 mr-2" />
                  Services
                </Link>
              </Button>

              <Button variant="ghost" size="lg" className="text-white/90 hover:text-white" asChild>
                <Link to="/tickets/myTickets" className="[&.active]:bg-white/15 [&.active]:text-white">
                  <Ticket className="h-4 w-4 mr-2" />
                  My Tickets
                </Link>
              </Button>

              {/* Avatar dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="focus:outline-none">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="rounded-full border border-white/40 shadow-md"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@user"
                          className="object-cover"
                        />
                      </Avatar>
                    </motion.div>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48 bg-white text-slate-800 shadow-lg">
                  <DropdownMenuItem className="gap-2">
                    <User className="h-4 w-4" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <Settings className="h-4 w-4" /> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600 gap-2">
                    <LogOut className="h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
