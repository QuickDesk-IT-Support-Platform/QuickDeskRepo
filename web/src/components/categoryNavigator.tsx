import { useState, useEffect } from "react"
import * as LucideIcons from "lucide-react"
import { mockCategories } from "@/mock/categories"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function CategoryNavigator({ onPathChange }) {
  const [path, setPath] = useState([])
  const currentCategory = path[path.length - 1]
  const currentChildren = currentCategory ? currentCategory.children : mockCategories

  const handleSelect = (category) => {
    if (category.children?.length) setPath([...path, category])
  }

  const handleBack = () => setPath(path.slice(0, -1))

  useEffect(() => {
    if (onPathChange) onPathChange(path)
  }, [path, onPathChange])

  const handleRequest = (category) => {
    alert(`Creating service request for: ${category.name}`)
  }

  return (
    <div className="p-6">
      {/* Back button */}
      {path.length > 0 && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBack}
          className="text-orange-600 mb-4 font-medium"
        >
          ← Back
        </motion.button>
      )}

      {/* Title & Description */}
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-2xl font-bold mb-2"
      >
        {currentCategory?.name || "Service Categories"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-gray-600 mb-6"
      >
        {currentCategory?.description || "Select a category to explore our services."}
      </motion.p>

      {/* Grid of cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategory ? currentCategory.id : "root"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentChildren.map((cat) => {
            const IconComponent = LucideIcons[cat.icon] || LucideIcons.HelpCircle
            const isLeaf = !cat.children || cat.children.length === 0

            return (
              <motion.div
                key={cat.id}
                onClick={() => handleSelect(cat)}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group p-6 rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all cursor-pointer"
              >
                {/* Ícone */}
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <IconComponent className={`${cat.color} h-10 w-10`} />
                </motion.div>

                {/* Título e descrição */}
                <h3 className="text-lg font-semibold text-gray-800 text-center mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-4">
                  {cat.description}
                </p>

                {/* Botão apenas para categorias folha */}
                {isLeaf && (
                  <div className="flex justify-center">
                    <Button
                      size="sm"
                      className="bg-orange-600 hover:bg-orange-700 text-white transition-all"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleRequest(cat)
                      }}
                    >
                      Request Service
                    </Button>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
