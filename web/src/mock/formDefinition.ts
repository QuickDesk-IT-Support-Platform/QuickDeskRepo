// formDefinition.ts
export interface FormField {
  field_id: string
  name: string
  label: string
  type: "text" | "textarea" | "select" | "checkbox" | "radio" | "date" | "file"
  required: boolean
  placeholder?: string
  default_value?: string
  options?: string[]
  order?: number
}

export interface Formulario {
  id: string
  organization_id: string
  service_id: string
  category_path: string
  name: string
  description?: string
  fields: FormField[]
  created_at?: string
  updated_at?: string
  version?: string
}

// 🔹 Mock de exemplo atualizado para refletir o modelo
export const mockFormDefinition: Formulario = {
  id: "form001",
  organization_id: "org123",
  service_id: "srv001",
  category_path: "support/software",
  name: "Software Support Form",
  description: "Formulário para reportar problemas relacionados com software.",
  version: "1.0",
  fields: [
    {
      field_id: "subject",
      name: "subject",
      label: "Subject",
      type: "text",
      required: true,
      placeholder: "Enter a short title for your issue",
      order: 1,
    },
    {
      field_id: "description",
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
      placeholder: "Describe your issue in detail",
      order: 2,
    },
    {
      field_id: "priority",
      name: "priority",
      label: "Priority",
      type: "select",
      required: true,
      options: ["Low", "Medium", "High"],
      order: 3,
    },
    {
      field_id: "due_date",
      name: "due_date",
      label: "Expected Resolution Date",
      type: "date",
      required: false,
      order: 4,
    },
    {
      field_id: "attachments",
      name: "attachments",
      label: "Attachments",
      type: "file",
      required: false,
      order: 5,
    },
  ],
}
