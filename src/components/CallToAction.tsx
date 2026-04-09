import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

export function CallToAction() {
  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Найти «Мурчик»</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8 text-balance">
            Уже ждёт вас
            <br />
            в <HighlightedText>«Счастливой жизни»</HighlightedText>!
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Загляните в ближайший магазин «Счастливая жизнь» и возьмите свою любимую бутылочку «Мурчика». Кошки одобряют!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://schastlivaya-zhizn.ru"
              className="inline-flex items-center justify-center gap-3 bg-[#e8521a] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#d04518] transition-colors duration-300 group rounded-full font-semibold"
            >
              Найти магазин
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:hello@murchik.ru"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300 rounded-full"
            >
              Написать нам
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
