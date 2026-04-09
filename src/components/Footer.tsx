export function Footer() {
  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <img
                src="https://cdn.poehali.dev/files/d2728f45-0033-4ca3-9539-3bffac763388.png"
                alt="Мурчик"
                width={140}
                height={56}
                className="w-auto h-14"
              />
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Натуральный лимонад для всей семьи. Кошки отдыхают — котолюбы «Мурчик» наливают!
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              Продаётся в магазинах <span className="text-[#e8521a] font-semibold">«Счастливая жизнь»</span>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Навигация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-[#e8521a] transition-colors">
                  Наши вкусы
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#e8521a] transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#e8521a] transition-colors">
                  Польза
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e8521a] transition-colors">
                  Где купить
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4">Связь</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@murchik.ru" className="hover:text-[#e8521a] transition-colors">
                  hello@murchik.ru
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e8521a] transition-colors">
                  ВКонтакте
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e8521a] transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Мурчик. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
