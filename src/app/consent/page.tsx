import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Согласие на обработку персональных данных — Онлайн продукты',
  description: 'Согласие на обработку персональных данных для заявок и взаимодействий.'
}

export default function ConsentPage() {
  return (
    <main className="mx-auto max-w-(--container-w) px-4 py-16 md:px-8 lg:px-12">
      <h1 className="text-3xl font-bold">Согласие на обработку персональных данных</h1>
      <p className="mt-4 text-sm opacity-80">Документ доступен для просмотра и загрузки ниже.</p>

      <div className="mt-6 h-[80vh] w-full">
        <iframe
          title="Согласие на обработку ПД"
          src="/Согласие%20на%20обработку%20ПД.pdf"
          className="h-full w-full border"
        />
      </div>

      <p className="mt-4 text-sm">
        <a href="/Согласие%20на%20обработку%20ПД.pdf" target="_blank" rel="noopener noreferrer" className="underline">
          Скачать PDF
        </a>
      </p>
    </main>
  )
}
