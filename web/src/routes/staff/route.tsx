import { Outlet, createFileRoute } from "@tanstack/react-router"
import { SidebarProvider } from "@/components/ui/sidebar"
import { StaffSidebar } from "@/components/staff-sidebar"

export const Route = createFileRoute("/staff")({
  component: StaffLayout,
});

function StaffLayout() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden">
        <StaffSidebar />
        <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-orange-50 to-gray-100">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}