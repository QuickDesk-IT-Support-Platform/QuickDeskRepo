// src/routes/tickets/myTickets.tsx
import { createFileRoute, Link } from "@tanstack/react-router"
import * as React from "react"

import { columns, type Payment } from "@/components/ui/columns"
import { DataTable } from "@/components/ui/data-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from "@tanstack/react-table"

export const Route = createFileRoute("/tickets/myTickets")({
  component: MyTicketsPage,
})

async function getData(): Promise<Payment[]> {
  // mock por agora
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    { id: "1a2b3c4d",
      amount: 200,
      status: "failed",
      email: "asas@example.com"},
    {
      id: "2",
      amount: 320,
      status: "success",
      email: "user@example.com",
    },
    {
      id: "3",
      amount: 50,
      status: "failed",
      email: "another@example.com",
    },
  ]
}

function MyTicketsPage() {
  const [data, setData] = React.useState<Payment[]>([])
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

  React.useEffect(() => {
    getData().then(setData)
  }, [])

  // criamos uma tabela só para gerir filtro/visibilidade (o render final é feito pelo DataTable)
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl  font-semibold">My Tickets</h1>

        <Link
          to="/services/indexServices"
          className="rounded-xl bg-orange-200 hover:bg-orange-300 border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          + New Ticket
        </Link>
      </div>

      {/* Toolbar igual à demo */}
      <div className="mb-4 flex items-center gap-4">
        <Input
          placeholder="Filter by email..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm bg-neutral-300"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-neutral-300 hover:bg-neutral-400">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-neutral-300" align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize hover:bg-neutral-400"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Tabela final (mesmo layout do shadcn) */}
      <DataTable columns={columns} data={table.getRowModel().rows.map(r => r.original)} />
    </div>
  )
}
