# 🎨 Banners.Pheco.Dev — Free OG & Social Media Banner Generator

[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![Satori Engine](https://img.shields.io/badge/Satori_WASM-Sub--50ms-00D4B6?style=for-the-badge)](https://github.com/vercel/satori)
[![Flat UI Colors](https://img.shields.io/badge/Flat_UI_Colors-24_Palettes-1ABC9C?style=for-the-badge)](https://flatuicolors.com/)
[![theSVG Library](https://img.shields.io/badge/theSVG_Icons-6%2C400%2B_Logos-0984E3?style=for-the-badge)](https://thesvg.org/)

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/nhanchaukp/banners-generator-cw)

**Banners.Pheco.Dev** is an ultra-fast, sub-50ms dynamic social media banner and Open Graph (OG) image generator powered by **Cloudflare Workers**, **Satori**, and **Resvg WASM**.

Create Open Graph cards, GitHub repository heroes, YouTube thumbnails, and tech banners programmatically via clean API URLs or through our interactive Web UI workbench.

---

## ⚡ Key Features

- **⚡ Sub-50ms Edge Engine**: Built on Cloudflare Workers and Satori WASM for instant image rendering across global edge nodes.
- **🖼️ 6,400+ Tech & Brand Icons**: Sourced directly from [`glincker/thesvg`](https://github.com/glincker/thesvg). Use any tech brand slug (`python`, `react`, `linear`, `clerk`, `resend`, `hono`, `deno`, `bun`, `prisma`, `drizzle`...).
- **🎨 24 Flat UI Color Presets**: Curated palettes from [Flat UI Colors](https://flatuicolors.com/) (American, Aussie, British, Canadian, Chinese, Dutch, German, Spanish, Turkish).
- **📐 21 Background Pattern Overlays**: Line Grid, Dots, Polka Dots, Circuit, Contour, Glow Mesh, Particles, Diagonal, Hexagons, 3D Boxes, Stars, Rain, ZigZag...
- **🔤 Unified UTF-8 Typography**: Complete Vietnamese & English UTF-8 support powered by **Be Vietnam Pro** (Title & Subtitle) and **JetBrains Mono** (Footer & Code).
- **🛠️ Interactive Penguin UI Workbench**: Responsive dashboard featuring dark/light modes, live canvas preview, instant PNG download, and copyable Markdown / HTML code snippets.

---

## 🚀 Quick Start & Usage

### 1. Markdown & HTML Integration

Embed dynamic banners in your `README.md` or web pages:

```markdown
![Banners.Pheco.Dev](https://banners.pheco.dev/banner.png?title=Banners.Pheco.Dev&subtitle=Free+OG+Image+Generator&theme=turquoise&logo=cloudflare)
```

```html
<img src="https://banners.pheco.dev/banner.png?title=Banners.Pheco.Dev&subtitle=Free+OG+Image+Generator&theme=turquoise&logo=cloudflare" alt="OG Banner" />
```

---

## 📡 API Reference

### Endpoints

- **PNG Image**: `GET /banner.png` (or `/banner`)
- **Raw SVG**: `GET /banner.svg`

### Query Parameters

| Parameter | Type | Description | Default / Example |
| :--- | :--- | :--- | :--- |
| `title` | `string` | Main title text | `title=Banners.Pheco.Dev` |
| `subtitle` | `string` | Subtitle description text | `subtitle=Free+OG+Banner+Generator` |
| `theme` | `string` | Flat UI color palette identifier | `theme=turquoise` |
| `pattern` | `string` | Background pattern overlay | `pattern=none`, `pattern=grid` |
| `logo` | `string` | Brand logo slug from `theSVG` (6,400+ icons) | `logo=cloudflare`, `logo=linear`, `logo=react` |
| `logoUrl` | `string` | Direct image URL for custom logo | `logoUrl=https://example.com/logo.png` |
| `logoSize` | `number` | Logo size in pixels (40 to 180) | `logoSize=90` |
| `logoShape` | `string` | Frame container shape (`rounded`, `circle`, `none`) | `logoShape=rounded` |
| `align` | `string` | Text alignment (`flex-start`, `center`, `flex-end`) | `align=flex-start` |
| `width` | `number` | Canvas width in pixels | `width=1200` |
| `height` | `number` | Canvas height in pixels | `height=630` |
| `watermark` | `string` | Left footer watermark text (leave empty to hide left side) | `watermark=BANNERS.PHECO.DEV` |
| `watermarkBadge` | `string` | Right footer badge text (leave empty to hide right side) | `watermarkBadge=SPONSORED+BY+FCODE.VN` |

---

## 🎨 Flat UI Color Presets

Choose from 24 curated palettes inspired by [Flat UI Colors](https://flatuicolors.com/):

- **American Palette**: `turquoise`, `emerald`, `peter_river`, `amethyst`, `wet_asphalt`, `sunflower`, `carrot`, `alizarin`, `clouds`, `concrete`
- **Aussie Palette**: `aussie_coastal`, `aussie_exodus`, `aussie_deep_blue`, `aussie_heliotrope`
- **British Palette**: `british_protractor`, `british_electrique`, `british_pico_pink`, `british_sizzling`
- **Canadian Palette**: `canadian_jade`, `canadian_jigglypuff`, `canadian_megaman`
- **Chinese Palette**: `chinese_watermelon`, `chinese_bright_greek`, `chinese_bay_wharf`

---

## 💻 Local Development

### Prerequisites

- Node.js v18+
- npm / pnpm / yarn

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/nhanchaukp/banners-generator-cw.git
cd banners-generator-cw

# Install dependencies
npm install

# Start Wrangler local dev server
npm run dev
```

Open [http://localhost:8787](http://localhost:8787) in your browser.

### 1-Click Deploy to Cloudflare Workers

Deploy your own instance directly to Cloudflare Workers with a single click:

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/nhanchaukp/banners-generator-cw)

### CLI Type Generation & Deployment

```bash
# Synchronize Cloudflare Worker types
npm run cf-typegen

# Deploy to Cloudflare Workers via Wrangler CLI
npm run deploy
```

---

## 🤝 Credits & Acknowledgments

- **[Cloudflare Workers](https://workers.cloudflare.com/)**: Serverless edge compute runtime.
- **[Satori](https://github.com/vercel/satori)**: HTML/CSS to SVG engine by Vercel.
- **[Resvg WASM](https://github.com/yisabl/resvg-js)**: High-performance SVG to PNG converter.
- **[Flat UI Colors](https://flatuicolors.com/)**: Color palette inspiration.
- **[theSVG](https://thesvg.org/)**: Open-source 6,400+ SVG icon library.
- **Sponsored by [fcode.vn](https://fcode.vn)**.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
