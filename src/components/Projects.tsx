import { useState, useEffect, useRef } from "react"

const flavors = [
  {
    id: 1,
    title: "Классический лимон",
    category: "Традиционный вкус",
    description: "Яркий лимонный вкус с лёгкой кислинкой и натуральной мятой",
    image: "https://cdn.poehali.dev/projects/518c837e-5b82-4c53-90b1-6d750e49a138/files/e8ef7b46-fcdc-4f06-9cee-747681c8ad95.jpg",
    emoji: "🍋",
  },
  {
    id: 2,
    title: "Клубника-базилик",
    category: "Летний хит",
    description: "Спелая клубника с нотками свежего базилика — неожиданно и вкусно",
    image: "https://cdn.poehali.dev/projects/518c837e-5b82-4c53-90b1-6d750e49a138/files/e9fa8b68-fcdc-4f06-9cee-747681c8ad95.jpg",
    emoji: "🍓",
  },
  {
    id: 3,
    title: "Мятный огурец",
    category: "Освежающий",
    description: "Лёгкий и освежающий — идеален в жаркий день",
    image: "https://cdn.poehali.dev/projects/518c837e-5b82-4c53-90b1-6d750e49a138/files/e0fe45b4-5949-43f6-b7e5-f0186535078c.jpg",
    emoji: "🌿",
  },
  {
    id: 4,
    title: "Маракуйя-манго",
    category: "Тропический",
    description: "Экзотический дуэт с ярким тропическим послевкусием",
    image: "https://cdn.poehali.dev/projects/518c837e-5b82-4c53-90b1-6d750e49a138/files/e36d7afb-f673-4216-a3cb-f2e52965e346.jpg",
    emoji: "🥭",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(flavors[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Линейка напитков</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Наши вкусы</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Каждый вкус создан с любовью — как та, что кошки дарят своим хозяевам 🐱
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {flavors.map((flavor, index) => (
            <article
              key={flavor.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(flavor.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6 rounded-2xl">
                <img
                  src={flavor.image || "/placeholder.svg"}
                  alt={flavor.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === flavor.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(flavor.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 text-sm font-semibold text-[#e8521a]">
                  {flavor.category}
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#e8521a] transition-colors">
                    {flavor.emoji} {flavor.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{flavor.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
