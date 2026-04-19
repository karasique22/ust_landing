# UST Landing Redesign — Implementation Plan

> **For agentic workers:** Реализуй план по порядку, задача за задачей. Шаги в checkbox-формате (`- [ ]`) для трекинга. После каждой задачи — commit и переход к следующей.
>
> **Этот план — карта, а не черновик кода.** Полная реализация каждой секции лежит на исполнителе (ты работаешь с PNG-скриншотом секции перед глазами). Код в плане приведён только там, где важна точность: утилиты, валидация, state-store, date-switch. Вёрстка секций — твоя задача по скрину, с соблюдением описанных ограничений.

**Goal:** Собрать ust-landing на Next.js 16 со статическим экспортом — 13-секционный чёрно-белый лендинг вместо одноэкранного mag-landing. Mobile baseline (одна колонка + гамбургер-меню) учтён, pixel-perfect мобильные макеты — отдельной итерацией.

**Architecture:** app router, `output: 'export'`. Секции — независимые модули в `src/sections/<name>/`. Общие UI- и декоративные примитивы — в `src/components/common/`. Контент — типизированные массивы в `src/data/`. Одна модалка консультации, общий стор `useApplicationDialog` без prop-drilling.

**Tech Stack:** Next.js 16.1, React 19, Tailwind CSS v4, shadcn/ui (button / input / dialog / sheet), Inter (next/font), react-hook-form + zod, react-imask, sonner, Telegram Bot API.

**Spec:** [docs/superpowers/specs/2026-04-18-ust-landing-redesign-design.md](../specs/2026-04-18-ust-landing-redesign-design.md)
**Source project для копирования (отдельный репозиторий):** `~/mag-landing/`

---

## Правила и соглашения

**Prettier:** табы, одинарные кавычки, **без точек с запятой**, single attribute per line, no trailing commas, arrow parens avoid. Наследуется из `.prettierrc` (копируется из mag-landing в Task 1). Не отклоняйся.

**Next.js specifics:** `output: 'export'` и `images.unoptimized: true`. Используй `next/image` для изображений, помня что оптимизации нет. Все клиентские компоненты помечай `'use client'` (модалка, карусель, форма, AdmissionLink, SiteHeader с гамбургером).

**Git:**
- Один коммит на задачу. Сообщения conventional commits (`feat:`, `chore:`, `fix:`, `docs:`).
- **Не упоминай ассистента** — ни в теле коммита, ни как автора, ни в trailers. Не трогай `git config`.

**Верификация задачи:** к каждой секции — `pnpm exec tsc --noEmit` + `pnpm lint` + ручной визуальный check в браузере по PNG. Если задача про компонент без скрина — смотри только на типы и рендер-санити.

---

## Mobile baseline (сквозное требование для всех секций)

**Breakpoints:** `md: 768px`, `lg: 1024px`. Base (без префикса) = мобилка.

Эти правила действуют во всех секциях без исключения. Упоминать в каждой задаче не буду — это фон.

1. **Все grid-раскладки по умолчанию — одна колонка.** Многоколоночность включается от `md:` или `lg:`.
2. **Horizontal padding:** `px-4 md:px-8 lg:px-12`. Без лютых отступов на мобиле.
3. **Заголовки** через токены `text-hero`/`text-h2`/`text-h3` (они уже clamp-нутые). Дополнительно на мобиле не ломай — `clamp` сделает своё.
4. **Декор (RingsEllipse / RayLines / GridFrame / WaveStack)** на <768 — либо `hidden md:block`, либо с уменьшенными пропорциями. Лучи к правому краю и сетки в about-program и employment на мобиле полностью скрываются.
5. **Nav в шапке** — на <768 заменяется кнопкой-гамбургером, открывающей `shadcn/Sheet` с пунктами меню вертикально.
6. **Кнопки CTA** — на <768 `w-full`, иначе `w-auto`.
7. **Модалка** — на <768 `max-w-[calc(100vw-2rem)]`, `p-6` вместо `p-10`.
8. **Teachers carousel** — на <768 показывает 1 карточку за раз, стрелки поменьше, карточка `w-[calc(100vw-4rem)]`. На md+ — 2, на lg+ — 4.
9. **Employment grid** — на <768 одна колонка; на md — 2×3.
10. **Final-CTA кнопки** — на <768 стек (column), на md+ — в ряд.
11. **Никакого горизонтального скролла.** Все широкие декоры в `overflow-hidden` своих секций.
12. **Hero** — `min-h-svh` работает и на мобиле, но заголовок не должен вылезать — проверяй в 375px.

Финальная Task 38 включает явный mobile smoke-test в 375px / 768px / 1280px.

---

## Порядок фаз

1. Bootstrap — Tasks 1–3
2. Утилиты и дизайн-токены — Tasks 4–6
3. UI-примитивы shadcn — Task 7
4. Общие примитивы — Tasks 8–11
5. Декоративные SVG — Tasks 12–15
6. Данные — Task 16
7. Форма и модалка — Tasks 17–19
8. AdmissionLink — Task 20
9. Layout (Header+Footer) — Tasks 21–22
10. Секции — Tasks 23–34
11. Сборка страницы — Task 35
12. SEO — Task 36
13. Public assets — Task 37
14. Финальная проверка (в т.ч. мобильная) — Task 38

---

## Task 1 — Bootstrap проекта

**Цель:** Минимально рабочий Next.js с конфигами из mag-landing. Страница возвращает «bootstrap ok».

**Files:** корневые конфиги + `src/app/{layout,page,globals.css}`.

- [ ] Скопировать из `~/mag-landing/`: `package.json`, `tsconfig.json`, `.prettierrc`, `.gitignore`, `.npmrc`, `eslint.config.mjs`, `next.config.ts`, `postcss.config.mjs`, `components.json`.
- [ ] В `package.json` поменять `"name"` на `"ust-landing"`. Остальное — как есть.
- [ ] Создать каталоги: `src/{app,components/{ui,common,layout,form},sections,data,lib}`, `public/{icons,decor,teachers,partners}`.
- [ ] `src/app/globals.css` — одна строка `@import 'tailwindcss';`.
- [ ] `src/app/layout.tsx` — минимальный: html[lang=ru], body с Inter (`next/font/google`, subsets: `['latin','cyrillic']`), metadata с title/description-заглушкой.
- [ ] `src/app/page.tsx` — `<main>bootstrap ok</main>`.
- [ ] `pnpm install`, `pnpm dev`, проверить `http://localhost:3000`, остановить.
- [ ] `pnpm lint && pnpm exec tsc --noEmit` — чисто.
- [ ] `git init -q`, первый коммит: `chore: bootstrap next.js project`.

---

## Task 2 — .env.example и README

- [ ] `.env.example` с тремя `NEXT_PUBLIC_TELEGRAM_*=` пустыми.
- [ ] `README.md` — адаптируй из mag-landing: установка, env, dev, build.
- [ ] Commit: `chore: add env template and readme`.

---

## Task 3 — Базовые стили в globals.css

- [ ] Дописать в `globals.css`:
  - `html { scroll-behavior: smooth; -webkit-text-size-adjust: 100% }`
  - `body { background: #fff; color: #0b0b0b; font-family: var(--font-inter), system-ui, sans-serif; -webkit-font-smoothing: antialiased }`
  - `button { cursor: pointer }`
  - `*:focus-visible { outline: 2px solid currentColor; outline-offset: 2px }`
- [ ] Проверить в браузере — шрифт Inter, фон белый.
- [ ] Commit: `feat: add base html/body styles`.

---

## Task 4 — Дизайн-токены через `@theme`

- [ ] В `globals.css` добавить блок `@theme { ... }` со всеми токенами из Section 4 спека:
  - Цвета: `--color-surface`, `--color-surface-dark`, `--color-fg`, `--color-fg-dark`, `--color-muted`, `--color-muted-dark`, `--color-line`, `--color-line-dark`.
  - Радиусы: `--radius-tag: 999px`, `--radius-button: 999px`, `--radius-card: 16px`.
  - Размеры текста (clamp): `--text-hero`, `--text-h2`, `--text-h3`, `--text-body`, `--text-display` (для X2).
  - Spacing: `--spacing-section-y: clamp(64px, 8vw, 120px)`.
  - Ширина контейнера: `--container-w: 1280px`.
  - `--font-sans: 'Inter', sans-serif`.
- [ ] Smoke-test: временно в `page.tsx` поставить `<h1 className="text-hero font-semibold">Test</h1>` и проверить, что размер прилипает. Откатить.
- [ ] Commit: `feat: add design tokens via @theme`.

---

## Task 5 — Утилита `cn`

- [ ] Скопировать `src/lib/utils.ts` из mag-landing (там `cn` через `clsx` + `tailwind-merge`).
- [ ] Убедиться, что зависимости `clsx` и `tailwind-merge` есть в package.json (они были).
- [ ] Commit: `feat: add cn utility`.

---

## Task 6 — `src/lib/telegram.ts` без поля message

**Зачем код целиком:** escape-логика и формат сообщения критичны, легко сломать.

- [ ] Создать `src/lib/telegram.ts`:

```ts
const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? ''
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ?? ''
const TELEGRAM_TOPIC_ID = process.env.NEXT_PUBLIC_TELEGRAM_TOPIC_ID

export interface ApplicationData {
	name: string
	phone: string
	email: string
}

export async function sendApplication(data: ApplicationData) {
	if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
		throw new Error('Telegram не настроен')
	}

	const esc = (s: string) => s.replace(/[_*[\]()~`>#+=|{}.!\\-]/g, '\\$&')

	const text = [
		'*📬 Новая заявка\\!*\n',
		`*👤 ФИО:* ${esc(data.name)}`,
		`*📞 Телефон:* ${esc(data.phone)}`,
		`*✉️ Email:* ${esc(data.email)}`
	].join('\n')

	const res = await fetch(
		`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				chat_id: TELEGRAM_CHAT_ID,
				...(TELEGRAM_TOPIC_ID && {
					message_thread_id: Number(TELEGRAM_TOPIC_ID)
				}),
				text,
				parse_mode: 'MarkdownV2'
			})
		}
	)

	if (!res.ok) throw new Error('Ошибка отправки')
}
```

Эмодзи в тексте — часть формата Telegram-сообщения, не UI.

- [ ] Commit: `feat: add telegram sendApplication helper`.

---

## Task 7 — Скопировать shadcn UI-компоненты

- [ ] Скопировать из mag-landing в `src/components/ui/`: `button.tsx`, `input.tsx`, `dialog.tsx`, `sheet.tsx` (sheet нужен для мобильного гамбургер-меню).
- [ ] `pnpm exec tsc --noEmit` — чисто (убедись, что `@/components/ui/*` резолвится через `tsconfig.json paths`).
- [ ] Commit: `feat: add shadcn ui components`.

---

## Task 8 — Примитив `Section`

**Назначение:** обёртка секции с выбором темы и стандартным контейнером.

**Props:**
```ts
interface SectionProps {
	id?: string
	variant?: 'light' | 'dark'
	className?: string      // на <section>
	innerClassName?: string // на внутренний container
	children: ReactNode
}
```

**Поведение:**
- `variant='dark'` → `bg-[var(--color-surface-dark)] text-[var(--color-fg-dark)]`, иначе светлая.
- `py-[var(--spacing-section-y)]`, `scroll-mt-24` (для якорного скролла под шапку).
- `relative isolate` — чтобы декоры-абсолюты жили внутри секции.
- Inner container: `max-w-[var(--container-w)] mx-auto px-4 md:px-8 lg:px-12`.

- [ ] Реализовать.
- [ ] Smoke: два `<Section>` (light + dark) на странице — обе рисуются корректно. Откатить page.tsx.
- [ ] Commit: `feat: add Section primitive`.

---

## Task 9 — `SectionHeading`

**Props:** `{ as?: 'h1'|'h2'|'h3', align?: 'left'|'center', size?: 'hero'|'h2'|'h3', className?, children }`.

**Поведение:** применяет соответствующий token-класс (`text-hero`/`text-h2`/`text-h3`), `font-semibold tracking-[-0.02em] leading-[1.05]`, опциональный `text-center`.

- [ ] Реализовать.
- [ ] Commit: `feat: add SectionHeading`.

---

## Task 10 — `Tag` (pill)

**Props:** `{ variant?: 'light'|'dark', size?: 'sm'|'md', className?, children }`.

**Поведение:** inline-flex, `rounded-[var(--radius-tag)]`, бордер 1px (`border-[var(--color-line)]` или `border-[var(--color-line-dark)]`), прозрачный фон, padding зависит от size.

- [ ] Реализовать.
- [ ] Commit: `feat: add Tag pill primitive`.

---

## Task 11 — `NumberedItem`

**Props:** `{ number: number, title: ReactNode, subtitle?: ReactNode, className? }`.

**Поведение:** колонка с тремя строками — `(N)` маленьким opacity-60, `title` средним font-medium, опциональный `subtitle` маленьким opacity-60.

- [ ] Реализовать.
- [ ] Commit: `feat: add NumberedItem`.

---

## Task 12 — Декоратив `RingsEllipse`

**Назначение:** концентрические вертикальные эллипсы (hero, teachers, final-cta).

**Props:** `{ count?: number, color?: string, strokeWidth?: number, className? }`.

**Реализация:** inline SVG `viewBox="0 0 1000 600"`, N эллипсов с нарастающим `rx/ry` и затухающей opacity. `aria-hidden`, `pointer-events-none`.

**Mobile:** контейнер применяет `hidden md:block` или уменьшенный размер. Сам компонент mobile-specific не делает.

- [ ] Реализовать.
- [ ] Smoke на временной странице (чёрный фон, RingsEllipse сверху — видно кольца).
- [ ] Commit: `feat: add RingsEllipse decor`.

---

## Task 13 — Декоратив `RayLines`

**Назначение:** диагональные лучи из одной точки к N точкам с подписями (diploma-startup, professional-tracking).

**Props:** `{ origin?: { x, y }, targets: { x, y }[], color?, strokeWidth?, className? }`.

**Реализация:** SVG `viewBox="0 0 100 100"`, `preserveAspectRatio="none"`, `<line vectorEffect="non-scaling-stroke">` для каждой цели.

- [ ] Реализовать.
- [ ] Commit: `feat: add RayLines decor`.

---

## Task 14 — Декоратив `GridFrame`

**Назначение:** тонкая сетка-рамка (about-program, employment).

**Props:** `{ columns?, rows?, color?, strokeWidth?, className? }`.

**Реализация:** SVG `viewBox="0 0 100 100"`, прямоугольник-обводка + вертикальные/горизонтальные делители по числу колонок/рядов.

- [ ] Реализовать.
- [ ] Commit: `feat: add GridFrame decor`.

---

## Task 15 — Декоратив `WaveStack`

**Назначение:** стопка волнистых горизонтальных линий (career-track, learning-format).

**Props:** `{ count?, color?, strokeWidth?, className? }`.

**Реализация:** SVG `viewBox="0 0 1000 400"`, набор `<path>` с Q-кривыми. Ширина каждой волны варьируется (у центральных самая большая, у крайних — меньше).

- [ ] Реализовать.
- [ ] Commit: `feat: add WaveStack decor`.

---

## Task 16 — Контент-файлы в `src/data/`

Все файлы — типизированные массивы/константы. Тексты — из спека (Section 6). Дополнительный контент (описания преподавателей, достижения) — временные заглушки, помеченные в README.

- [ ] `navigation.ts` — `NavItem[]`: три пункта с якорями `#admission`, `#about-program`, `#specialties`.
- [ ] `contacts.ts` — `contacts = { address, email, legalName }` + `admission = { switchAt: Date('2026-06-20').getTime(), beforeSwitchUrl: '#', afterSwitchUrl: '#' }`. URL оставь `#`, пользователь впишет.
- [ ] `usp-tags.ts` — массив 3 строк (2 квалификации / по портфолио / реальный продукт).
- [ ] `about-points.ts` — `AboutPoint[]` (number+text) на 3 элемента + `aboutIntroText`.
- [ ] `program-description.ts` — 2 абзаца (из спека 6.4).
- [ ] `specialties.ts` — `Specialty[]`: `09.04.02 ИСиТ` и `38.04.02 Менеджмент`.
- [ ] `career-steps.ts` — 3 `CareerStep` (number+title).
- [ ] `diploma-steps.ts` — 3 `DiplomaStep`.
- [ ] `tracking-tags.ts` — `trackingIntro` + 4 строки-тега.
- [ ] `teachers.ts` — `Teacher[]` на 4 человек (Миткин, Бибулатова, 2× Иванов). Фото = `/teachers/placeholder.jpg` для всех. Достижения = временные строки.
- [ ] `partners.ts` — `Partner[]` на 2 (Знание, MAXIMUM). Лого = `/partners/logo-{znanie,maximum}.svg`.
- [ ] `format-tags.ts` — 3 строки.
- [ ] `employment-roles.ts` — `EmploymentRole[]` на 6 ролей (number+title+optional subtitle, `продукт-менеджер` + subtitle `EdTech`).
- [ ] `pnpm exec tsc --noEmit` — все типы консистентны.
- [ ] Commit: `feat: add content data files`.

---

## Task 17 — `ApplicationForm`

**Где:** `src/components/form/ApplicationForm.tsx`. `'use client'`.

**Props:** `{ onSuccess: () => void, onError?: (err: Error) => void }`.

**Поведение:** 3 поля — ФИО (zod: ≥2 слов после split по `\s+`), Телефон (react-imask, маска `+7 (000) 000-00-00`, проверка на 11 цифр), Email (zod `.email()`). Submit → `sendApplication` → `onSuccess` или `onError`.

**Зачем фрагмент:** zod-схема точная.

```ts
const schema = z.object({
	name: z
		.string()
		.min(1, 'Введите ФИО')
		.refine(v => v.trim().split(/\s+/).length >= 2, 'Введите имя и фамилию'),
	phone: z
		.string()
		.refine(
			v => v.replace(/\D/g, '').length === 11,
			'Введите полный номер телефона'
		),
	email: z.string().min(1, 'Введите email').email('Некорректный email')
})
```

**UI:** поля — shadcn `Input` (кроме phone — `IMaskInput` через `Controller`). Кнопка submit — `Button` (shadcn), label: «Оставить заявку!», full-width на мобиле.

- [ ] Реализовать.
- [ ] Commit: `feat: add ApplicationForm with 3 fields`.

---

## Task 18 — Хук `useApplicationDialog`

**Зачем:** модалка открывается из hero и final-cta без prop-drilling. Используем external store через `useSyncExternalStore`.

**Где:** `src/components/form/useApplicationDialog.ts`. `'use client'`.

**API:** `{ isOpen, open, close, setOpen }`.

```ts
'use client'
import { useSyncExternalStore } from 'react'

let isOpen = false
const listeners = new Set<() => void>()
const emit = () => { for (const l of listeners) l() }
const subscribe = (l: () => void) => { listeners.add(l); return () => listeners.delete(l) }
const getSnapshot = () => isOpen
const getServerSnapshot = () => false

export function useApplicationDialog() {
	const open = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
	return {
		isOpen: open,
		open: () => { isOpen = true; emit() },
		close: () => { isOpen = false; emit() },
		setOpen: (v: boolean) => { isOpen = v; emit() }
	}
}
```

- [ ] Реализовать.
- [ ] Commit: `feat: add useApplicationDialog shared store`.

---

## Task 19 — `ApplicationDialog`

**Где:** `src/components/form/ApplicationDialog.tsx`. `'use client'`.

**Поведение:** shadcn `Dialog`, `open`/`onOpenChange` из `useApplicationDialog`. Внутри — заголовок «Получить консультацию!» (h2, крупный) + `ApplicationForm`. На успех — `close()` + `toast.success(...)`, на ошибку — `toast.error(err.message)`.

**Мобилка:** `DialogContent` с `max-w-2xl`, но на <768 — внутренний padding меньше (`p-6 md:p-10`), content не прижимается к краям (`mx-4`).

**Также:** добавить `<Toaster position="bottom-center" richColors />` в `layout.tsx` из `sonner`.

- [ ] Реализовать Dialog + Toaster.
- [ ] Commit: `feat: add ApplicationDialog modal`.

---

## Task 20 — `AdmissionLink` с date-switch

**Где:** `src/components/common/AdmissionLink.tsx`. `'use client'`.

**Зачем код:** логика подмены URL по дате требует точности.

```ts
'use client'
import { useEffect, useState } from 'react'
import { admission } from '@/data/contacts'
import { cn } from '@/lib/utils'

interface AdmissionLinkProps {
	className?: string
	children: React.ReactNode
}

export function AdmissionLink({ className, children }: AdmissionLinkProps) {
	const [href, setHref] = useState(admission.beforeSwitchUrl)
	useEffect(() => {
		const now = Date.now()
		setHref(now >= admission.switchAt ? admission.afterSwitchUrl : admission.beforeSwitchUrl)
	}, [])
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={cn(className)}
		>
			{children}
		</a>
	)
}
```

На SSR/первом рендере всегда выдаёт `beforeSwitchUrl` — это безопасно для статического экспорта, клиент переключит при mount.

- [ ] Реализовать.
- [ ] Commit: `feat: add AdmissionLink with date switch`.

---

## Task 21 — `SiteHeader` (с мобильным гамбургером)

**Где:** `src/components/layout/SiteHeader.tsx`. `'use client'`.

**Содержит:**
- Слева: логотип «онлайн…продукты.» — на первом этапе `<span>` с текстом этого стиля. Если файл `public/icons/logo-online-products.svg` появится — заменить на `next/image`.
- Центр/справа: навигация из `@/data/navigation` — **скрыта на <768** (`hidden md:flex`).
- Справа (desktop): кнопка-ссылка «Оставить заявку» — обводка белым, открывает модалку через `useApplicationDialog.open()`.
- Справа (mobile): иконка-гамбургер (можно простой `☰` или `lucide-react/Menu`) — открывает `shadcn/Sheet`. Внутри Sheet — вертикальное меню (те же navigation-пункты) + кнопка «Оставить заявку» внизу.

**Prop:** без props — сам забирает стор и data.

**Tone:** прозрачный фон, белый текст (встраивается в hero-секцию, которая чёрная).

- [ ] Реализовать.
- [ ] Smoke: проверить и в 375px (должен быть виден гамбургер), и в 1280px (nav + кнопка).
- [ ] Commit: `feat: add SiteHeader with mobile nav`.

---

## Task 22 — `SiteFooter`

**Где:** `src/components/layout/SiteFooter.tsx`. Серверный компонент.

**Содержит:** тёмный фон. Две колонки на md+:
- Слева: логотип Косыгина (скопировать `~/mag-landing/public/icons/logo-2.svg` → `public/icons/logo-kosygin.svg`) + «УНИВЕРСИТЕТ КОСЫГИНА» вразбивку, ниже — адрес.
- Справа: юридическое название (маленьким opacity) + mailto-ссылка на email.

На мобиле колонки стекаются, текст — left-align.

- [ ] Скопировать svg, реализовать компонент.
- [ ] Commit: `feat: add SiteFooter`.

---

# Секции (Tasks 23–34)

**Общие правила для всех секций ниже:**

1. Файл: `src/sections/<name>/index.tsx`, именованный экспорт `<Name>Section`.
2. Оборачивай в `<Section variant="...">` (если нужен id для якоря — прокидывай).
3. Контент — только из `src/data/*`. Никаких строк в JSX (кроме заголовков секции — они в спеке).
4. Декор — через соответствующий примитив, позиционированный `absolute inset-0` внутри `relative` контейнера.
5. **Mobile:** grid одноколоночный по умолчанию, многоколоночный с `md:`. Декоры крупные прячутся `hidden md:block`.
6. **Верификация секции:** подключить в page.tsx, `pnpm dev`, сравнить с PNG, потом в devtools переключить в 375px — не должно быть горизонтального скролла и «разлетевшихся» блоков.
7. Commit: `feat: add <section-name> section`.

Подробности по каждой секции ниже.

---

## Task 23 — Hero (`#top`, dark)

**Reference PNG:** верхний чёрный скрин с большим заголовком, подзаголовком и кнопкой.

**Содержит:**
- `SiteHeader` встроен внутрь hero (не в layout) — шапка живёт поверх hero-фона.
- По центру: h1 «Устойчивые продукты онлайн-образования» (text-hero, перенос на 2 строки на десктопе через `<br className="hidden md:block" />` или через max-width).
- Под h1: подзаголовок «Магистерская программа нового поколения» (text-lg, opacity-80).
- Кнопка «Оставить заявку» — белая pill, чёрный текст; клик → `useApplicationDialog.open()`.
- Фон: `HeroDecor` = композиция `RingsEllipse` снизу, уходящая в чёрный. Размер на мобиле — уменьшенный или `hidden`.

**Min height:** `min-h-svh`.

- [ ] Реализовать `src/sections/hero/index.tsx` + `HeroDecor.tsx`.
- [ ] Подключить в page.tsx, плюс `<ApplicationDialog />` в самом низу main.
- [ ] Smoke desktop + 375px.
- [ ] Commit.

---

## Task 24 — Intro-USP (light)

**PNG:** белый блок под hero с большим заголовком слева и 3 pill-тегами справа.

**Содержит:**
- Верхняя граница — тонкая линия-разделитель (`border-t`).
- Grid `md:grid-cols-2`, gap большой.
- Слева — h2 «Создавайте и масштабируйте цифровые образовательно-технические продукты: от идеи до запуска».
- Справа — `<ul>` из 3 `<Tag>` (вариант `light`), выровнены по правому краю на md+.

- [ ] Реализовать, подключить, проверить.
- [ ] Commit.

---

## Task 25 — About-program (`#about-program`, light)

**PNG:** «О программе» — чёрная плашка справа, слева заголовок-утверждение, снизу сетка из 3 нумерованных пунктов.

**Содержит:**
- Верх: grid md:`1fr auto` — слева `aboutIntroText` как крупная фраза, справа чёрный блок с надписью «О программе» (крупно, display-ish).
- Низ: контейнер с `aspect-[3/1]`, внутри абсолютно `<GridFrame columns={3} />`, сверху grid из 3 колонок с `NumberedItem` (из `aboutPoints`). На мобиле — одна колонка, `GridFrame` скрыт.

- [ ] Реализовать, подключить, проверить.
- [ ] Commit.

---

## Task 26 — Program-description (dark)

**PNG:** чёрный блок с двумя абзацами.

**Содержит:** grid md:2cols, маленький текст с `opacity-80`, leading-relaxed. Контент — `programDescription` (2 элемента).

- [ ] Реализовать, подключить, проверить.
- [ ] Commit.

---

## Task 27 — Career-track (`#specialties`, light)

**PNG:** «Расширенная карьерная траектория» + блок с двумя специальностями + гигантский X2 + 3 нумерованных пункта.

**Содержит:**
- Верх: grid 2cols — слева h2, справа Tag «Один диплом · Две квалификации» + `<ul>` с двумя specialty (code + title).
- Середина: `X2Display` — огромный «X2» (text-display), рядом мелким «возможностей поступления». За ним — `<WaveStack>` (на мобиле — уменьшенный или скрытый, т.к. X2 сам займёт всё).
- Низ: 3-колоночный grid (md+) с `NumberedItem`, данные — `careerSteps`.

- [ ] Реализовать: `index.tsx` + `X2Display.tsx`.
- [ ] Подключить, проверить.
- [ ] Commit.

---

## Task 28 — Diploma-startup (dark)

**PNG:** чёрный блок. Слева заголовок «Диплом как стартап», справа — лучи из левой-средней точки к подписям: «Командная работа с первых месяцев», «Разработка собственного образовательного продукта», «Выход на рынок».

**Содержит:**
- grid 2cols: слева h2, справа контейнер с `<RayLines origin={{x:0,y:50}} targets={[{x:100,y:10},{x:100,y:50},{x:100,y:90}]} />` абсолютом + `<ul>` из `diplomaSteps` справа, текст по правому краю.
- На мобиле: одна колонка, `RayLines` скрыт, шаги — просто список.

- [ ] Реализовать, подключить, проверить.
- [ ] Commit.

---

## Task 29 — Professional-tracking (light)

**PNG:** белый блок. Слева — логотип Косыгина + h2 + параграф. Справа — луч от левого края к 4 тегам-целям, между ними заголовок-якорь «В рамках программы предусмотрены:» и сами теги.

**Содержит:**
- grid 2cols.
- Слева: next/image логотип Косыгина + h2 + параграф-пояснение (текст в `data/tracking-tags.ts` или хардкод-описание, см. спек 6.7).
- Справа: `<RayLines>` абсолютом + внутренний Tag «В рамках программы предусмотрены:» + список из 4 `<Tag>` по строкам.
- Mobile: одна колонка, RayLines скрыт, теги стекаются.

- [ ] Реализовать, подключить, проверить.
- [ ] Commit.

---

## Task 30 — Teachers (dark) + карусель

**PNG:** чёрный блок с заголовком по центру и рядом карточек преподавателей + стрелки по бокам.

**Файлы:**
- `src/sections/teachers/index.tsx`
- `TeacherCard.tsx`
- `TeachersCarousel.tsx`

**`TeacherCard` props:** `{ teacher: Teacher }`. Содержит: квадратное фото (`next/image fill` в `relative aspect-square`), ФИО, роль (opacity-60), маркированный список из 3 достижений.

**`TeachersCarousel` поведение:**
- `useState(index)`.
- Ширина одной карточки — `clamp-ish`, например `w-60` (240px) на desktop.
- `perView`: **на мобиле 1, на md 2, на lg 4.** Реализация — либо через CSS (гибкая сетка с `overflow`), либо через JS (замеряется контейнер). Проще: карточки `flex gap-4`, контейнер `overflow-hidden`, сдвиг через `translateX` в зависимости от `index`. Ширина карточки через CSS: `w-[calc(100vw-4rem)] md:w-[calc(50%-0.5rem)] lg:w-60`.
- Стрелки (`‹` / `›`) — круглые, чёрные с белой обводкой, `disabled` на краях.
- Без автопрокрутки.

**`index.tsx`:** Section dark + `<RingsEllipse>` фоном + заголовок центром + carousel.

- [ ] Создать placeholder-изображение `public/teachers/placeholder.jpg` (можно скопировать что угодно серое из mag-landing: `cp ~/mag-landing/public/images/hero-team.png public/teachers/placeholder.jpg`; либо нарисовать серый квадрат сам).
- [ ] Реализовать 3 файла.
- [ ] Проверить: на desktop видно 4 карточки, на мобиле 1, стрелки работают.
- [ ] Commit.

---

## Task 31 — Partners (light)

**PNG:** белый блок с заголовком и 2 большими логотипами.

**Содержит:** заголовок h2 центром «Генеральные партнёры программы:», ниже flex-wrap с 2 логотипами (`next/image`, `h-12 w-auto`).

- [ ] Создать placeholder SVG-лого в `public/partners/logo-znanie.svg` и `logo-maximum.svg` — SVG с `<text>` внутри (простые заглушки с названием, чтобы не было 404). Пользователь подменит на реальные лого.
- [ ] Реализовать секцию.
- [ ] Commit.

---

## Task 32 — Learning-format (dark)

**PNG:** чёрный блок. Заголовок «Формат обучения:» центром, ниже 3 pill-тега вертикально, фон снизу — волнистая стопка.

**Содержит:** центрированный layout, список `<Tag variant="dark">` по строкам, `<WaveStack>` абсолютом снизу, `pointer-events-none`, overflow-hidden у секции.

- [ ] Реализовать, подключить, проверить.
- [ ] Commit.

---

## Task 33 — Employment (dark)

**PNG:** чёрный блок. Слева заголовок «Трудоустройство выпускников», справа сетка 2×3 с 6 ролями.

**Содержит:**
- grid md:`1fr_2fr`.
- Слева — h2.
- Справа — контейнер `aspect-[3/2]`, внутри `<GridFrame columns={2} rows={3} />` абсолютом, поверх grid 2×3 `NumberedItem` из `employmentRoles`.
- Mobile: одна колонка, GridFrame скрыт, роли обычным списком.

- [ ] Реализовать, подключить, проверить.
- [ ] Commit.

---

## Task 34 — Final-CTA (`#admission`, light)

**PNG:** белый блок с крупным заголовком центром, параграфом, двумя кнопками, и кольцами снизу.

**Содержит:**
- `overflow-hidden` у Section.
- `<RingsEllipse>` абсолютом снизу, `translate-y-1/4`, `text-black/60` — чтобы уходило за нижний край.
- Контент: центрированный заголовок h2 (max-w-3xl), параграф-дисклеймер, две кнопки:
  - «Получить консультацию» — чёрная pill, открывает модалку (`useApplicationDialog.open()`).
  - «Подать документы» — pill-обводка, рендер через `<AdmissionLink>`.
- Mobile: кнопки стекаются (`flex-col md:flex-row`), каждая `w-full md:w-auto`.

- [ ] Реализовать, подключить, проверить.
- [ ] Commit.

---

## Task 35 — Сборка page.tsx

**Зачем:** Финальный `src/app/page.tsx` собирает 13 секций в правильном порядке.

**Порядок секций (сверху вниз):**
1. Hero
2. IntroUsp
3. AboutProgram
4. ProgramDescription
5. CareerTrack
6. DiplomaStartup
7. ProfessionalTracking
8. Teachers
9. Partners
10. LearningFormat
11. Employment
12. FinalCta
13. SiteFooter
+ `<ApplicationDialog />` (рендерится один раз на всю страницу)

- [ ] Заменить `page.tsx` на полную композицию.
- [ ] `pnpm lint && pnpm exec tsc --noEmit && pnpm dev` — всё работает.
- [ ] Проверить якоря: клик по трём пунктам nav скроллит в нужные секции с отступом под шапку (`scroll-mt-24`).
- [ ] Проверить, что обе кнопки (hero + final-cta) открывают одну и ту же модалку.
- [ ] Проверить форму — валидация пустых полей и кривого email работает. Без `.env.local` submit кидает toast «Telegram не настроен» — это норма.
- [ ] Commit: `feat: assemble full landing page`.

---

## Task 36 — SEO: layout.tsx + JSON-LD

**Зачем:** финальный layout с metadata, Open Graph, Twitter, robots, и `application/ld+json` (EducationalOrganization + Course).

- [ ] Взять `layout.tsx` из mag-landing как основу.
- [ ] Обновить `description` и `keywords` — убрать «финансы/бюджетные места» (больше не в фокусе), добавить «диплом как стартап», «профессиональный трекинг».
- [ ] В `jsonLd.Course.teaches` оставить три навыка (ИИ, финансы, управление).
- [ ] `Toaster` и Inter-шрифт остаются.
- [ ] `pnpm build` проходит.
- [ ] Commit: `feat: add seo metadata and json-ld`.

---

## Task 37 — Public assets

- [ ] Скопировать из mag-landing (если применимо к новому домену): `robots.txt`, `sitemap.xml`, `og-image.jpg`, google/yandex verification HTML. Если домен новый — verification-файлы оставить закомментированным TODO или выкинуть (пользователь потом положит свежие).
- [ ] Commit: `chore: add public seo assets`.

---

## Task 38 — Финальная проверка (desktop + mobile)

**Зачем:** прокачать страницу в трёх вьюпортах и починить визуальные поломки.

- [ ] `pnpm lint && pnpm exec tsc --noEmit && pnpm build` — всё чисто, `out/` создалась.
- [ ] `pnpm dev`, проверить в Chrome DevTools три ширины подряд: **375px**, **768px**, **1280px**.

В **375px** проверить каждую секцию сверху вниз:
- нет горизонтального скролла на `<html>` (главный признак — отсутствие полосы прокрутки внизу),
- у hero: логотип + гамбургер умещаются в шапку, заголовок не обрезается, кнопка CTA читаема,
- nav открывается в Sheet по тапу на гамбургер,
- модалка влезает в экран, поля формы удобно тапабельны,
- карусель teachers: видна одна карточка, стрелки работают,
- в final-cta кнопки `w-full`, стекаются вертикально,
- все декоры либо скрыты, либо не вызывают горизонтальный скролл.

В **768px** — базовая десктоп-раскладка должна появиться (2 колонки в большинстве секций), nav в шапке виден.

В **1280px** — полноценный десктоп, все декоры на местах, 4 карточки преподавателей.

- [ ] Починить всё, что сломано (локальные правки в конкретных секциях + коммит за каждую починку с понятным сообщением типа `fix: mobile layout in teachers carousel`).
- [ ] Статический билд проверить через `python3 -m http.server -d out 8080` — открывается без Node.

---

## Известные заглушки (для пользователя после завершения плана)

Эти вещи остаются осознанно «на потом»:

1. `src/data/contacts.ts` — `admission.beforeSwitchUrl` и `afterSwitchUrl` = `'#'`. Подставить реальные URL приёмной комиссии РГУК и Госуслуг.
2. `public/teachers/placeholder.jpg` — серая заглушка. Подменить на реальные фото и обновить `src/data/teachers.ts`.
3. `public/partners/logo-{znanie,maximum}.svg` — текстовые SVG. Подменить на реальные лого.
4. `public/icons/logo-online-products.svg` — не создан; в `SiteHeader` текст-заглушка. Когда будет SVG из Figma — подменить.
5. `public/og-image.jpg` — унаследованная картинка. Сделать новую в чёрно-белой стилистике.
6. Verification HTML (google/yandex) — старые. Перегенерировать для нового домена.
7. Декор (`RingsEllipse`, `WaveStack` и т.д.) нарисован алгоритмически. Если нужна pixel-perfect точность — экспортировать из Figma в `public/decor/*.svg` и заменить соответствующие `<Ring...>` на `<Image src="/decor/..." />`.
8. **Pixel-perfect мобильные макеты** — когда дизайнер нарисует мобилку отдельно, текущий baseline дорабатывается в отдельную итерацию.
