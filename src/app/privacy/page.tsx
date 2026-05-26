import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Онлайн продукты',
  description: 'Политика конфиденциальности проекта — условия использования и обработка персональных данных.'
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-(--container-w) px-4 py-16 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold">Политика конфиденциальности</h1>
      <p className="mt-4 text-sm opacity-80">Документ доступен для просмотра и загрузки ниже.</p>

      <div className="mt-6 h-[80vh] w-full">
        <iframe
          title="Политика конфиденциальности"
          src="/Политика%20конфиденциальности.pdf"
          className="h-full w-full border"
        />
      </div>

      <p className="mt-4 text-sm">
        <a href="/Политика%20конфиденциальности.pdf" target="_blank" rel="noopener noreferrer" className="underline">
          Скачать PDF
        </a>
      </p>
    </main>
  )
}
