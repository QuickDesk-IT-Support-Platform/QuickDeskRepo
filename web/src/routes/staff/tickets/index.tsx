import { createFileRoute } from '@tanstack/react-router'
import { mockTickets } from '@/mock/tickets'
import { TicketTable } from '@/components/ticket-table'

export const Route = createFileRoute('/staff/tickets/')({
  component: TicketsPage,
})

function TicketsPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Assigned Tickets</h1>
      <TicketTable tickets={mockTickets} />
    </div>
  )
}
