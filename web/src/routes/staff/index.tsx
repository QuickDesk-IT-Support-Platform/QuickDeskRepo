import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/staff/")({
  component: StaffDashboard
});

function StaffDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Staff Dashboard</h1>
      <p>Welcome to the staff view.</p>
    </div>
  )
}
