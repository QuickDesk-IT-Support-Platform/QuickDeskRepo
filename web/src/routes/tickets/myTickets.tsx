import { createFileRoute, Link } from "@tanstack/react-router"
import { DataTable } from "@/components/ui/data-table"
import { ticketColumns } from "@/components/ui/ticket-columns"
import { mockTickets } from "@/mock/ticketMock"
import { UserTicketStats } from "@/components/ui/userstats-card"
import { UserTicketChart } from "@/components/ui/ticketChart"


export const Route = createFileRoute("/tickets/myTickets")({
  component: MyTicketsPage,
})

function MyTicketsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Tickets</h1>

        <Link
          to="/services/indexServices"
          className="rounded-xl bg-orange-200 hover:bg-orange-300 border px-4 py-2 text-sm font-medium"
        >
          + New Ticket
        </Link>
      </div>
      <UserTicketStats />
      <UserTicketChart />
      {/* Tabela com toolbar e dropdown já incluídos */}
      <DataTable columns={ticketColumns} data={mockTickets} />
    </div>
  )
}
