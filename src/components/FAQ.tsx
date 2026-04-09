import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Где можно купить лимонад «Мурчик»?",
    answer:
      "«Мурчик» продаётся в магазинах «Счастливая жизнь». Найдите ближайший магазин на их сайте или в мобильном приложении. Мы постепенно расширяем сеть присутствия — следите за обновлениями!",
  },
  {
    question: "Состав натуральный?",
    answer:
      "Да! Мы используем только натуральные ингредиенты: фруктовые и ягодные соки, воду, тростниковый сахар и натуральные ароматизаторы. Никаких искусственных красителей и консервантов.",
  },
  {
    question: "Сколько хранится открытая бутылка?",
    answer:
      "После вскрытия рекомендуем выпить «Мурчик» в течение 1-2 дней, хранить в холодильнике. Без консервантов напиток живёт недолго — зато вкус честный!",
  },
  {
    question: "Можно детям?",
    answer:
      "«Мурчик» создан для всей семьи. Умеренное количество сахара и натуральный состав делают его подходящим для детей. Рекомендуем детям до 3 лет проконсультироваться с педиатром.",
  },
  {
    question: "Есть ли варианты без сахара?",
    answer:
      "Сейчас мы работаем над линейкой «Мурчик Лайт» — с пониженным содержанием сахара. Следите за новостями — скоро на полках «Счастливой жизни»!",
  },
  {
    question: "Как стать партнёром или поставщиком?",
    answer:
      "Если вы хотите продавать «Мурчик» в своём магазине или кафе — напишите нам! Мы открыты к сотрудничеству и рады новым партнёрам по всей России.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-bold leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-semibold text-foreground transition-colors group-hover:text-[#e8521a]">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-[#e8521a] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
