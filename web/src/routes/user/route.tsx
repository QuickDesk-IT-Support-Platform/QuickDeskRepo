import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'

export const Route = createFileRoute('/user')({
  component: RouteComponent,
})

function RouteComponent() {
  return Navbar()
}
