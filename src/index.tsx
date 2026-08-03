import { Hono } from 'hono'
import { FrontendPage } from './ui/frontend'
import { renderErrorHtml } from './ui/error-page'
import { renderBannerPng, renderBannerSvg, BannerOptions } from './engine/satori-renderer'
import { TECH_ICONS } from './engine/icons'

export interface EnvBindings {
  GA_MEASUREMENT_ID?: string
}

const app = new Hono<{ Bindings: EnvBindings }>()

// Web UI Dashboard
app.get('/', (c) => {
  return c.html(<FrontendPage gaId={c.env.GA_MEASUREMENT_ID} />)
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

// Custom 404 Not Found Handler
app.notFound((c) => {
  const accept = c.req.header('accept') || ''
  const isJson = accept.includes('application/json') || c.req.path.startsWith('/preset-icons') || c.req.path.startsWith('/upload')
  const isImage = accept.includes('image/') || c.req.path.startsWith('/banner')

  if (isJson) {
    return c.json({ success: false, error: 'Route Not Found', path: c.req.path }, 404)
  }
  if (isImage && !accept.includes('text/html')) {
    c.header('Content-Type', 'image/png')
    c.header('Cache-Control', 'no-cache')
    return c.body(new Uint8Array(), 404)
  }

  return c.html(
    renderErrorHtml(
      404,
      'Page Not Found',
      `The requested page or route "${c.req.path}" could not be found on Banners.Pheco.Dev Edge Router.`,
      c.env.GA_MEASUREMENT_ID
    ),
    404
  )
})

// Custom 500 / Internal Error Handler
app.onError((err, c) => {
  console.error('Unhandled Server Error:', err)
  const accept = c.req.header('accept') || ''
  const isJson = accept.includes('application/json') || c.req.path.startsWith('/preset-icons') || c.req.path.startsWith('/upload')

  if (isJson) {
    return c.json({ success: false, error: err?.message || 'Internal Server Error' }, 500)
  }

  return c.html(
    renderErrorHtml(
      500,
      'Internal Server Error',
      `An unexpected error occurred on the Edge Worker: ${err?.message || 'Unknown exception'}. Please try reloading.`,
      c.env.GA_MEASUREMENT_ID
    ),
    500
  )
})

export default app
