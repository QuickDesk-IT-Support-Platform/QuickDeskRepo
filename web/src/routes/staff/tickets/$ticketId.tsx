import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockTickets } from '@/mock/tickets'

export const Route = createFileRoute('/staff/tickets/$ticketId')({
  component: TicketDetails,
})

function TicketDetails() {
    const { ticketId } = Route.useParams()
    const id = Number(ticketId)
    const ticket = mockTickets.find(t => t.id === id)

    if (!ticket) return <div className="p-6 text-center text-red-500">Ticket not found</div>
    
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ticket #{ticket.id} • {ticket.user}</h1>
          <div className="flex space-x-2">
            <Badge variant={ticket.ticket_status.toLowerCase()}>{ticket.ticket_status}</Badge>
            <Badge variant={ticket.ticket_priority.toLowerCase()}>{ticket.ticket_priority}</Badge>
          </div>
        </div>
      
        {/* Ticket Details */}
        <Card className="border border-gray-200 rounded-xl p-4 space-y-4">
          <p className="text-gray-700">{ticket.service}</p>
          <p className="text-gray-500 text-sm">{ticket.description}</p>
      
          {/* Action Panel */}
          <div className="flex items-center space-x-4">
            <select className="border rounded px-2 py-1">
              <option>Open</option>
              <option>Assigned</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>
            <select className="border rounded px-2 py-1">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
            <button className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
          </div>
        </Card>
      
        {/* Activity Log */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold">Activity</h2>
          <ul className="space-y-1 text-gray-500 text-sm">
            <li>02 Nov: Status changed from Open → Assigned</li>
            <li>03 Nov: Assigned to Admin</li>
            <li>04 Nov: Comment added</li>
          </ul>
        </div>
      </div>
    )
}
