## Требования

- Node.js 20+
- pnpm

## Установка

```bash
pnpm install
```

## Переменные окружения

Создать файл `.env.local` в корне проекта:

```
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=<токен бота>
NEXT_PUBLIC_TELEGRAM_CHAT_ID=<id чата>
NEXT_PUBLIC_TELEGRAM_TOPIC_ID=<id топика>
```

## Разработка

```bash
pnpm dev
```

Открыть http://localhost:3000

## Сборка и деплой

```bash
pnpm build
```

После сборки появится папка `out/` — это готовый статический сайт. Содержимое
этой папки нужно перенести в корневую директорию веб-сервера (www, public_html и
т.д.).

```bash
cp -r out/* /var/www/html/
```
