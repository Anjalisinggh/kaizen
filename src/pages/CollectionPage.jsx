import { categories, collectionItems, heroImages } from '../data/jewelryData'
import FadeIn from '../components/Common/FadeIn'
import PageHero from '../components/Common/PageHero'
import PrimaryButton from '../components/Common/PrimaryButton'
import SectionHeader from '../components/Common/SectionHeader'
import ProductCard from '../components/Collection/ProductCard'

function CollectionPage({ categorySlug }) {
  const selectedCategory = categories.find((category) => category.name.toLowerCase() === categorySlug)
  const visibleProducts = selectedCategory
    ? collectionItems.filter((product) => product.category.toLowerCase() === selectedCategory.name.toLowerCase())
    : collectionItems

  return (
    <>
      <PageHero
        eyebrow="The Collection"
        title="A complete edit of luminous essentials."
        text="Browse sculptural rings, fluid necklaces, and polished finishing pieces built for layering, gifting, and collecting."
        image={heroImages.detail}
      />

      <section className="py-16 sm:py-24">
        {/* Collection page filter strip */}
        <div className="luxury-container">
          <div className="flex flex-col gap-5 rounded-[2rem] bg-white/70 p-5 shadow-[0_18px_55px_rgba(80,52,25,0.1)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cocoa">Shop By Category</p>
              <h2 className="mt-2 font-serif text-4xl font-semibold text-espresso">New season signatures</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <a
                  key={category.name}
                  href={`#/collections/${category.name.toLowerCase()}`}
                  className="rounded-full border border-sand/70 bg-ivory px-5 py-3 text-xs font-bold text-espresso transition hover:-translate-y-0.5 hover:bg-espresso hover:text-white"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        {/* Collection page featured drop */}
        <div className="luxury-container grid overflow-hidden rounded-[2rem] bg-espresso text-white shadow-[0_28px_90px_rgba(52,35,20,0.2)] lg:grid-cols-[1fr_0.9fr]">
          <FadeIn className="flex min-h-full flex-col justify-between p-8 sm:p-12">
            <SectionHeader
              eyebrow="Limited Drop"
              title="The golden hour capsule."
              text="Warm-toned pieces designed to be worn together: brushed cuffs, fine chain necklaces, and softly reflective rings."
              tone="light"
            />
            <PrimaryButton href="#/product/gold-necklace" className="self-start" variant="light">
              Reserve Pieces
            </PrimaryButton>
          </FadeIn>
          <img
            src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=900&q=85"
            alt="Luxury jewelry capsule"
            className="h-full min-h-96 w-full object-cover"
          />
        </div>
      </section>
    </>
  )
}

export default CollectionPage
