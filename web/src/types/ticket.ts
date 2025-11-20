export default interface Ticket {
  id: number
  organization_id: number
  service_id: number
  form_id: number
  form_submission_id: number
  user_id: number
  assigned_to: number | null
  ticket_status: string
  ticket_priority: string
  sla_id: number | null
  category_id: number
  description: string
  created_at: string
  updated_at: string
  closed_at: string | null
}
