import { type ColumnDef } from "@tanstack/react-table"
import type Ticket from "@/types/ticket"
import { ArrowUpDown } from "lucide-react"

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
