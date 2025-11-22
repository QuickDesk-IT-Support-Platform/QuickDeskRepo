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
    <Card className="bg-[#1a1a1a] border border-neutral-800 text-white mt-8 rounded-2xl shadow-xl overflow-hidden">
      <CardHeader className="pb-6">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold text-white">
              My Ticket Activity
            </CardTitle>
            <p className="text-sm text-neutral-400">
              Tickets created over time
            </p>
          </div>

          {/* Period selector */}
          <div className="flex gap-2">
            {[
              { value: "90", label: "Last 3 months" },
              { value: "30", label: "Last 30 days" },
              { value: "7", label: "Last 7 days" },
            ].map((opt) => (
              <Button
                key={opt.value}
                onClick={() => setRange(opt.value as any)}
                className={`px-3 py-1 rounded-md transition-all ${
                  range === opt.value
                    ? "bg-orange-500/80 hover:bg-orange-500 text-white"
                    : "bg-neutral-800 hover:bg-neutral-700 text-neutral-300"
                }`}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="h-[350px] px-2 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ left: 20, right: 20, top: 10, bottom: 0 }}
          >
            {/* smooth orange gradient */}
            <defs>
              <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#ffa94d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffa94d" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            {/* X / Y Axes */}
            <XAxis
              dataKey="date"
              tick={{ fill: "#e2e2e2", fontSize: 12 }}
              axisLine={{ stroke: "#555" }}
              tickLine={{ stroke: "#555" }}
            />
            <YAxis
              tick={{ fill: "#e2e2e2", fontSize: 12 }}
              axisLine={{ stroke: "#555" }}
              tickLine={{ stroke: "#555" }}
            />

            {/* Tooltip */}
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              contentStyle={{
                background: "rgba(20,20,20,0.85)",
                border: "1px solid #444",
                borderRadius: "10px",
                color: "#fff",
                boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
              }}
            />

            {/* BEAUTIFUL ORANGE AREA */}
            <Area
              type="monotone"
              dataKey="tickets"
              stroke="#ffa94d"
              strokeWidth={3}
              fill="url(#orangeGradient)"
              dot={false}
              activeDot={{
                r: 6,
                stroke: "#fff",
                strokeWidth: 2,
                fill: "#ffa94d",
              }}
              animationDuration={900}
              animationEasing="ease-in-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
