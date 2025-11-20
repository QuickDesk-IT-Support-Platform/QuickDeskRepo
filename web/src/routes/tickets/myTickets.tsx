import { columns } from '@/components/columns'
import { DataTable } from '@/components/data-table'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/tickets/myTickets')({
  component: MyTicketsPage,
})


async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "a3b1c2d3",
      amount: 250,
      status: "success",
      email: "a@example.com",
    },
    {
      id: "f4e5d6c7",
      amount: 75,
      status: "failed",
      email: "f@example.com",
    },
    // ...
  ]
}
async function MyTicketsPage() {
  const data = await getData()
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
