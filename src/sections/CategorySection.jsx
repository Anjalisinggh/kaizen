import CategoryCard from '../components/Categories/CategoryCard'
import SectionHeader from '../components/Common/SectionHeader'
import { categories } from '../data/jewelryData'

function CategorySection() {
  return (
    <section className="py-20 sm:py-28">
      {/* Jewelry categories section */}
      <div className="luxury-container">
        <SectionHeader
          align="center"
          eyebrow="Jewelry Categories"
          title="Discover your signature glow."
          text="Circular forms, soft reflections, and warm metal tones make every category feel considered."
          className="max-w-2xl"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection
