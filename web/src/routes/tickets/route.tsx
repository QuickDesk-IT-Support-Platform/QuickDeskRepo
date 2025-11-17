import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar';

export const Route = createFileRoute('/tickets')({
  component: Index,
})

function Index() {

  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}