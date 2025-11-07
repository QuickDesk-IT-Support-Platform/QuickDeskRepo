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
import logo from "./ui/logo.png"

export function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-md">
      <div className="flex items-center justify-between w-full px-7 py-3">
        {/* Logo/Brand */}
        <Link to="/" className="flex items-center space-x-2 group transition-transform">
          <img
            src={logo}
            alt="QuickDesk Logo"
            className="h-15 ml-23 scale-400 w-auto object-contain transform transition-transform duration-200 group-hover:scale-360"
          />
        </Link>


        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="lg"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              asChild
            >
              <Link
                to="/"
                activeOptions={{ exact: true }}
                className="[&.active]:bg-white/15 [&.active]:text-white"
              >
                <HomeIcon className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              asChild
            >
              <Link
                to="/services/indexServices"
                activeOptions={{ exact: true }}
                className="[&.active]:bg-white/15 [&.active]:text-white"
              >
                <Ticket className="h-4 w-4 mr-2" />
                Services
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              className="text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              asChild
            >
              <Link
                to="/tickets/myTickets"
                activeOptions={{ exact: true }}
                className="[&.active]:bg-white/15 [&.active]:text-white"
              >
                <Ticket className="h-4 w-4 mr-2" />
                My Tickets
              </Link>
            </Button>
          </div>

          {/* separator */}
          <div className="h-8 w-px bg-white/30 mx-1" />

          {/* Avatar dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* wrapper para animar o avatar */}
              <button className="focus:outline-none">
                <div className="rounded-full transition-transform duration-200 hover:scale-110 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.25)]">
                  <Avatar className="h-10 w-10 border border-white/40">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@user"
                      className="object-cover"
                    />
                  </Avatar>
                </div>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-48 bg-white text-slate-800 shadow-lg"
            >
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
    </nav>
  )
}
