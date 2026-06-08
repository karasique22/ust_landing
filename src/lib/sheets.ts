import type { ApplicationData } from './telegram'

const SHEETS_WEBAPP_URL = process.env.NEXT_PUBLIC_SHEETS_WEBAPP_URL ?? ''

// Fire-and-forget запись в Google-таблицу через Apps Script web app.
// Ответ не читаем (no-cors) — отправка не должна блокировать основной флоу.
export async function sendToSheet(data: ApplicationData) {
	if (!SHEETS_WEBAPP_URL) return

	const params = new URLSearchParams({
		name: data.name,
		phone: data.phone,
		email: data.email
	})

	try {
		await fetch(`${SHEETS_WEBAPP_URL}?${params.toString()}`, {
			method: 'GET',
			mode: 'no-cors'
		})
	} catch {
		// best-effort: таблица не критична, заявка уже ушла в Telegram
	}
}
