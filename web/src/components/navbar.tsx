import { useEffect, useState } from "react"
import { Link ,useNavigate} from "@tanstack/react-router"
import { Button } from "./ui/button"
import { Ticket, LogOut, Settings,  } from "lucide-react"
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
import useAuthStore from "@/Store/auth.store"
export function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const {setIsAuthenticated,setUser}=useAuthStore()
  const navigate=useNavigate();
  const handleLogOut=()=>{
    // Implement your logout logic here
    console.log("Logging out...");
    setIsAuthenticated(false);
    setUser(null);
    navigate({
      to:"/auth/login"
    });
  } 
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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg backdrop-blur-sm"
        >
          <div className="flex items-center justify-between w-full px-7 py-3 transition-all duration-300">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.img
                src={logo}
                alt="QuickDesk Logo"
                className="h-15 ml-23 scale-300 w-auto object-contain transform transition-transform duration-200 group-hover:scale-360"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-col md:flex-row md:items-center md:gap-4">
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
                <DropdownMenuContent align="end" className="w-50 bg-white text-slate-800 shadow-lg">
                  <DropdownMenuItem className="flex flex-row justify-around items-center hover:cursor-pointer">
                    <Link to="/account/settings" className="flex w-full items-center  gap-2">
                        <Settings className="h-4 w-4" /> Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <button className="flex w-full flex-row gap-2 items-center hover:cursor-pointer"
                      onClick={()=>handleLogOut()}
                    >
                     <LogOut className="h-4 w-4"/> Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                className="focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg z-50"
              >
                <div className="flex flex-col gap-2 px-7 py-4">
                  <Button variant="ghost" size="lg" className="text-white/90 hover:text-white w-full justify-start" asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link to="/services/indexServices" className="[&.active]:bg-white/15 [&.active]:text-white">
                      <Ticket className="h-4 w-4 mr-2" />
                      Services
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white/90 hover:text-white w-full justify-start" asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link to="/tickets/myTickets" className="[&.active]:bg-white/15 [&.active]:text-white">
                      <Ticket className="h-4 w-4 mr-2" />
                      My Tickets
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white/90 hover:text-white w-full justify-start" asChild onClick={() => setMobileMenuOpen(false)}>
                    <Link to="/account/settings" className="flex w-full items-center gap-2">
                      <Settings className="h-4 w-4" /> Settings
                    </Link>
                  </Button>
                  <Button variant="ghost" size="lg" className="text-black font-extrabold hover:text-red-700 w-full justify-start" onClick={() => { handleLogOut(); setMobileMenuOpen(false); }}>
                    <LogOut className="h-4 w-4 mr-2 text-white" /> Logout
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
