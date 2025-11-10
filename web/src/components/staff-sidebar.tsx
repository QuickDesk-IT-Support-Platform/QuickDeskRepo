import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { Home, Ticket } from "lucide-react"
import { Link } from "@tanstack/react-router"
import logo from "./ui/logo.png"

export function StaffSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarContent className="bg-gradient-to-b from-orange-600 to-orange-500 text-white">
        <SidebarGroup>
          <img
            src={logo}
            alt="QuickDesk Logo"
            className="h-12 w-auto object-contain transition-transform duration-200 scale-300 hover:scale-330"
          />
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                  <Link 
                    to="/staff/" 
                    activeOptions={{ exact: true }}
                    className="[&.active]:bg-white/15 [&.active]:text-white"
                  >
                    <Home className="mr-2 h-4 w-4" /> Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild className="text-white/90 hover:text-white hover:bg-white/10 transition-colors">
                  <Link 
                    to="/staff/tickets"
                    activeOptions={{ exact: true }}
                    className="[&.active]:bg-white/15 [&.active]:text-white"
                  >
                    <Ticket className="mr-2 h-4 w-4" /> Assigned Tickets
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}