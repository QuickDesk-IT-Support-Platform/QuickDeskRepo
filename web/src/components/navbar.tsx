import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import { HomeIcon, Ticket, LogOut, Settings, User } from 'lucide-react'
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
    <nav className="w-full border-b bg-orange-600 text-white">
      <div className="flex items-center justify-between w-full px-7 py-4">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="QuickDesk Logo"
            className="h-15 scale-400 w-auto object-contain ml-23"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="lg" asChild>
            <Link
              to="/"
              activeOptions={{ exact: true }}
              className="[&.active]:bg-accent [&.active]:text-accent-foreground"
            >
              <HomeIcon className="h-4 w-4 mr-2" />
              Home
            </Link>
          </Button>

          <Button variant="ghost" size="lg" asChild>
            <Link
              to="/services/indexServices"
              activeOptions={{ exact: true }}
              className="[&.active]:bg-accent [&.active]:text-accent-foreground"
            >
              <Ticket className="h-4 w-4 mr-2" />
              Services
            </Link>
          </Button>

          <Button variant="ghost" size="lg" asChild>
            <Link
              to="/tickets/myTickets"
              activeOptions={{ exact: true }}
              className="[&.active]:bg-accent [&.active]:text-accent-foreground"
            >
              <Ticket className="h-4 w-4 mr-2" />
              My Tickets
            </Link>
          </Button>

          {/* Avatar dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="focus:outline-none">
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@user" />
                </Avatar>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48 bg-white text-black">
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" /> Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" /> Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
