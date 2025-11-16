import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/tickets/myTickets')({
  component: MyTicketsPage,
})

function MyTicketsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">My Tickets</h1>

        <Link
          to="/services/indexServices"
          className="rounded-xl border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          + New Ticket
        </Link>
      </div>

      {/* Tabela/placeholder inicial */}
      <div className="overflow-hidden rounded-xl border">
        <table className="min-w-full text-sm">
          <thead className="bg-muted/40">
            <tr>
              <th className="px-4 py-3 text-left font-medium">ID</th>
              <th className="px-4 py-3 text-left font-medium">Subject</th>
              <th className="px-4 py-3 text-left font-medium">Status</th>
              <th className="px-4 py-3 text-left font-medium">Updated</th>
            </tr>
          </thead>
          <tbody>
            {/* Linhas de exemplo para começar */}
            <tr className="border-t">
              <td className="px-4 py-3">#1001</td>
              <td className="px-4 py-3">Laptop slow performance</td>
              <td className="px-4 py-3">Open</td>
              <td className="px-4 py-3">2025-11-07</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-3">#1000</td>
              <td className="px-4 py-3">Email not syncing</td>
              <td className="px-4 py-3">Resolved</td>
              <td className="px-4 py-3">2025-11-06</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
