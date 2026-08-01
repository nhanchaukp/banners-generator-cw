import satori from 'satori'
import { initWasm, Resvg } from '@resvg/resvg-wasm'
import resvgWasmModule from '@resvg/resvg-wasm/index_bg.wasm'
import { loadFonts } from './fonts'
import { TECH_ICONS, svgToBase64DataUrl } from './icons'

let resvgInitialized = false

export async function initResvg() {
  if (!resvgInitialized) {
    try {
      await initWasm(resvgWasmModule)
      resvgInitialized = true
    } catch (e) {
      console.log('Resvg init notice:', e)
    }
  }
}

export interface BannerOptions {
  title?: string
  subtitle?: string
  theme?: string
  bgStart?: string
  bgEnd?: string
  pattern?: string
  logo?: string
  logoUrl?: string
  logoSize?: number
  logoShape?: 'circle' | 'rounded' | 'none'
  width?: number
  height?: number
  fontColor?: string
  subtitleColor?: string
  titleSize?: number
  subtitleSize?: number
  align?: 'flex-start' | 'center' | 'flex-end'
  watermarkText?: string
  watermarkBadge?: string
}

export const THEME_PRESETS: Record<string, { bgStart: string; bgEnd: string; fontColor: string; subtitleColor: string }> = {
  // FLAT UI V1 (AMERICAN)
  turquoise: { bgStart: '#1abc9c', bgEnd: '#16a085', fontColor: '#ffffff', subtitleColor: '#e8f8f5' },
  emerald: { bgStart: '#2ecc71', bgEnd: '#27ae60', fontColor: '#ffffff', subtitleColor: '#e8f8f5' },
  peter_river: { bgStart: '#3498db', bgEnd: '#2980b9', fontColor: '#ffffff', subtitleColor: '#ebf5fb' },
  amethyst: { bgStart: '#9b59b6', bgEnd: '#8e44ad', fontColor: '#ffffff', subtitleColor: '#f5eeed' },
  wet_asphalt: { bgStart: '#34495e', bgEnd: '#2c3e50', fontColor: '#ffffff', subtitleColor: '#bdc3c7' },
  sunflower: { bgStart: '#f1c40f', bgEnd: '#f39c12', fontColor: '#2c3e50', subtitleColor: '#7f8c8d' },
  carrot: { bgStart: '#e67e22', bgEnd: '#d35400', fontColor: '#ffffff', subtitleColor: '#fdebd0' },
  alizarin: { bgStart: '#e74c3c', bgEnd: '#c0392b', fontColor: '#ffffff', subtitleColor: '#fadbd8' },
  clouds: { bgStart: '#ecf0f1', bgEnd: '#bdc3c7', fontColor: '#2c3e50', subtitleColor: '#7f8c8d' },
  concrete: { bgStart: '#95a5a6', bgEnd: '#7f8c8d', fontColor: '#ffffff', subtitleColor: '#ecf0f1' },

  // AUSSIE PALETTE
  aussie_coastal: { bgStart: '#7ed6df', bgEnd: '#22a6b3', fontColor: '#ffffff', subtitleColor: '#dff9fb' },
  aussie_exodus: { bgStart: '#686de0', bgEnd: '#4834d4', fontColor: '#ffffff', subtitleColor: '#e056fd' },
  aussie_deep_blue: { bgStart: '#30336b', bgEnd: '#130e51', fontColor: '#ffffff', subtitleColor: '#7ed6df' },
  aussie_heliotrope: { bgStart: '#e056fd', bgEnd: '#be2ed6', fontColor: '#ffffff', subtitleColor: '#dff9fb' },

  // BRITISH PALETTE
  british_protractor: { bgStart: '#00b894', bgEnd: '#00cec9', fontColor: '#ffffff', subtitleColor: '#e6fffa' },
  british_electrique: { bgStart: '#0984e3', bgEnd: '#6c5ce7', fontColor: '#ffffff', subtitleColor: '#e1f5fe' },
  british_pico_pink: { bgStart: '#fd79a8', bgEnd: '#e84393', fontColor: '#ffffff', subtitleColor: '#ffe3ec' },
  british_sizzling: { bgStart: '#d63031', bgEnd: '#e17055', fontColor: '#ffffff', subtitleColor: '#ffeaa7' },

  // CANADIAN PALETTE
  canadian_jade: { bgStart: '#1dd1a1', bgEnd: '#10ac84', fontColor: '#ffffff', subtitleColor: '#c8d6e5' },
  canadian_jigglypuff: { bgStart: '#ff9ff3', bgEnd: '#f368e0', fontColor: '#222f3e', subtitleColor: '#576574' },
  canadian_megaman: { bgStart: '#48dbfb', bgEnd: '#0abde3', fontColor: '#ffffff', subtitleColor: '#c8d6e5' },

  // CHINESE PALETTE
  chinese_watermelon: { bgStart: '#ff4757', bgEnd: '#ff6b81', fontColor: '#ffffff', subtitleColor: '#f1f2f6' },
  chinese_bright_greek: { bgStart: '#3742fa', bgEnd: '#5352ed', fontColor: '#ffffff', subtitleColor: '#70a1ff' },
  chinese_bay_wharf: { bgStart: '#2f3542', bgEnd: '#57606f', fontColor: '#ffffff', subtitleColor: '#ced6e0' }
}

export const PATTERN_PRESETS: Record<string, Record<string, any>> = {
  grid: {
    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    opacity: 0.8
  },
  dots: {
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.18) 2px, transparent 2px)',
    backgroundSize: '24px 24px',
    opacity: 0.7
  },
  polkaDots: {
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.25) 3px, transparent 3px)',
    backgroundSize: '30px 30px',
    opacity: 0.85
  },
  circuit: {
    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.25) 2px, transparent 2px), linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
    backgroundSize: '32px 32px',
    opacity: 0.85
  },
  architect: {
    backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
    backgroundSize: '16px 16px',
    opacity: 0.8
  },
  waves: {
    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.06) 0, rgba(255, 255, 255, 0.06) 15px, transparent 15px, transparent 30px)',
    opacity: 0.9
  },
  topography: {
    backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 20%, transparent 20%), radial-gradient(circle, rgba(255, 255, 255, 0.08) 40%, transparent 40%)',
    backgroundSize: '100px 100px',
    opacity: 0.75
  },
  mesh: {
    backgroundImage: 'radial-gradient(at 0% 0%, rgba(255, 255, 255, 0.25) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255, 255, 255, 0.2) 0px, transparent 50%)',
    opacity: 0.9
  },
  particles: {
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), radial-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px)',
    backgroundSize: '60px 60px, 90px 90px',
    backgroundPosition: '0 0, 30px 30px',
    opacity: 0.85
  },
  diagonalStripes: {
    backgroundImage: 'repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0, rgba(255, 255, 255, 0.08) 10px, transparent 10px, transparent 20px)',
    opacity: 0.85
  },
  hexagons: {
    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 3px, transparent 3px), radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.1) 3px, transparent 3px)',
    backgroundSize: '48px 48px',
    opacity: 0.8
  },
  boxes: {
    backgroundImage: 'linear-gradient(30deg, rgba(255,255,255,0.06) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.06) 87.5%, rgba(255,255,255,0.06)), linear-gradient(150deg, rgba(255,255,255,0.06) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.06) 87.5%, rgba(255,255,255,0.06))',
    backgroundSize: '40px 70px',
    opacity: 0.85
  },
  brickWall: {
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.08) 2px, transparent 2px)',
    backgroundSize: '50px 25px',
    opacity: 0.8
  },
  bubbles: {
    backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 10%, transparent 11%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.15) 20%, transparent 21%)',
    backgroundSize: '80px 80px',
    opacity: 0.85
  },
  fourPointStars: {
    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 1.5px, transparent 1.5px), radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
    backgroundSize: '40px 40px',
    opacity: 0.9
  },
  rain: {
    backgroundImage: 'repeating-linear-gradient(105deg, rgba(255, 255, 255, 0.12) 0, rgba(255, 255, 255, 0.12) 2px, transparent 2px, transparent 16px)',
    opacity: 0.85
  },
  squaresInSquares: {
    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(to bottom, rgba(255,255,255,0.1) 2px, transparent 2px)',
    backgroundSize: '20px 20px',
    opacity: 0.8
  },
  steelBeams: {
    backgroundImage: 'repeating-linear-gradient(60deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 15px, transparent 15px, transparent 40px), repeating-linear-gradient(-60deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 15px, transparent 15px, transparent 40px)',
    opacity: 0.85
  },
  tinyCheckers: {
    backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.07) 25%, transparent 25%), linear-gradient(-45deg, rgba(255,255,255,0.07) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.07) 75%), linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.07) 75%)',
    backgroundSize: '20px 20px',
    opacity: 0.85
  },
  zigZag: {
    backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.08) 25%, transparent 25%)',
    backgroundSize: '30px 30px',
    opacity: 0.8
  }
}

export async function fetchRemoteImageAsDataUrl(url: string): Promise<string | null> {
  try {
    if (url.startsWith('data:image/')) return url
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Banners-Generator-CW/1.0'
      }
    })
    if (!res.ok) return null
    const contentType = res.headers.get('content-type') || 'image/png'
    const arrayBuffer = await res.arrayBuffer()
    const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)))
    return `data:${contentType};base64,${base64}`
  } catch (err) {
    console.error('Failed to fetch remote logo image:', err)
    return null
  }
}

export async function renderBannerSvg(options: BannerOptions): Promise<string> {
  const width = options.width || 1200
  const height = options.height || 630
  const title = options.title || 'Supercharge Your Cloudflare Worker'
  const subtitle = options.subtitle || 'Ultra-fast OG Banner & Image Generator powered by Edge Satori'
  const themeKey = options.theme && THEME_PRESETS[options.theme] ? options.theme : 'cyberpunk'
  const theme = THEME_PRESETS[themeKey]

  const bgStart = options.bgStart || theme.bgStart
  const bgEnd = options.bgEnd || theme.bgEnd
  const fontColor = options.fontColor || theme.fontColor
  const subtitleColor = options.subtitleColor || theme.subtitleColor

  const titleSize = options.titleSize || (width > 800 ? 56 : 38)
  const subtitleSize = options.subtitleSize || (width > 800 ? 26 : 20)
  const logoSize = options.logoSize || 90
  const align = options.align || 'flex-start'

  // Resolve logo (Built-in + theSVG CDN integration)
  let logoDataUrl: string | null = null
  if (options.logoUrl) {
    logoDataUrl = await fetchRemoteImageAsDataUrl(options.logoUrl)
  } else if (options.logo && options.logo !== 'none') {
    const slug = options.logo.toLowerCase().trim()
    if (TECH_ICONS[slug]) {
      logoDataUrl = svgToBase64DataUrl(TECH_ICONS[slug].svg)
    } else {
      // Dynamic fetch from glincker/thesvg repository (supporting public/icons/{slug}/default.svg)
      const candidateUrls = [
        `https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/default.svg`,
        `https://raw.githubusercontent.com/glincker/thesvg/main/public/icons/${slug}/default.svg`,
        `https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/${slug}/${slug}.svg`,
        `https://cdn.jsdelivr.net/gh/glincker/thesvg@main/icons/${slug}.svg`
      ]

      for (const url of candidateUrls) {
        logoDataUrl = await fetchRemoteImageAsDataUrl(url)
        if (logoDataUrl) break
      }

      if (!logoDataUrl) {
        // Default logo fallback: Cloudflare
        logoDataUrl = svgToBase64DataUrl(TECH_ICONS.cloudflare.svg)
      }
    }
  }

  // Fonts (Full Unified UTF-8 Font Buffers)
  const fonts = await loadFonts()
  const fontData: any[] = []

  if (fonts.titleBold) {
    fontData.push({
      name: 'TitleFont',
      data: fonts.titleBold,
      weight: 700,
      style: 'normal',
    })
  }

  if (fonts.titleRegular) {
    fontData.push({
      name: 'TitleFont',
      data: fonts.titleRegular,
      weight: 400,
      style: 'normal',
    })
  }

  if (fonts.monoRegular) {
    fontData.push({
      name: 'JetBrains Mono',
      data: fonts.monoRegular,
      weight: 400,
      style: 'normal',
    })
  }

  if (fonts.monoBold) {
    fontData.push({
      name: 'JetBrains Mono',
      data: fonts.monoBold,
      weight: 700,
      style: 'normal',
    })
  }

  // Enhanced Pattern overlays lookup
  let patternOverlay: any = null
  const patKey = options.pattern || 'none'
  const patConfig = PATTERN_PRESETS[patKey]

  if (patConfig) {
    patternOverlay = {
      type: 'div',
      props: {
        style: {
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          ...patConfig
        }
      }
    }
  }

  // Radial glow accent
  const glowAccent = {
    type: 'div',
    props: {
      style: {
        position: 'absolute',
        top: '-15%',
        right: '-15%',
        width: '550px',
        height: '550px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 70%)',
        pointerEvents: 'none'
      }
    }
  }

  // Logo Element
  const logoShape = options.logoShape || 'rounded'
  let logoStyle: Record<string, any> = {
    width: `${logoSize}px`,
    height: `${logoSize}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '28px',
  }

  if (logoShape === 'circle') {
    logoStyle = {
      ...logoStyle,
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      padding: '12px',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
    }
  } else if (logoShape === 'rounded') {
    logoStyle = {
      ...logoStyle,
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.12)',
      padding: '14px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)'
    }
  }

  const logoElement = logoDataUrl ? {
    type: 'div',
    props: {
      style: logoStyle,
      children: [
        {
          type: 'img',
          props: {
            src: logoDataUrl,
            width: logoSize - 20,
            height: logoSize - 20,
            style: {
              objectFit: 'contain'
            }
          }
        }
      ]
    }
  } : null

  // Watermark Footer Element (Hide if both empty)
  const rawWatermarkText = options.watermarkText !== undefined ? options.watermarkText : 'BANNERS.PHECO.DEV'
  const rawWatermarkBadge = options.watermarkBadge !== undefined ? options.watermarkBadge : 'SPONSORED BY FCODE.VN'

  const watermarkText = (rawWatermarkText || '').trim()
  const watermarkBadge = (rawWatermarkBadge || '').trim()

  const showLeftText = watermarkText !== '' && watermarkText !== 'none'
  const showRightBadge = watermarkBadge !== '' && watermarkBadge !== 'none'
  const showFooter = showLeftText || showRightBadge

  const watermarkFooter = showFooter ? {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        zIndex: 10,
        fontSize: '14px',
        color: subtitleColor,
        opacity: 0.75,
        letterSpacing: '0.05em',
        fontWeight: 700,
        fontFamily: 'JetBrains Mono, monospace',
        textTransform: 'uppercase'
      },
      children: [
        showLeftText ? {
          type: 'div',
          props: {
            style: { display: 'flex', alignItems: 'center', gap: '8px' },
            children: [
              { type: 'span', props: { children: watermarkText } }
            ]
          }
        } : { type: 'div', props: { style: { display: 'flex' } } },
        showRightBadge ? {
          type: 'div',
          props: {
            style: { display: 'flex', alignItems: 'center' },
            children: watermarkBadge
          }
        } : { type: 'div', props: { style: { display: 'flex' } } }
      ]
    }
  } : null

  // Main Banner Container Structure
  const element = {
    type: 'div',
    props: {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${bgStart} 0%, ${bgEnd} 100%)`,
        padding: '60px 70px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        position: 'relative',
        fontFamily: 'TitleFont, sans-serif',
        overflow: 'hidden'
      },
      children: [
        patternOverlay,
        glowAccent,

        // Content Wrapper
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: align,
              justifyContent: 'center',
              zIndex: 10,
              height: '100%'
            },
            children: [
              logoElement,
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: `${titleSize}px`,
                    fontWeight: 700,
                    fontFamily: 'TitleFont, sans-serif',
                    color: fontColor,
                    lineHeight: 1.2,
                    textAlign: align === 'center' ? 'center' : align === 'flex-end' ? 'right' : 'left',
                    marginBottom: '18px',
                    wordBreak: 'break-word',
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 10px rgba(0,0,0,0.15)'
                  },
                  children: title
                }
              },
              subtitle ? {
                type: 'div',
                props: {
                  style: {
                    fontSize: `${subtitleSize}px`,
                    fontWeight: 400,
                    fontFamily: 'TitleFont, sans-serif',
                    color: subtitleColor,
                    lineHeight: 1.4,
                    textAlign: align === 'center' ? 'center' : align === 'flex-end' ? 'right' : 'left',
                    opacity: 0.9,
                    maxWidth: '90%'
                  },
                  children: subtitle
                }
              } : null
            ].filter(Boolean)
          }
        },

        watermarkFooter
      ].filter(Boolean)
    }
  }

  const svg = await satori(element as any, {
    width,
    height,
    fonts: fontData.length > 0 ? fontData : [
      {
        name: 'Inter',
        data: new Uint8Array([0]).buffer,
        weight: 400,
        style: 'normal',
      }
    ]
  })

  return svg
}

export async function renderBannerPng(options: BannerOptions): Promise<Uint8Array> {
  const svg = await renderBannerSvg(options)
  await initResvg()
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: options.width || 1200
    }
  })
  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()
  return pngBuffer
}
