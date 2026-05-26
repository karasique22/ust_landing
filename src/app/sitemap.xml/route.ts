import fs from 'fs'
import path from 'path'

export const dynamic = 'force-static'

export async function GET() {
  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://онлайнпродукты.рф'

  const publicDir = path.join(process.cwd(), 'public')
  const candidates = ['sitemap.static.xml', 'sitemap.xml']

  let xml = ''

  for (const name of candidates) {
    const p = path.join(publicDir, name)
    if (fs.existsSync(p)) {
      xml = fs.readFileSync(p, 'utf8')
      break
    }
  }

  if (!xml) {
    xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${SITE_URL}/</loc>\n  </url>\n</urlset>`
    return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
  }

  // replace production domains present in the static file with SITE_URL
  xml = xml.replace(/https?:\/\/(xn--80aiofblddfjl1al8i\.xn--p1ai|онлайнпродукты\.рф)/g, SITE_URL)

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } })
}
