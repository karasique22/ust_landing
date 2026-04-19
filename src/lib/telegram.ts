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
