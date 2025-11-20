// src/routes/tickets/myTickets.tsx
import React from "react"
import {
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { DataTable } from "@/components/ui/data-table"
import { ticketColumns } from "@/components/ui/ticket-columns"
import { mockTickets } from "@/mock/ticketMock"

export const Route = createFileRoute("/tickets/myTickets")({
  component: MyTicketsPage,
})


function MyTicketsPage() {
  const [columnVisibility, setColumnVisibility] = React.useState({})

  // criar instância mínima só para gerir visibilidade
  const table = useReactTable({
    data: mockTickets,
    columns: ticketColumns,
    state: { columnVisibility },
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
  })

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

      {/* Toolbar */}
      <div className="mb-4 flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-neutral-200">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {table.getAllLeafColumns().map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={(checked) =>
                  column.toggleVisibility(!!checked)
                }
                className="capitalize"
              >
                {column.id.replaceAll("_", " ")}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Tabela */}
      <DataTable columns={ticketColumns} data={mockTickets} />
    </div>
  )
}

