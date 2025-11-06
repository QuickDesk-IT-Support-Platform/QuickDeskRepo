import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'
import { HomeIcon, Plus, Package, Ticket } from 'lucide-react'
import { AvatarDemo } from "./ui/avatar-demo"
import logo from "./ui/logo.png"



export function Navbar() {
  return (
    <>
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
              <Link to="/" className="[&.active]:bg-accent [&.active]:text-accent-foreground">
                <HomeIcon className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>

            <Button variant="ghost" size="lg" asChild>
              <Link to="/" className="[&.active]:bg-accent [&.active]:text-accent-foreground">
                <Ticket className="h-4 w-4 mr-2" />
                My Tickets
              </Link>
            </Button>
            <AvatarDemo />
          </div>
        </div>
      </nav>
    </>
  )
}