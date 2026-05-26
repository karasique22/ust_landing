import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Пользовательское соглашение — Онлайн продукты',
  description: 'Пользовательское соглашение проекта — условия использования.'
}

export default function UserAgreementPage() {
  return (
    <main className="mx-auto max-w-(--container-w) px-4 py-16 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold">Пользовательское соглашение</h1>
      <p className="mt-4 text-sm opacity-80">Документ доступен для просмотра и загрузки ниже.</p>

      <div className="mt-6 h-[80vh] w-full">
        <iframe
          title="Пользовательское соглашение"
          src="/Пользовательское%20соглашение.pdf"
          className="h-full w-full border"
        />
      </div>

      <p className="mt-4 text-sm">
        <a href="/Пользовательское%20соглашение.pdf" target="_blank" rel="noopener noreferrer" className="underline">
          Скачать PDF
        </a>
      </p>
    </main>
  )
}
