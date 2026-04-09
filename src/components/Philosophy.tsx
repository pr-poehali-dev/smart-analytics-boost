import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "Только натуральное",
    description:
      "Мы используем настоящие фрукты и ягоды без искусственных красителей и усилителей вкуса. Каждая бутылка — это честный вкус природы.",
  },
  {
    title: "Рецепт с любовью",
    description:
      "«Мурчик» создавался теми, кто обожает кошек и верит, что хорошее настроение начинается с правильного напитка. Это не просто лимонад — это забота.",
  },
  {
    title: "Для всей семьи",
    description:
      "Мягкий вкус, умеренная сладость и никаких лишних добавок. «Мурчик» подходит детям и взрослым — всем, кто ценит простое удовольствие.",
  },
  {
    title: "Мурлычащее качество",
    description: "Каждая партия проходит контроль качества. Мы следим, чтобы каждый глоток «Мурчика» был таким же вкусным, как первый.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наша философия</p>
            <h2 className="text-6xl md:text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
              Лимонад с
              <br />
              <HighlightedText>душой</HighlightedText>
            </h2>

            <div className="relative hidden lg:block rounded-2xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/518c837e-5b82-4c53-90b1-6d750e49a138/files/e0fe45b4-5949-43f6-b7e5-f0186535078c.jpg"
                alt="Мурчик лимонад — натуральные ингредиенты"
                className="opacity-90 relative z-10 w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              «Мурчик» — это больше, чем лимонад. Это тёплое настроение в бутылке, созданное для тех, кто умеет наслаждаться простыми радостями жизни — как кошки.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-[#e8521a]/50 text-sm font-bold">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
