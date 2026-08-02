import { Hono } from 'hono'
import { renderFrontendHtml } from './ui/frontend'
import { renderBannerPng, renderBannerSvg, BannerOptions } from './engine/satori-renderer'
import { TECH_ICONS } from './engine/icons'

const app = new Hono()

// Web UI Dashboard
app.get('/', (c) => {
  return c.html(renderFrontendHtml())
})

// Favicon SVG Endpoint
app.get('/favicon.svg', (c) => {
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="110" fill="#0f172a"/>
  <rect x="64" y="64" width="384" height="384" rx="64" fill="#f59e0b" stroke="#000000" stroke-width="24"/>
  <text x="256" y="325" font-family="'JetBrains Mono', monospace, system-ui, sans-serif" font-weight="900" font-size="240" fill="#000000" text-anchor="middle">B</text>
</svg>`
  c.header('Content-Type', 'image/svg+xml')
  c.header('Cache-Control', 'public, max-age=86400, s-maxage=604800, immutable')
  return c.body(faviconSvg)
})

// Web App Manifest Endpoint
app.get('/manifest.json', (c) => {
  return c.json({
    name: 'Banners.Pheco.Dev — Social Banner Generator',
    short_name: 'Banners.Pheco',
    description: 'Generate ultra-fast Open Graph social images & tech hero banners powered by Cloudflare Workers',
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/favicon.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'any maskable'
      }
    ]
  })
})

// PWA Service Worker Route
app.get('/sw.js', (c) => {
  const swScript = `
const CACHE_NAME = 'banners-pheco-v1';
const ASSETS_TO_CACHE = ['/', '/favicon.svg', '/manifest.json'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match('/'))
    );
  }
});
`
  c.header('Content-Type', 'application/javascript')
  c.header('Cache-Control', 'public, max-age=86400, s-maxage=604800, immutable')
  return c.body(swScript)
})

// Preset Icons List API
app.get('/preset-icons', (c) => {
  const icons = Object.values(TECH_ICONS).map(({ id, name, category }) => ({
    id,
    name,
    category
  }))
  return c.json(icons)
})

function safeDecode(val?: string): string | undefined {
  if (!val) return val
  try {
    return decodeURIComponent(val)
  } catch (e) {
    return val
  }
}

function parseOptions(query: Record<string, string>): BannerOptions {
  return {
    title: safeDecode(query.title),
    subtitle: safeDecode(query.subtitle),
    theme: query.theme,
    bgStart: query.bgStart,
    bgEnd: query.bgEnd,
    pattern: query.pattern,
    logo: query.logo,
    logoUrl: query.logoUrl,
    logoSize: query.logoSize ? parseInt(query.logoSize, 10) : undefined,
    logoShape: query.logoShape as any,
    width: query.width ? parseInt(query.width, 10) : 1200,
    height: query.height ? parseInt(query.height, 10) : 630,
    titleSize: query.titleSize ? parseInt(query.titleSize, 10) : undefined,
    subtitleSize: query.subtitleSize ? parseInt(query.subtitleSize, 10) : undefined,
    align: query.align as any,
    watermarkText: safeDecode(query.watermarkText !== undefined ? query.watermarkText : query.watermark),
    watermarkBadge: safeDecode(query.watermarkBadge)
  }
}

// Raw SVG Banner Endpoint
app.get('/banner.svg', async (c) => {
  const query = c.req.query()
  const options = parseOptions(query)
  const svg = await renderBannerSvg(options)

  c.header('Content-Type', 'image/svg+xml')
  c.header('Cache-Control', 'public, max-age=86400, s-maxage=604800, immutable')
  return c.body(svg)
})

// PNG Banner Endpoint (supporting both /banner and /banner.png)
const renderPngHandler = async (c: any) => {
  const query = c.req.query()
  const options = parseOptions(query)
  const pngBuffer = await renderBannerPng(options)

  c.header('Content-Type', 'image/png')
  c.header('Cache-Control', 'public, max-age=86400, s-maxage=604800, immutable')
  return c.body(pngBuffer)
}

app.get('/banner', renderPngHandler)
app.get('/banner.png', renderPngHandler)

// Custom File Upload API for Logos
app.post('/upload', async (c) => {
  try {
    const body = await c.req.parseBody()
    const file = body['file']
    if (file instanceof File) {
      const arrayBuffer = await file.arrayBuffer()
      const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
      const dataUrl = `data:${file.type || 'image/png'};base64,${base64}`
      return c.json({ success: true, dataUrl, filename: file.name })
    }
    return c.json({ success: false, error: 'No file uploaded' }, 400)
  } catch (err: any) {
    return c.json({ success: false, error: err?.message }, 500)
  }
})

export default app
