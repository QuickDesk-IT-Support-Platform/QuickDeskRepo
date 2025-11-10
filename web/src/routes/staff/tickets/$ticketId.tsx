import { createFileRoute } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { mockTickets } from '@/mock/tickets'
import { Clock, User, AlertCircle, Edit3 } from "lucide-react"

export const Route = createFileRoute('/staff/tickets/$ticketId')({
  component: TicketDetails,
})

function TicketDetails() {
  const { ticketId } = Route.useParams()
  const id = Number(ticketId)
  const ticket = mockTickets.find(t => t.id === id)

  if (!ticket) return <div className="p-6 text-center text-red-500">Ticket not found</div>

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Ticket #{ticket.id}
          </h1>
          <p className="text-gray-600">Submitted by {ticket.user}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge className="text-sm px-3 py-1.5 rounded-md"
            variant={
              ticket.ticket_status === "Closed"
                ? "success"
                : ticket.ticket_status === "In Progress"
                ? "warning"
                : ticket.ticket_status === "Assigned"
                ? "secondary"
                : "default"
            }
          >
            {ticket.ticket_status}
          </Badge>
          <Badge className="text-sm px-3 py-1.5 rounded-md"
            variant={
              ticket.ticket_priority === "High"
                ? "destructive"
                : ticket.ticket_priority === "Medium"
                ? "warning"
                : "default"
            }
          >
            {ticket.ticket_priority} Priority
          </Badge>
        </div>
      </div>

      {/* Main Card */}
      <Card className="border border-gray-200 rounded-xl p-5 space-y-5 bg-white shadow-sm">
        {/* Service / Description */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            {ticket.service}
          </h2>
          <p className="text-gray-600 leading-relaxed">{ticket.description}</p>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Assigned to: {ticket.assigned_to}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Created: {ticket.created_at}</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-500"/>

        {/* Action Panel */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-sm text-gray-700 font-medium">
              Status:
            </label>
            <select
              className="border rounded-lg px-4 py-2 bg-gray-50 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              defaultValue={ticket.ticket_status}
            >
              <option>Open</option>
              <option>Assigned</option>
              <option>In Progress</option>
              <option>Closed</option>
            </select>

            <label className="text-sm text-gray-700 font-medium">
              Priority:
            </label>
            <select
              className="border rounded-lg px-3 py-2 bg-gray-50 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              defaultValue={ticket.ticket_priority}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors">
            <Edit3 className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </Card>

      {/* Activity Log */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Activity Log</h2>
        {ticket.id === 1 && (
          <Card className="border border-gray-200 rounded-xl p-4 bg-gray-50">
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><b>02-11-2025</b> — Created</li>
              <li><b>03-11-2025</b> — Assigned to Admin</li>
              <li><b>03-11-2025</b> — Status changed from <b>Open</b> → <b>Assigned</b></li>
            </ul>
          </Card>
        )}
      </div>
    </div>
  )
}