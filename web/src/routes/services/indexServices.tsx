import { useState, Fragment } from "react"
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
  const [path, setPath] = useState<{ id: string; name: string }[]>([])

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-gray-100 flex flex-col items-center transition-all duration-500">
      <section className="w-full text-center mt-12 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Services</h1>
        <p className="text-gray-500 text-lg">Select a service to request</p>
      </section>

      <section className="w-full max-w-6xl px-6">
        
        <Breadcrumb className="flex items-center p-2">
          <BreadcrumbList>
            <BreadcrumbItem className={`${path.length === 0 ? "bg-orange-600 text-white" : "bg-orange-300"} flex items-center h-12 rounded-full px-4 py-2`}>
              <BreadcrumbLink href="/services/indexServices">Services</BreadcrumbLink>
            </BreadcrumbItem>

            {path.map((category, index) => (
              <Fragment key={category.id}>
                {/* Separator between items */}
                <BreadcrumbSeparator key={`sep-${index}`} />

                <BreadcrumbItem>
                  {index === path.length - 1 ? (
                    /* Current page - highlighted */
                    <BreadcrumbPage className="flex items-center bg-orange-600 text-white h-12 rounded-full px-4 py-2">
                      <span className="font-medium">{category.name}</span>
                    </BreadcrumbPage>
                  ) : (
                    /* Completed page - show check icon */
                    <BreadcrumbLink asChild>
                      <button
                        onClick={() => setPath(path.slice(0, index + 1))}
                        className="flex items-center bg-orange-300 text-white h-12 rounded-full px-4 py-2 hover:brightness-95"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-sm">{category.name}</span>
                      </button>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>


        <CategoryNavigator path={path} setPath={setPath} />
      </section>
    </main>
  )
}
