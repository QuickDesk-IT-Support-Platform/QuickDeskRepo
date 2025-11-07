import { useState } from "react"
import { createFileRoute } from "@tanstack/react-router"
import { CategoryNavigator } from "@/components/categoryNavigator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const Route = createFileRoute("/services/indexServices")({
  component: ServicesPage,
})

function ServicesPage() {
  const [path, setPath] = useState([])

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex flex-col items-center transition-all duration-500">
      <section className="w-full text-center mt-12 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Services</h1>
        <p className="text-gray-500 text-lg">Select a service to request</p>
      </section>

      <section className="w-full max-w-6xl px-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/services/indexServices">Services</BreadcrumbLink>
            </BreadcrumbItem>

            {path.map((category, index) => (
              <>
                <BreadcrumbSeparator key={`sep-${index}`} />
                <BreadcrumbItem key={category.id}>
                  {index === path.length - 1 ? (
                    <BreadcrumbPage>{category.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <button
                        onClick={() => setPath(path.slice(0, index + 1))}
                        className="text-gray-700 hover:text-orange-600"
                      >
                        {category.name}
                      </button>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <CategoryNavigator path={path} setPath={setPath} />
      </section>
    </main>
  )
}
