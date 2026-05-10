function CategoryCard({ category }) {
  const Icon = category.icon

  return (
    <article className="group relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_20px_55px_rgba(80,52,25,0.1)] transition duration-300 hover:-translate-y-2">
      <img
        src={category.image}
        alt={category.name}
        className="aspect-square w-full rounded-[1.45rem] object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-x-6 bottom-6 rounded-full bg-white/82 px-5 py-3 text-center shadow-xl backdrop-blur-md">
        <Icon className="mx-auto text-xl text-cocoa" />
        <h3 className="mt-1 font-serif text-2xl font-semibold text-espresso">{category.name}</h3>
      </div>
    </article>
  )
}

export default CategoryCard
