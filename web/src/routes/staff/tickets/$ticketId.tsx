import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/staff/tickets/$ticketId')({
  component: TicketDetails,
})

function TicketDetails() {
    const { ticketId } = Route.useParams()
    return (
        <div>Ticket ID: {ticketId}</div>
    )
}
