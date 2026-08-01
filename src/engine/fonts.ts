// Font Loader for Satori (Full Unified TTF Files for 100% Vietnamese UTF-8 + English + Numbers)

let titleBoldBuffer: ArrayBuffer | null = null
let titleRegularBuffer: ArrayBuffer | null = null
let monoRegularBuffer: ArrayBuffer | null = null
let monoBoldBuffer: ArrayBuffer | null = null

// High-speed reliable CDN URLs for Full Unified TTF Fonts
const TITLE_BOLD_URLS = [
  'https://raw.githubusercontent.com/bettergui/BeVietnamPro/main/fonts/ttf/BeVietnamPro-Bold.ttf',
  'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-700-normal.ttf'
]

const TITLE_REGULAR_URLS = [
  'https://raw.githubusercontent.com/bettergui/BeVietnamPro/main/fonts/ttf/BeVietnamPro-Regular.ttf',
  'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf'
]

const MONO_REGULAR_URLS = [
  'https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Regular.ttf',
  'https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-400-normal.ttf'
]

const MONO_BOLD_URLS = [
  'https://raw.githubusercontent.com/JetBrains/JetBrainsMono/master/fonts/ttf/JetBrainsMono-Bold.ttf',
  'https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-700-normal.ttf'
]

async function fetchFirstValidFont(urls: string[]): Promise<ArrayBuffer | null> {
  for (const url of urls) {
    try {
      const res = await fetch(url)
      if (res.ok) {
        return await res.arrayBuffer()
      }
    } catch (err) {
      console.warn(`Font fetch fallback for (${url}):`, err)
    }
  }
  return null
}

export async function loadFonts() {
  const promises = []

  if (!titleBoldBuffer) {
    promises.push(
      fetchFirstValidFont(TITLE_BOLD_URLS).then((buf) => {
        if (buf) titleBoldBuffer = buf
      })
    )
  }

  if (!titleRegularBuffer) {
    promises.push(
      fetchFirstValidFont(TITLE_REGULAR_URLS).then((buf) => {
        if (buf) titleRegularBuffer = buf
      })
    )
  }

  if (!monoRegularBuffer) {
    promises.push(
      fetchFirstValidFont(MONO_REGULAR_URLS).then((buf) => {
        if (buf) monoRegularBuffer = buf
      })
    )
  }

  if (!monoBoldBuffer) {
    promises.push(
      fetchFirstValidFont(MONO_BOLD_URLS).then((buf) => {
        if (buf) monoBoldBuffer = buf
      })
    )
  }

  if (promises.length > 0) {
    await Promise.all(promises)
  }

  return {
    titleBold: titleBoldBuffer,
    titleRegular: titleRegularBuffer,
    monoRegular: monoRegularBuffer,
    monoBold: monoBoldBuffer
  }
}
