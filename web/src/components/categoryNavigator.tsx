import { useState } from "react"
import { mockCategories } from "@/mock/categories"

export function CategoryNavigator() {
  const [path, setPath] = useState([])

  const currentCategory = path[path.length - 1]
  const currentChildren = currentCategory ? currentCategory.children : mockCategories

  const handleSelect = (category) => {
    if (category.children?.length) setPath([...path, category])
    else alert(`Criar ticket para: ${category.name}`)
  }

  const handleBack = () => setPath(path.slice(0, -1))

  return (
    <div className="p-6">
      {path.length > 0 && (
        <button onClick={handleBack} className="text-orange-600 mb-4">← Voltar</button>
      )}

      <h2 className="text-2xl font-bold mb-2">
        {currentCategory?.name || "Serviços"}
      </h2>
      <p className="text-gray-600 mb-6">
        {currentCategory?.description || "Selecione uma categoria de serviço"}
      </p>

      <div className="grid grid-cols-3 gap-4">
        {currentChildren.map((cat) => (
          <div
            key={cat.id}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg cursor-pointer transition-all"
            onClick={() => handleSelect(cat)}
          >
            <h3 className="font-semibold text-gray-800">{cat.name}</h3>
            <p className="text-gray-500 text-sm">{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
