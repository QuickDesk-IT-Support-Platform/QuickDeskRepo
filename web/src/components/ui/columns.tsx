"use client"

import { type ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown } from "lucide-react"

export type Ticket = {
  status: string
  email: string
  amount: number
}

export const columns: ColumnDef<Ticket>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 10,
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        Status <ArrowUpDown className="h-4 w-4" />
      </button>
    ),
  },

  {
    accessorKey: "email",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        Email <ArrowUpDown className="h-4 w-4" />
      </button>
    ),
  },

  {
    accessorKey: "amount",
    header: ({ column }) => (
      <button
        className="flex items-center gap-1"
        onClick={() => column.toggleSorting()}
      >
        Amount <ArrowUpDown className="h-4 w-4" />
      </button>
    ),
    cell: ({ row }) => {
      const amount = row.getValue<number>("amount")
      return <span>${amount.toFixed(2)}</span>
    },
    sortingFn: "basic",
  },
]
