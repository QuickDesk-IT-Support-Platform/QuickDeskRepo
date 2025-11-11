import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar';

export const Route = createFileRoute('/services')({
  component: Index,
})

function Index() {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}