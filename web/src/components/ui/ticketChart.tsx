import React from "react"
import { mockTickets } from "@/mock/ticketMock"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

// ------------------------------
// UTILS
// ------------------------------

function getMockDateRange() {
  const dates = mockTickets.map((t) => new Date(t.created_at))
  const min = new Date(Math.min(...dates))
  const max = new Date(Math.max(...dates))
  return { min, max }
}

function getDaysBetween(start: Date, end: Date) {
  const days = []
  let cur = new Date(start)
  while (cur <= end) {
    days.push(new Date(cur))
    cur.setDate(cur.getDate() + 1)
  }
  return days
}

function formatDate(dateString: string) {
  const d = new Date(dateString)
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

function aggregateTicketsSmart(range: "90" | "30" | "7") {
  const { min, max } = getMockDateRange()
  let start = new Date(max)

  const subtract = range === "90" ? 90 : range === "30" ? 30 : 7
  start.setDate(start.getDate() - subtract)

  if (start < min) start = min

  const days = getDaysBetween(start, max)

  return days.map((day) => {
    const iso = day.toISOString().split("T")[0]

    const count = mockTickets.filter((t) =>
      t.created_at.startsWith(iso)
    ).length

    return {
      date: formatDate(iso),
      tickets: count,
    }
  })
}

// ------------------------------
// COMPONENT
// ------------------------------

export function UserTicketChart() {
  const [range, setRange] = React.useState<"90" | "30" | "7">("90")

  const data =
    range === "90"
      ? aggregateTicketsSmart("90")
      : range === "30"
      ? aggregateTicketsSmart("30")
      : aggregateTicketsSmart("7")

  return (
    <Card className="bg-orange-400 border-neutral-300 text-white mt-8 rounded-xl shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold text-white">
              My Ticket Activity
            </CardTitle>
            <p className="text-sm font-bold text-neutral-800">
              Tickets created over time
            </p>
          </div>

          {/* Period selector */}
          <div className="flex gap-2">
            <Button
              variant={range === "90" ? "default" : "outline"}
              onClick={() => setRange("90")}
              className={`px-3 py-1 rounded-md ${
                range === "90"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-500 text-neutral-300"
              }`}
            >
              Last 3 months
            </Button>

            <Button
              variant={range === "30" ? "default" : "outline"}
              onClick={() => setRange("30")}
              className={`px-3 py-1 rounded-md ${
                range === "30"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-500 text-neutral-300"
              }`}
            >
              Last 30 days
            </Button>

            <Button
              variant={range === "7" ? "default" : "outline"}
              onClick={() => setRange("7")}
              className={`px-3 py-1 rounded-md ${
                range === "7"
                  ? "bg-orange-600 text-white"
                  : "bg-orange-500 text-neutral-300"
              }`}
            >
              Last 7 days
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ left: 10, right: 20 }}>
            {/* smooth gradient like shadcn */}
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e00d0dff" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#a01d1dff" stopOpacity={0.03} />
              </linearGradient>
            </defs>

            {/* X / Y Axes */}
            <XAxis dataKey="date" tick={{ fill: "#000000ff", fontSize: 12 }} />
            <YAxis tick={{ fill: "#000000ff", fontSize: 12 }} />

            {/* Tooltip */}
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              contentStyle={{
                background: "#161616",
                border: "1px solid #333",
                borderRadius: "8px",
                color: "#fff",
              }}
            />

            {/* Area */}
            <Area
              type="monotone"
              dataKey="tickets"
              stroke="#ffffff"
              strokeWidth={2}
              fill="url(#chartGradient)"
              dot={false}
              activeDot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
