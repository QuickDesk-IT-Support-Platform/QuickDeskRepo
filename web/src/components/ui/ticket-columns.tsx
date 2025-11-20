import { type ColumnDef } from "@tanstack/react-table"
import type Ticket from "@/types/ticket"

export const ticketColumns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "ticket_status",
    header: "State",
  },
  {
    accessorKey: "ticket_priority",
    header: "Prioririty",
  },
  {
    accessorKey: "created_at",
    header: "Created At",
  },
  {
    acessorKey: "updated_at",
    header: "Last update",
  },
  {
    accessorKey: "closed_at",
    header: "Closed At",  
  },
  {
    accessorKey: "service_id",
    header: "Service",
  },
  {
    accessorKey: "category_id",
    header: "Category",
  }
]


// IMPORTATE: MUDAR OS SERVICES_ID E CATEGORY_ID PARA OS NOMES CORRESPONDENTES QUANDO TIVERMOS OS DADOS
