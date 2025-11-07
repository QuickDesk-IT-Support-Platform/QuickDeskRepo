import { useState, useEffect } from "react"
import * as LucideIcons from "lucide-react"
import { mockCategories } from "@/mock/categories"

export function CategoryNavigator({ onPathChange }) {
  const [path, setPath] = useState([])

  const currentCategory = path[path.length - 1]
  const currentChildren = currentCategory ? currentCategory.children : mockCategories

  const handleSelect = (category) => {
    if (category.children?.length) setPath([...path, category])
    else alert(`Creating ticket: ${category.name}`)
  }

  const handleBack = () => setPath(path.slice(0, -1))

  // 🔁 Notifica o pai sempre que o path mudar
  useEffect(() => {
    if (onPathChange) onPathChange(path)
  }, [path, onPathChange])

  return (
    <div className="p-6">
      {path.length > 0 && (
        <button onClick={handleBack} className="text-orange-600 mb-4">← Back</button>
      )}

      <h2 className="text-2xl font-bold mb-2">
        {currentCategory?.name || "Service Categories"}
      </h2>
      <p className="text-gray-600 mb-6">
        {currentCategory?.description || "Select a category to explore our services."}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentChildren.map((cat) => {
          const IconComponent = LucideIcons[cat.icon] || LucideIcons.HelpCircle
          return (
            <div
              key={cat.id}
              onClick={() => handleSelect(cat)}
              className="p-6 rounded-lg border shadow-sm bg-white hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex justify-center mb-4">
                <IconComponent className={`${cat.color} h-10 w-10`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">{cat.name}</h3>
              <p className="text-sm text-gray-500 text-center">{cat.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
