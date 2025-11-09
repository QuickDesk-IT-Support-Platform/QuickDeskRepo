import { createFileRoute } from '@tanstack/react-router'
import { mockTickets } from '@/mock/tickets'
import { TicketGrid } from '@/components/ticket-grid'

export const Route = createFileRoute('/staff/tickets/')({
  component: TicketsPage,
})

function TicketsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Assigned Tickets</h1>
      <TicketGrid tickets={mockTickets} />
    </div>
  )
}
