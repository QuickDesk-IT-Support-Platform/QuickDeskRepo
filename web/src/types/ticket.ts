export interface Ticket {
  id: string
  organization_id: string
  service_id: string
  form_id: string
  form_submission_id: string
  user_id: string
  assigned_to: string | null
  ticket_status: "Pending" | "Success" | "Failed" | "Processing"
  ticket_priority: "Low" | "Medium" | "High" | "Critical"
  sla_id: string
  category_id: string
  description: string
  created_at: string
  updated_at: string
  closed_at: string | null
  amount: number // adicionado para a tua coluna Amount
  email: string  // útil para sorting/filtragem
}