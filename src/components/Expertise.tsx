import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"
import Icon from "@/components/ui/icon"

const benefits = [
  {
    title: "Без консервантов",
    description: "Только натуральные ингредиенты без искусственных консервантов и красителей. Чистый состав — чистый вкус.",
    iconName: "Leaf",
  },
  {
    title: "Российское производство",
    description: "Производим в России с использованием отечественного сырья. Поддерживаем местных фермеров и экономику.",
    iconName: "MapPin",
  },
  {
    title: "Витамин C",
    description: "Натуральные цитрусы обогащают каждую бутылку витамином C. Вкусно и полезно одновременно.",
    iconName: "Sun",
  },
  {
    title: "Забота о природе",
    description: "Наша упаковка перерабатывается. Мы думаем о будущем планеты — ведь кошки тоже любят чистую природу.",
    iconName: "Recycle",
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
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
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Почему «Мурчик»</p>
          <h2 className="text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Польза</HighlightedText>, которую
            <br />
            можно выпить
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Мы создали лимонад, которым можно наслаждаться каждый день без угрызений совести. Натурально, вкусно и с заботой о вас.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`relative pl-8 border-l-2 border-[#e8521a]/30 transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Icon name={benefit.iconName} fallback="Star" className="w-10 h-10 mb-4 text-[#e8521a]" strokeWidth={1.25} />
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
