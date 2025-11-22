import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { mockTickets } from "@/mock/ticketMock"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"

// Utility: percent diff (simple mock calculation)
function percentDiff(current: number, previous: number) {
  if (previous === 0) return "+∞%"
  const diff = ((current - previous) / previous) * 100
  const sign = diff >= 0 ? "+" : ""
  return sign + diff.toFixed(1) + "%"
}

export function UserTicketStats() {
  // Metrics for the user
  const totalCreated = mockTickets.length
  const resolvedTickets = mockTickets.filter((t) => t.closed_at !== null).length
  const openTickets = mockTickets.filter((t) => t.ticket_status === "Open").length
  const completionRate = ((resolvedTickets / totalCreated) * 100).toFixed(1)

  // Fake comparison (since no past data)
  const comparePrev = (n: number) => (n > totalCreated / 2 ? ArrowUpRight : ArrowDownRight)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      
      {/* CARD: Tickets Criados */}
      <Card className="bg-linear-to-r from-orange-500 to-orange-300 border-neutral-300 text-white">
        <CardHeader>
          <CardTitle>Total Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{totalCreated}</div>
          <div className="flex items-center gap-2 text-sm mt-2 text-black">
            Trending this period
            {React.createElement(comparePrev(totalCreated), { className: "h-4 w-4" })}
          </div>
        </CardContent>
      </Card>

      {/* CARD: Resolvidos */}
      <Card className="bg-linear-to-r from-orange-500 to-orange-300 border-neutral-300 text-white">
        <CardHeader>
          <CardTitle>Resolved Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{resolvedTickets}</div>
          <div className="flex items-center gap-2 text-sm mt-2 text-black">
            Completed successfully
            {React.createElement(comparePrev(resolvedTickets), { className: "h-4 w-4" })}
          </div>
        </CardContent>
      </Card>

      {/* CARD: Pendentes */}
      <Card className="bg-linear-to-r from-orange-500 to-orange-300 border-neutral-300 text-white">
        <CardHeader>
          <CardTitle>Open Tickets</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{openTickets}</div>
          <div className="flex items-center gap-2 text-sm mt-2 text-black">
            Waiting for resolution
            {React.createElement(comparePrev(openTickets), { className: "h-4 w-4" })}
          </div>
        </CardContent>
      </Card>

      {/* CARD: Taxa de Resolução */}
      <Card className="bg-linear-to-r from-orange-500 to-orange-300 border-neutral-300 text-white">
        <CardHeader>
          <CardTitle>Completion Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{completionRate}%</div>
          <div className="flex items-center gap-2 text-sm mt-2 text-black">
            Performance overview
            {React.createElement(comparePrev(Number(completionRate)), { className: "h-4 w-4" })}
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
