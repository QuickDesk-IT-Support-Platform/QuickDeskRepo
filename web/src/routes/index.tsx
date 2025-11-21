import { createFileRoute } from "@tanstack/react-router"
import { Carousel } from "@/components/ui/carousel"
import { CarouselPartners } from "@/components/ui/carouselPartners"
import { HeroSection } from "@/components/ui/heroSection"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/navbar"

export const Route = createFileRoute("/")({
  component: Home,
})

const carouselData = [
  {
    id: 1,
    title: "Ride the Waves",
    image:
      "https://www.mercedes-benz.co.za/content/dam/hq/passengercars/cars/campaigns/avatar-the-way-of-water/brand-video/11-2022/images/mercedes-benz-avatar-brand-videostill-3302x1858-11-2022.jpg",
  },
  {
    id: 2,
    title: "Aim for greatness",
    image:
      "https://bmw.scene7.com/is/image/BMW/bmw-i5-touring-G61_ionity_DI23_000182563:3to2?fmt=webp&wid=2560&hei=1707",
  },
  {
    id: 3,
    title: "Just Do It.",
    image:
      "https://calebsmoot.wordpress.com/wp-content/uploads/2018/09/nikead.jpg",
  },
  {
    id: 4,
    title: "Dive into luxury",
    image:
      "https://www.rolexboutique-alamoana.com/on/demandware.static/-/Library-Sites-new-rolexAlaMoana/default/dw6208009a/images/rolex-v7/rolex-collection-pages/rolex-collection-pages-assets/rolex-collection-page-submariner/rolex-collection-page-submariner-assets-landscape/rolex-submariner-watches-rolex-boutique-ben-bridge-ala-moana.jpg",
  },
]

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="h-20"></div>
      <div className="flex flex-col items-center justify-center pt-10">
        {/* Carousel */}
        <Carousel items={carouselData} />

        {/* Linha separação */}
        <div className="w-3/4 mt-20 border-t border-gray-400 shadow-[0_1px_5px_rgba(0,0,0,0.1)]" />

        {/* Secção “Partners” */}
        <section className="mt-12 mb-24 text-center max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-800">
            Meet some of our <span className="text-sky-600 font-bold">partners</span>
          </h2>
          <p className="text-gray-600 mt-3 text-lg mb-10">
            We’re proud to collaborate with global leaders in innovation and technology, building
            solutions that drive progress and performance.
          </p>

          {/* Carousel de parceiros */}
          <CarouselPartners />
          <HeroSection />
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default Home
