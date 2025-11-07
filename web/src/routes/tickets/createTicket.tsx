import { createFileRoute, useSearch } from "@tanstack/react-router"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "@tanstack/react-form"
import { useState } from "react"
import { mockFormDefinition } from "@/mock/formDefinition"
import { mockCategories } from "@/mock/categories"

export const Route = createFileRoute("/tickets/createTicket")({
  component: CreateTicketPage,
})

function findCategoryById(categories, id) {
  for (const cat of categories) {
    if (cat.id === id) return cat
    if (cat.children) {
      const found = findCategoryById(cat.children, id)
      if (found) return found
    }
  }
  return null
}

function CreateTicketPage() {
  const { categoryId } = useSearch({ from: "/tickets/createTicket" })
  const [submitted, setSubmitted] = useState(false)

  // 🔍 Encontra a categoria correta no mock
  const category = findCategoryById(mockCategories, Number(categoryId)) || {
    name: "Unknown Category",
    description: "Category not found.",
    icon: "HelpCircle",
    color: "text-gray-400",
  }

  const IconComponent = LucideIcons[category.icon] || LucideIcons.HelpCircle

  // Configuração do formulário
  const form = useForm({
    defaultValues: Object.fromEntries(mockFormDefinition.map((f) => [f.id, ""])),
    onSubmit: async ({ value }) => {
      console.log("Form Submitted:", { category, ...value })
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    },
  })

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start py-12 px-6">
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl">
        {/* Lado Esquerdo - Categoria */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/3 flex flex-col justify-start p-6 border-r border-gray-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <IconComponent className={`${category.color} w-10 h-10`} />
            <h2 className="text-2xl font-semibold text-gray-800">{category.name}</h2>
          </div>
          <p className="text-gray-500 text-sm">{category.description}</p>
        </motion.div>

        {/* Lado Direito - Formulário */}
        <motion.form
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:w-2/3 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Create Ticket</h3>

          {/* Geração dinâmica de campos */}
          {mockFormDefinition.map((field) => (
            <form.Field
              key={field.id}
              name={field.id}
              children={(fieldApi) => (
                <div className="mb-6">
                  <label className="block font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>

                  {field.type === "text" && (
                    <Input
                      placeholder={field.placeholder}
                      value={fieldApi.state.value || ""}
                      onChange={(e) => fieldApi.handleChange(e.target.value)}
                      required={field.required}
                    />
                  )}

                  {field.type === "textarea" && (
                    <Textarea
                      placeholder={field.placeholder}
                      value={fieldApi.state.value || ""}
                      onChange={(e) => fieldApi.handleChange(e.target.value)}
                      required={field.required}
                    />
                  )}

                  {field.type === "date" && (
                    <Input
                      type="date"
                      value={fieldApi.state.value || ""}
                      onChange={(e) => fieldApi.handleChange(e.target.value)}
                    />
                  )}

                  {field.type === "file" && (
                    <Input
                      type="file"
                      multiple
                      onChange={(e) =>
                        fieldApi.handleChange(Array.from(e.target.files || []))
                      }
                    />
                  )}
                </div>
              )}
            />
          ))}

          {/* Botão Submit */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all"
            >
              Submit Ticket
            </Button>
          </motion.div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center gap-2 text-green-600 font-medium"
            >
              <LucideIcons.CheckCircle className="w-5 h-5" />
              Ticket submitted successfully!
            </motion.div>
          )}
        </motion.form>
      </div>
    </div>
  )
}
