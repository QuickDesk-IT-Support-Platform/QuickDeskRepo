import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "./ui/badge"
import { Link } from "@tanstack/react-router"
import { Clock, User, AlertCircle } from "lucide-react"

export interface Ticket {
  id: number
  service: string
  form_id: number
  user: string
  assigned_to: string
  ticket_status: "Open" | "Assigned" | "In Progress" | "Closed"
  ticket_priority: "Low" | "Medium" | "High"
  description: string
  created_at: string
  updated_at?: string | null
  closed_at?: string | null
}

interface TicketGridProps {
  tickets: Ticket[]
}

export function TicketGrid({ tickets }: TicketGridProps) {
  const priorityOrder: Record<Ticket['ticket_priority'], number> = {
    High: 3,
    Medium: 2,
    Low: 1,
  }

  const statusOrder: Record<Ticket['ticket_status'], number> = {
    Open: 4,
    Assigned: 3,
    "In Progress": 2,
    Closed: 1,
  }

  const sortedTickets = [...tickets].sort((a, b) => {
    const priorityDiff = priorityOrder[b.ticket_priority] - priorityOrder[a.ticket_priority]
    if (priorityDiff !== 0) return priorityDiff

    return statusOrder[b.ticket_status] - statusOrder[a.ticket_status]
  })

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {sortedTickets.map((ticket) => (
        <Link
          key={ticket.id}
          to={`/staff/tickets/${ticket.id}`}
          className="block"
        >
          <Card className="cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-gray-50 transition-all duration-200 border border-gray-200 rounded-xl h-50">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-base font-semibold">
                  #{ticket.id} • {ticket.user}
                </CardTitle>
                <Badge
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
              </div>
            </CardHeader>

            <CardContent className="space-y-3 text-sm overflow-hidden">
              <p className="line-clamp-2 text-gray-700">{ticket.service}</p>

              <div className="flex items-center text-gray-500 text-xs space-x-2">
                <User className="h-3.5 w-3.5" />
                <span>Assigned to {ticket.assigned_to}</span>
              </div>

              <div className="flex justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <AlertCircle
                    className={`h-3.5 w-3.5 ${
                      ticket.ticket_priority === "High"
                        ? "text-red-500"
                        : ticket.ticket_priority === "Medium"
                        ? "text-yellow-500"
                        : "text-green-500"
                    }`}
                  />
                  <span>{ticket.ticket_priority} Priority</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{ticket.created_at}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}