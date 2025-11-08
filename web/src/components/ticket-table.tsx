import { 
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell 
} from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"

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

interface TicketTableProps {
  tickets: Ticket[]
}

export function TicketTable({ tickets }: TicketTableProps) {
    return (
      <Table className="rounded-lg border border-gray-200 shadow-sm">
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map(ticket => (
            <TableRow key={ticket.id} className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium"><Link to={`/staff/tickets/${ticket.id}`}>{ticket.id}</Link></TableCell>
              <TableCell><Link to={`/staff/tickets/${ticket.id}`}>{ticket.user}</Link></TableCell>
              <TableCell><Link to={`/staff/tickets/${ticket.id}`}>{ticket.service}</Link></TableCell>
              <TableCell>
                <Link to={`/staff/tickets/${ticket.id}`}>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      ticket.ticket_status === "Open"
                        ? "bg-blue-100 text-purple-800"
                        : ticket.ticket_status === "Assigned"
                        ? "bg-blue-100 text-blue-800"
                        : ticket.ticket_status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : ticket.ticket_status === "Closed"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {ticket.ticket_status}
                  </span>
                </Link>
              </TableCell>
              <TableCell>
                <Link to={`/staff/tickets/${ticket.id}`}>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      ticket.ticket_priority === "High"
                        ? "bg-red-100 text-red-800"
                        : ticket.ticket_priority === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {ticket.ticket_priority}
                  </span>
                </Link>
              </TableCell>
              <TableCell><Link to={`/staff/tickets/${ticket.id}`}>{ticket.created_at}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}