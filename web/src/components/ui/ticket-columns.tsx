import { type ColumnDef } from "@tanstack/react-table"
import type Ticket from "@/types/ticket"
import { ArrowUpDown, CheckCircle, AlertTriangle, XCircle } from "lucide-react"

function getPriorityIcon(priority: string) {
  const base = "h-4 w-4"
  switch (priority.toLowerCase()) {
    case "low":
      return <CheckCircle className={`${base} text-green-600`} />
    case "medium":
      return <AlertTriangle className={`${base} text-yellow-500`} />
    case "high":
      return <XCircle className={`${base} text-red-600`} />
    default:
      return <AlertTriangle className={`${base} text-gray-400`} />
  }
}

export const ticketColumns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "ticket_status",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        State <ArrowUpDown className="h-4 w-4 hover:scale-110" />
      </button>
    ),
  },
  {
    accessorKey: "ticket_priority",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        Priority <ArrowUpDown className="h-4 w-4 hover:scale-110" />
      </button>
    ),
    cell: ({ row }) => {
      const priority = row.getValue("ticket_priority") as string
      return (
        <div className="flex items-center gap-2">
          {getPriorityIcon(priority)}
          <span className="capitalize">{priority}</span>
        </div>
      )
    }
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        Created At <ArrowUpDown className="h-4 w-4 hover:scale-110" />
      </button>
    ),
  },
  {
    accessorKey: "updated_at",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        Last Update <ArrowUpDown className="h-4 w-4 hover:scale-110" />
      </button>
    ),
  },
  {
    accessorKey: "closed_at",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        Closed At <ArrowUpDown className="h-4 w-4 hover:scale-110" />
      </button>
    ),
  },
  {
    accessorKey: "service_id",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        Service <ArrowUpDown className="h-4 w-4 hover:scale-110" />
      </button>
    ),
  },
  {
    accessorKey: "category_id",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        Category <ArrowUpDown className="h-4 w-4 hover:scale-110" />
      </button>
    ),
  },
]
