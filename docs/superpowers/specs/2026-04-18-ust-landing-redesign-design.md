# UST Landing — редизайн лендинга (spec)

**Дата:** 2026-04-18
**Проект:** `~/ust_landing`
**Источник референса:** скриншоты нового макета + предыдущая реализация в `~/mag-landing`

## 1. Цель и скоуп

Переписать посадочную страницу магистерской программы «Устойчивые продукты
онлайн-образования» Университета Косыгина в новой визуальной системе: строгий
чёрно-белый минимализм с тонкой векторной графикой (концентрические эллипсы,
лучи-стрелки, декоративные сетки). Старый лендинг — одноэкранный hero с
сине-фиолетовым градиентом; новый — 13 секций на всю страницу.

**В скоупе:**
- Десктоп-вёрстка всех 13 секций + модалка формы.
- Перенос и упрощение формы-заявки (3 поля вместо 4) с отправкой в Telegram.
- SEO-разметка, JSON-LD, статический экспорт.
- Декоративная SVG-графика (часть — экспорт из Figma, часть — inline-компоненты).

**Вне скоупа:**
- Мобильная и планшетная адаптация (отдельная итерация).
- Анимации и параллакс (можно добавить позже).
- CMS/бэкенд — контент захардкожен в `src/data/`.
- Реальная ссылка на «Подать документы» — пока заглушка.
- Реальные фото преподавателей и логотипы партнёров — плейсхолдеры, заменяются
  после получения ассетов.

## 2. Стек и конфигурация

Переиспользуем стек `mag-landing`:

| Элемент | Версия | Источник |
|---|---|---|
| Next.js | 16.1.6 | `output: 'export'`, `reactCompiler: true`, `images.unoptimized` |
| React | 19.2 | + `babel-plugin-react-compiler` |
| Tailwind CSS | v4 | `@tailwindcss/postcss`, tokens через `@theme` |
| shadcn/ui | v3.8 | компоненты `button`, `input`, `dialog` |
| react-hook-form + zod | актуальные | валидация формы |
| react-imask | `^7.6` | маска телефона |
| sonner | `^2.0` | тосты |
| Inter | `next/font/google` | `latin`, `cyrillic` |

**Env:**
```
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=...
NEXT_PUBLIC_TELEGRAM_CHAT_ID=...
NEXT_PUBLIC_TELEGRAM_TOPIC_ID=...
```

**Конфиги копируем из mag-landing:** `next.config.ts`, `tsconfig.json`,
`.prettierrc`, `eslint.config.mjs`, `components.json`, `postcss.config.mjs`.

## 3. Структура проекта

```
src/
  app/
    layout.tsx            # SEO, JSON-LD, Inter, Toaster
    page.tsx              # композиция 13 секций + модалка
    globals.css           # tailwind @theme: токены, Inter, base стили
    favicon.ico
  components/
    ui/                   # shadcn: button.tsx, input.tsx, dialog.tsx
    layout/
      SiteHeader.tsx      # логотип + навигация + CTA
      SiteFooter.tsx      # логотип университета + контакты
    common/
      Section.tsx         # обёртка: variant="light"|"dark", max-width, padding
      SectionHeading.tsx  # типовой заголовок секции
      NumberedItem.tsx    # «(N) title» — заголовок + описание
      Tag.tsx             # pill-тег
      RingsEllipse.tsx    # декор: концентрические эллипсы
      RayLines.tsx        # декор: диагональные линии/стрелки
      GridFrame.tsx       # декор: тонкая сетка-рамка
      WaveStack.tsx       # декор: стопка волнистых овалов
    form/
      ApplicationForm.tsx # 3 поля: name, phone, email
      ApplicationDialog.tsx # shadcn Dialog обёртка
      useApplicationDialog.ts # hook: { isOpen, open, close }
  sections/
    hero/
      index.tsx
      HeroDecor.tsx
    intro-usp/index.tsx
    about-program/index.tsx
    program-description/index.tsx
    career-track/
      index.tsx
      X2Display.tsx
    diploma-startup/index.tsx
    professional-tracking/index.tsx
    teachers/
      index.tsx
      TeacherCard.tsx
      TeachersCarousel.tsx
    partners/index.tsx
    learning-format/index.tsx
    employment/index.tsx
    final-cta/index.tsx
  data/
    navigation.ts
    specialties.ts
    about-points.ts
    career-steps.ts
    diploma-steps.ts
    tracking-tags.ts
    teachers.ts
    partners.ts
    format-tags.ts
    employment-roles.ts
    contacts.ts
  lib/
    telegram.ts           # sendApplication без message
    utils.ts              # cn helper
public/
  icons/
    logo-online-products.svg   # «онлайн...продукты.» (Figma → SVG)
    logo-kosygin.svg           # Университет Косыгина (reuse из mag-landing/logo-2.svg)
  decor/                       # крупные композиции из Figma
    hero-rings.svg
    wave-stack.svg
    career-waves.svg
  teachers/                    # 4–6 фото (плейсхолдеры → реальные)
  partners/
    logo-znanie.svg
    logo-maximum.svg
  og-image.jpg
  robots.txt
  sitemap.xml
docs/
  superpowers/specs/
    2026-04-18-ust-landing-redesign-design.md
```

## 4. Дизайн-токены

Задаются в `src/app/globals.css` через `@theme`:

```css
@theme {
  /* поверхности */
  --color-surface: #FFFFFF;
  --color-surface-dark: #0B0B0B;

  /* текст */
  --color-fg: #0B0B0B;
  --color-fg-dark: #FFFFFF;
  --color-muted: #6B6B6B;
  --color-muted-dark: rgba(255,255,255,0.6);

  /* штрихи декора */
  --color-line: rgba(0,0,0,0.15);
  --color-line-dark: rgba(255,255,255,0.15);

  /* радиусы */
  --radius-tag: 999px;
  --radius-button: 999px;
  --radius-card: 16px;

  /* типографика */
  --text-hero: clamp(36px, 5vw, 72px);
  --text-h2: clamp(28px, 3vw, 48px);
  --text-h3: clamp(20px, 1.8vw, 28px);
  --text-body: 17px;
  --text-display: clamp(160px, 22vw, 320px); /* для X2 */

  /* разметка */
  --container: 1280px;
  --section-py: clamp(64px, 8vw, 120px);
}
```

Заголовкам — `letter-spacing: -0.02em` и `font-weight: 600/700`. Параграфы —
`line-height: 1.5`.

## 5. Общие примитивы (`components/common`)

### `Section`
Обёртка, задаёт вариант темы, горизонтальный padding и max-width контента.
```ts
interface SectionProps {
  variant: 'light' | 'dark'
  id?: string
  className?: string
  children: ReactNode
}
```
Внутри — `bg-surface`/`bg-surface-dark`, `text-fg`/`text-fg-dark`,
`py-[--section-py]`, центрированный контейнер `max-w-[--container]`.

### `SectionHeading`
Типовой крупный заголовок + опциональный подзаголовок. Поддерживает
выравнивание `left | center`.

### `NumberedItem`
`(N)` + `title` + опциональный `subtitle`. Используется в секциях
about-program, career-track, employment.

### `Tag`
pill с границей 1px и padding `8px 20px`. Два варианта `light | dark`.

### Декоративные SVG-компоненты
Все принимают `className`, рисуют внутри `aria-hidden` span с
`pointer-events: none` и `position: absolute`.

- **`RingsEllipse`** — N концентрических вертикальных эллипсов, затухающих к
  краям (используется в hero, teachers, final-cta).
- **`RayLines`** — диагональные штрихи от точки на границе секции к N точкам с
  подписями (diploma-startup, professional-tracking).
- **`GridFrame`** — двух- или трёхколоночная тонкая сетка (about-program,
  employment).
- **`WaveStack`** — стопка горизонтальных волнистых овалов (learning-format,
  career-track).

Сложные композиции (например, «щит» из колец в hero) — экспортируем из Figma как
`public/decor/*.svg` и вставляем через `<img>`/inline, чтобы сохранить точный
рендер.

## 6. Секции (спецификация поведения и контента)

### 6.1 Hero (`#top`, dark)
- `SiteHeader` — на чёрном фоне, без бордера.
  - Слева: логомарка «онлайн…продукты.» (SVG).
  - По центру/справа: навигация — «Поступление 2026» → `#admission`,
    «О программе» → `#about-program`, «Специальности» → `#specialties`.
  - Справа: сейчас в макете нет CTA в шапке — контент-блок с кнопкой
    «Оставить заявку» внутри hero.
- Центр hero: заголовок `Устойчивые продукты онлайн-образования` (h1, hero-size)
  + подзаголовок `Магистерская программа нового поколения`.
- CTA — белая pill-кнопка «Оставить заявку», открывает модалку.
- Фон: `<HeroDecor>` с композицией колец (SVG из Figma).
- Минимальная высота `100svh` на десктопе.

### 6.2 Intro-USP (light)
- Слева: двухстрочный заголовок «Создавайте и масштабируйте цифровые
  образовательно-технические продукты: от идеи до запуска».
- Справа: столбик из 3 `Tag`:
  - «2 квалификации в одном дипломе»
  - «Поступление по портфолио»
  - «Диплом как реальный продукт»
- Разделитель-линия сверху.

### 6.3 About-program (`#about-program`, light + dark accent)
- Верх слева: заголовок-утверждение «Программа объединяет ИТ и менеджмент и
  готовит специалистов нового поколения, способных:».
- `GridFrame` (3 колонки) с двумя диагональными линиями, пересекающими кадр.
- Справа верхний блок — чёрная плашка с заголовком «О программе» (display-size).
- Низ: три `NumberedItem` в колонках сетки:
  - (1) разрабатывать цифровые образовательные продукты
  - (2) управлять платформами и командами
  - (3) масштабировать образовательные проекты

### 6.4 Program-description (dark)
- Один большой параграф (2 абзаца) с описанием программы. Источник текста:
  `src/data/about-points.ts`.
- Тонкий бордер сверху и снизу — полоса-разделитель.

### 6.5 Career-track (`#specialties`, light)
- Слева: заголовок «Расширенная карьерная траектория».
- Якорь `#specialties` на секции целиком — именно сюда скроллит пункт меню
  «Специальности».
- Справа: pill «Один диплом · Две квалификации» + `ul` с двумя специальностями:
  - 09.04.02 — Информационные системы и технологии
  - 38.04.02 — Менеджмент
- Крупно `X2` (display-size) + подпись «возможностей поступления».
- Фон около X2: `WaveStack` с горизонтальными тонкими овалами.
- Внизу три `NumberedItem`:
  - (1) подача сразу на 2 направления
  - (2) единая образовательная траектория
  - (3) поступление по портфолио или тестированию

### 6.6 Diploma-startup (dark)
- Слева: заголовок «Диплом как стартап».
- Справа: `RayLines` с тремя точками-подписями:
  - «Командная работа с первых месяцев»
  - «Разработка собственного образовательного продукта»
  - «Выход на рынок»

### 6.7 Professional-tracking (light)
- Слева: логомарка Университета Косыгина + заголовок «Профессиональный трекинг
  и акселерация» + параграф описания.
- Справа: `RayLines` с внутренним узлом «В рамках программы предусмотрены:» и
  тегами на концах лучей:
  - «помощь в разработке и доработке продукта»
  - «возможность пройти акселерацию для запуска собственного образовательного
    стартапа»
  - «профессиональный трекинг команд»
  - «сопровождение при подготовке заявок на финансирование»

### 6.8 Teachers (dark)
- Заголовок по центру: «Обучение вместе с практиками рынка».
- `TeachersCarousel`: 4 карточки видны одновременно на десктопе, стрелки
  влево/вправо по краям, без автопрокрутки.
- `TeacherCard`:
  - фото 1:1 (скруглённое)
  - ФИО (bold)
  - роль (muted)
  - 3 буллета «Достижение 1/2/3»
- Фон: `RingsEllipse` мелкими линиями.
- Реализация карусели — простая (без внешних либ): `useState(startIndex)` +
  `transform: translateX`. Сдвиг на 1 карточку.

### 6.9 Partners (light)
- Заголовок по центру: «Генеральные партнёры программы:».
- Два SVG-лого в ряд: Знание, MAXIMUM. `max-height: 64px`.

### 6.10 Learning-format (dark)
- Заголовок по центру: «Формат обучения:».
- Стопка из 3 `Tag` по центру (вариант `dark`):
  - Вечерний формат
  - Проектное обучение
  - Возможность совмещения с работой
- Снизу — `WaveStack`.

### 6.11 Employment (dark)
- Заголовок слева: «Трудоустройство выпускников».
- Сетка 2×3 из `NumberedItem` (`GridFrame` задаёт рамку):
  - (1) продукт-менеджер EdTech
  - (2) руководитель образовательной платформы
  - (3) эксперт по цифровому обучению
  - (4) директор по образовательным продуктам
  - (5) основатель стартапа
  - (6) владелец ИИ-продукта

### 6.12 Final-CTA (`#admission`, light)
- Якорь `#admission` на всей секции — сюда ведёт пункт меню «Поступление 2026»
  (именно здесь две кнопки поступления/консультации).
- Центр: крупный заголовок «Создавайте образовательные продукты будущего
  вместе с Университетом Косыгина».
- Ниже: короткий параграф-дисклеймер.
- Две pill-кнопки в ряд:
  - **«Получить консультацию»** (чёрная) — открывает ту же модалку, что и
    «Оставить заявку» из hero. Это один и тот же CTA в двух местах страницы,
    с тем же ApplicationDialog.
  - **«Подать документы»** (outline, `<a target="_blank" rel="noopener">`) —
    ведёт на внешнюю ссылку. Адрес зависит от даты:
    - до 20 июня 2026 — раздел приёмной комиссии на сайте РГУК им. Косыгина
      (точный URL вписывает пользователь в `src/data/contacts.ts`)
    - с 20 июня 2026 — Госуслуги (URL подачи документов, тоже в
      `src/data/contacts.ts`)

  Реализация переключателя — отдельный компонент `AdmissionLink`:

  ```ts
  // src/components/common/AdmissionLink.tsx
  'use client'
  import { useEffect, useState } from 'react'
  import { admission } from '@/data/contacts'

  export function AdmissionLink({ children, className }: Props) {
    // SSR / первый рендер — отдаём pre-switchover (безопасный дефолт).
    const [href, setHref] = useState(admission.beforeSwitchUrl)
    useEffect(() => {
      const now = Date.now()
      setHref(now >= admission.switchAt ? admission.afterSwitchUrl : admission.beforeSwitchUrl)
    }, [])
    return <a href={href} className={className} target="_blank" rel="noopener noreferrer">{children}</a>
  }
  ```

  `src/data/contacts.ts`:
  ```ts
  export const admission = {
    switchAt: new Date('2026-06-20T00:00:00+03:00').getTime(),
    beforeSwitchUrl: 'https://rguk.ru/...', // раздел приёмной комиссии
    afterSwitchUrl: 'https://www.gosuslugi.ru/...' // подача через Госуслуги
  }
  ```

  До получения обоих URL от пользователя — оба поля содержат `#` (заглушка).
- Фон: `RingsEllipse` внизу.

### 6.13 SiteFooter (dark)
- Слева: логотип Университета Косыгина + адрес (`г. Москва, ул. Малая
  Калужская, д. 1`).
- Справа: «Напишите нам: online@rguk.ru» (link `mailto:`).
- Сверху маленький блок юридического названия университета.

## 7. Модалка «Получить консультацию!»

**Единая модалка на оба CTA.** Кнопка «Оставить заявку» в hero и кнопка
«Получить консультацию» в final-CTA открывают одну и ту же модалку с одинаковым
содержимым и одинаковым заголовком «Получить консультацию!». По сути это два
триггера одного действия, расставленных в разных точках страницы.

Открывается из hero-CTA и final-CTA. Реализация:

- `ApplicationDialog` — обёртка `shadcn/Dialog` c заголовком и кроссом.
- `ApplicationForm` — форма:
  - `name` — `required`, ≥ 2 слов.
  - `phone` — маска `+7 (000) 000-00-00`, 11 цифр.
  - `email` — валидный email.
  - Submit: `sendApplication({ name, phone, email })`.
- Состояние модалки — `useApplicationDialog` (tiny hook с
  `useState(false)` + `open/close`). Достаточно для одной модалки.
  В `app/page.tsx` прокидываем `onOpenModal` в hero и final-CTA.
- После успеха: `close()` + `toast.success('Заявка отправлена!')`.
- При ошибке: `toast.error(err.message)`.

Поле `message` удаляется из схемы и из `sendApplication`.

## 8. Навигация и якоря

Три пункта в шапке и их целевые секции:

| Пункт меню | Якорь | Целевая секция |
|---|---|---|
| Поступление 2026 | `#admission` | 6.12 Final-CTA (две кнопки поступления) |
| О программе | `#about-program` | 6.3 About-program (заголовок-утверждение) |
| Специальности | `#specialties` | 6.5 Career-track (X2 + 09.04.02 / 38.04.02) |

`SiteHeader` рендерит `<a href="#...">`. Плавный скролл — через
`scroll-behavior: smooth` в `html`.

Якоря — на `<section id="...">`. `scroll-margin-top` задаётся равным высоте
шапки, чтобы заголовок секции не уезжал под фиксированную навигацию (если
шапка станет sticky — зависит от финального решения по поведению хедера; по
умолчанию в этой итерации хедер не sticky).

## 9. Контент-файлы (`src/data/*`)

Все тексты и списки — как типизированные массивы:

```ts
// src/data/teachers.ts
export interface Teacher {
  id: string
  name: string
  role: string
  photo: string      // путь в /public/teachers/
  achievements: [string, string, string]
}
export const teachers: Teacher[] = [ /* 4–6 штук */ ]
```

Аналогично для `employment-roles.ts`, `tracking-tags.ts`, `format-tags.ts`,
`career-steps.ts`, `diploma-steps.ts`, `specialties.ts`, `about-points.ts`,
`partners.ts`, `navigation.ts`, `contacts.ts`.

## 10. SEO и метаданные

Копируем `layout.tsx` из mag-landing, оставляем существующие:
- `metadata` (title, description, keywords, OG, Twitter, robots).
- `JSON-LD` с `EducationalOrganization` и `Course`.
- `sitemap.xml`, `robots.txt`, Google/Yandex verification HTML.

Обновляем:
- `og-image.jpg` — новая обложка в чёрно-белой стилистике (плейсхолдер → реальный
  после утверждения).
- `description` и `keywords` — пересмотреть под новые акценты («диплом как
  стартап», «профессиональный трекинг»).

## 11. Принципы реализации

- **Тема по секциям** — не через CSS-prefers-color-scheme, а через
  `<Section variant="dark">`. Каждая секция независима по цвету.
- **Декор не блокирует контент** — все декоративные SVG с
  `pointer-events: none` и `aria-hidden`, `z-index` ниже контента.
- **Контент отдельно от разметки** — секция импортирует из `data/`, не хранит
  строки внутри JSX (кроме заголовков самой секции).
- **Нет stateful-компонентов лишний раз** — только модалка и карусель требуют
  `useState`. Остальное — серверные компоненты (Next.js app dir).
- **Десктоп-first** — фиксируем breakpoint `lg: 1024`, ниже — одна колонка и
  сохранение читаемости без сломанной вёрстки. Полноценная мобилка — отдельный
  спек.
- **ESLint + Prettier** — обязательно до коммита, конфиги из mag-landing.

## 12. Риски и открытые вопросы

- **Ассеты из Figma.** Для точной передачи hero-декора и wave-stack нужен
  SVG-экспорт. Если нет — рисую inline-компоненты «по духу». Пиксель-в-пиксель
  не гарантируется.
- **Фото преподавателей** и **логотипы партнёров** — нужны реальные файлы.
  До них используем плейсхолдеры (серый фон + инициалы / monogram).
- **«Подать документы»** — URL временно заглушка. Пользователь вписывает в
  `data/contacts.ts` оба адреса: ссылку на раздел приёмной комиссии РГУК
  (работает до 2026-06-20) и ссылку на Госуслуги (работает с 2026-06-20).
  Компонент `AdmissionLink` переключает их на клиенте по дате. Статический
  экспорт не мешает — `useEffect` корректно отработает после mount.
- **Шрифт в X2** — clamp до 320px. Нужно убедиться, что на узких экранах
  не ломает ширину. Возможно, придётся снизить верхнюю границу.
- **Карусель преподавателей** — пишем свою (простая). Если появится требование
  swipe/touch — переезжаем на `embla-carousel-react`.

## 13. Следующий шаг

Перевод этого spec в детальный implementation plan через
`superpowers:writing-plans`. План разобьёт работу на атомарные задачи по
секциям с явным порядком: конфиг → общие примитивы → данные → секции →
модалка → SEO → полировка.
