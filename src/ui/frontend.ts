import { TECH_ICONS } from '../engine/icons'

export function renderFrontendHtml(gaId?: string): string {
  const iconsJson = JSON.stringify(TECH_ICONS)

  return `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${gaId ? `<!-- Google Analytics (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  </script>` : ''}
  <!-- Primary SEO Meta Tags -->
  <title>Banners.Pheco.Dev — Free Open-Graph & Social Media Banner Generator</title>
  <meta name="title" content="Banners.Pheco.Dev — Free Open-Graph & Social Media Banner Generator" />
  <meta name="description" content="Generate ultra-fast Open Graph (OG) social media banners, hero graphics, and tech assets instantly using Cloudflare Workers & Satori. Free, sub-50ms rendering." />
  <meta name="keywords" content="banner generator, og image generator, cloudflare worker, satori, svg banner, social media banner generator, open graph image, pheco dev" />
  <meta name="author" content="PheCo Dev" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <link rel="canonical" href="https://banners.pheco.dev" />
  <meta name="theme-color" content="#f59e0b" />

  <!-- Favicon & PWA Manifest Meta Tags -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="shortcut icon" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/favicon.svg" />
  <link rel="manifest" href="/manifest.json" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://banners.pheco.dev" />
  <meta property="og:title" content="Banners.Pheco.Dev — Free Open-Graph & Social Media Banner Generator" />
  <meta property="og:description" content="Generate ultra-fast Open Graph (OG) social media banners, hero graphics, and tech assets instantly using Cloudflare Workers & Satori. Free, sub-50ms rendering." />
  <meta property="og:image" content="https://banners.pheco.dev/banner.png?title=Banners.Pheco.Dev&subtitle=Free+Open-Graph+%26+Social+Media+Banner+Generator&theme=turquoise&logo=cloudflare" />
  <meta property="og:site_name" content="Banners.Pheco.Dev" />
  <meta property="og:locale" content="en_US" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://banners.pheco.dev" />
  <meta name="twitter:title" content="Banners.Pheco.Dev — Free Open-Graph & Social Media Banner Generator" />
  <meta name="twitter:description" content="Generate ultra-fast Open Graph (OG) social media banners, hero graphics, and tech assets instantly using Cloudflare Workers & Satori. Free, sub-50ms rendering." />
  <meta name="twitter:image" content="https://banners.pheco.dev/banner.png?title=Banners.Pheco.Dev&subtitle=Free+Open-Graph+%26+Social+Media+Banner+Generator&theme=turquoise&logo=cloudflare" />

  <!-- Structured Data / JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Banners.Pheco.Dev",
    "url": "https://banners.pheco.dev",
    "image": "https://banners.pheco.dev/banner.png?title=Banners.Pheco.Dev&subtitle=Free+Open-Graph+%26+Social+Media+Banner+Generator&theme=turquoise&logo=cloudflare",
    "description": "Ultra-fast Open Graph and Social Media Banner Generator powered by Cloudflare Workers & Satori.",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  }
  </script>

  <!-- Google Fonts: Be Vietnam Pro & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">

  <!-- Tailwind CSS v4 CDN Browser Engine -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

  <!-- Lucide Icons CDN -->
  <script src="https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js"></script>

  <!-- Alpine.js CDN for Penguin UI Interactions -->
  <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

  <style type="text/tailwindcss">
    @theme {
      --font-sans: 'Be Vietnam Pro', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      /* Light Theme */
      --color-surface: var(--color-stone-50);
      --color-surface-alt: var(--color-stone-200);
      --color-on-surface: var(--color-stone-800);
      --color-on-surface-strong: var(--color-black);
      --color-primary: var(--color-amber-500);
      --color-on-primary: var(--color-black);
      --color-secondary: var(--color-stone-900);
      --color-on-secondary: var(--color-stone-50);
      --color-outline: transparent;
      --color-outline-strong: var(--color-blue-600);

      /* Dark Theme */
      --color-surface-dark: var(--color-stone-950);
      --color-surface-dark-alt: var(--color-stone-900);
      --color-on-surface-dark: var(--color-stone-300);
      --color-on-surface-dark-strong: var(--color-white);
      --color-primary-dark: var(--color-amber-400);
      --color-on-primary-dark: var(--color-black);
      --color-secondary-dark: var(--color-stone-700);
      --color-on-secondary-dark: var(--color-white);
      --color-outline-dark: var(--color-stone-700);
      --color-outline-dark-strong: var(--color-blue-500);

      /* Shared Colors */
      --color-info: var(--color-sky-600);
      --color-on-info: var(--color-slate-100);
      --color-success: var(--color-green-600);
      --color-on-success: var(--color-white);
      --color-warning: var(--color-amber-500);
      --color-on-warning: var(--color-slate-900);
      --color-danger: var(--color-red-600);
      --color-on-danger: var(--color-slate-100);

      /* Border Radius */
      --radius-radius: var(--radius-none);
    }
  </style>

  <style>
    /* Theme Variable Mapping */
    :root {
      --bg-surface: #fafaf9;
      --bg-surface-alt: #e7e5e4;
      --text-on-surface: #292524;
      --text-on-surface-strong: #000000;
      --color-primary-val: #f59e0b;
      --color-on-primary-val: #000000;
      --color-secondary-val: #1c1917;
      --border-outline-val: #d6d3d1;
      --border-outline-strong-val: #2563eb;
    }

    html.dark {
      --bg-surface: #0c0a09;
      --bg-surface-alt: #1c1917;
      --text-on-surface: #d6d3d1;
      --text-on-surface-strong: #ffffff;
      --color-primary-val: #fbbf24;
      --color-on-primary-val: #000000;
      --color-secondary-val: #44403c;
      --border-outline-val: #292524;
      --border-outline-strong-val: #3b82f6;
    }

    body {
      background-color: var(--bg-surface);
      color: var(--text-on-surface);
      font-family: 'Be Vietnam Pro', sans-serif;
      border-radius: 0 !important;
    }

    * {
      border-radius: 0 !important;
    }

    button {
      cursor: pointer !important;
    }

    .font-mono-code {
      font-family: 'JetBrains Mono', monospace;
    }

    /* Penguin UI Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.1);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--color-primary-val);
    }
  </style>
</head>
<body x-data="bannerApp()" x-init="init()" class="min-h-screen flex flex-col transition-colors duration-200">

  <!-- Penguin UI Top Navigation Bar -->
  <header class="border-b border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      
      <!-- Brand & Title -->
      <div class="flex items-center gap-2.5">
        <div class="px-2.5 py-1 bg-[var(--color-primary-val)] text-[var(--color-on-primary-val)] font-black text-sm uppercase tracking-wider border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Banners
        </div>
        <div>
          <span class="font-black text-lg tracking-tight text-[var(--text-on-surface-strong)] font-mono-code">PheCo.Dev</span>
        </div>
      </div>

      <!-- Right Header Actions -->
      <div class="flex items-center gap-3">
        <!-- PWA Install Web App Button -->
        <button 
          x-show="canInstallPwa"
          @click="installPwa()"
          x-transition:enter="transition ease-out duration-200"
          class="px-3 py-1.5 bg-amber-500 text-black hover:bg-amber-400 font-extrabold text-xs uppercase font-mono-code border border-black flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          title="Install Banners.Pheco.Dev Web App">
          <i data-lucide="download" class="w-3.5 h-3.5"></i>
          <span class="hidden sm:inline">Install App</span>
        </button>

        <!-- Dark / Light Mode Switcher -->
        <button 
          @click="toggleDarkMode()" 
          class="p-2 border border-[var(--border-outline-val)] bg-[var(--bg-surface)] text-[var(--text-on-surface)] hover:bg-[var(--color-primary-val)] hover:text-black transition-all font-mono-code text-xs flex items-center gap-1.5 uppercase font-bold"
          title="Toggle Theme">
          <template x-if="darkMode">
            <span class="flex items-center gap-1.5">
              <i data-lucide="sun" class="w-4 h-4"></i>
              <span>Light</span>
            </span>
          </template>
          <template x-if="!darkMode">
            <span class="flex items-center gap-1.5">
              <i data-lucide="moon" class="w-4 h-4"></i>
              <span>Dark</span>
            </span>
          </template>
        </button>
      </div>
  </header>

  <!-- Hero Introduction Section -->
  <section class="border-b border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] py-8 px-4 sm:px-6 lg:px-8 font-mono-code relative overflow-hidden">
    <!-- Subtle Background Ambient Light -->
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto space-y-4 relative z-10">
      
      <!-- Top Pill Tag -->
      <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold uppercase tracking-wider">
        <i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-500"></i>
        <span>NEXT-GEN OPEN-GRAPH & SOCIAL BANNER GENERATOR</span>
      </div>

      <!-- Main Heading & Description -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div class="lg:col-span-8 space-y-2">
          <h1 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[var(--text-on-surface-strong)] tracking-tight leading-snug">
            Generate Instant, High-Performance Social Media & OG Banners at the Edge.
          </h1>
          <p class="text-xs sm:text-sm text-[var(--text-on-surface)] leading-relaxed max-w-3xl opacity-90">
            <strong class="text-amber-500 font-bold">Banners.Pheco.Dev</strong> provides sub-50ms dynamic image rendering powered by Cloudflare Workers & Satori. Generate Open Graph cards, GitHub repository heroes, YouTube thumbnails, and tech banners programmatically via clean API URLs or our interactive workbench.
          </p>
        </div>

        <!-- Key Highlights Stats -->
        <div class="lg:col-span-4 grid grid-cols-3 gap-3 pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[var(--border-outline-val)] lg:pl-6">
          <div class="bg-[var(--bg-surface)] p-2.5 border border-[var(--border-outline-val)] text-center">
            <div class="text-base sm:text-lg font-black text-amber-500">&lt;50ms</div>
            <div class="text-[10px] uppercase text-[var(--text-on-surface)] font-semibold mt-0.5">Render Speed</div>
          </div>
          <div class="bg-[var(--bg-surface)] p-2.5 border border-[var(--border-outline-val)] text-center">
            <div class="text-base sm:text-lg font-black text-emerald-500">6,400+</div>
            <div class="text-[10px] uppercase text-[var(--text-on-surface)] font-semibold mt-0.5">Tech Icons</div>
          </div>
          <div class="bg-[var(--bg-surface)] p-2.5 border border-[var(--border-outline-val)] text-center">
            <div class="text-base sm:text-lg font-black text-sky-400">100%</div>
            <div class="text-[10px] uppercase text-[var(--text-on-surface)] font-semibold mt-0.5">Free API</div>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Main 2-Column Workbench Layout -->
  <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">

    <!-- LEFT COLUMN: Penguin UI Workbench Controls (7 Cols on LG) -->
    <div class="lg:col-span-6 xl:col-span-5 flex flex-col gap-6">
      
      <!-- Penguin UI Tab Navigation -->
      <div class="border border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] p-1 grid grid-cols-5 text-xs font-bold uppercase font-mono-code">
        <button @click="switchTab('content')" :class="activeTab === 'content' ? 'bg-[var(--color-primary-val)] text-black font-extrabold shadow-sm' : 'text-[var(--text-on-surface)] hover:bg-black/10 dark:hover:bg-white/10'" class="py-2.5 flex items-center justify-center gap-1 transition-all">
          <i data-lucide="type" class="w-3.5 h-3.5"></i>
          <span>Text</span>
        </button>
        <button @click="switchTab('theme')" :class="activeTab === 'theme' ? 'bg-[var(--color-primary-val)] text-black font-extrabold shadow-sm' : 'text-[var(--text-on-surface)] hover:bg-black/10 dark:hover:bg-white/10'" class="py-2.5 flex items-center justify-center gap-1 transition-all">
          <i data-lucide="palette" class="w-3.5 h-3.5"></i>
          <span>Theme</span>
        </button>
        <button @click="switchTab('logo')" :class="activeTab === 'logo' ? 'bg-[var(--color-primary-val)] text-black font-extrabold shadow-sm' : 'text-[var(--text-on-surface)] hover:bg-black/10 dark:hover:bg-white/10'" class="py-2.5 flex items-center justify-center gap-1 transition-all">
          <i data-lucide="image" class="w-3.5 h-3.5"></i>
          <span>Icon</span>
        </button>
        <button @click="switchTab('pattern')" :class="activeTab === 'pattern' ? 'bg-[var(--color-primary-val)] text-black font-extrabold shadow-sm' : 'text-[var(--text-on-surface)] hover:bg-black/10 dark:hover:bg-white/10'" class="py-2.5 flex items-center justify-center gap-1 transition-all">
          <i data-lucide="grid" class="w-3.5 h-3.5"></i>
          <span>Style</span>
        </button>
        <button @click="switchTab('footer')" :class="activeTab === 'footer' ? 'bg-[var(--color-primary-val)] text-black font-extrabold shadow-sm' : 'text-[var(--text-on-surface)] hover:bg-black/10 dark:hover:bg-white/10'" class="py-2.5 flex items-center justify-center gap-1 transition-all">
          <i data-lucide="shield" class="w-3.5 h-3.5"></i>
          <span>Footer</span>
        </button>
      </div>

      <!-- TAB 1: Content & Typography -->
      <div x-show="activeTab === 'content'" class="border border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] p-5 space-y-4">
        <div class="flex items-center justify-between border-b border-[var(--border-outline-val)] pb-2">
          <h2 class="font-bold text-sm tracking-wider uppercase text-[var(--text-on-surface-strong)] flex items-center gap-2">
            <i data-lucide="type" class="w-4 h-4 text-amber-500"></i>
            <span>Content & Typography</span>
          </h2>
        </div>

        <!-- Banner Title Input -->
        <div class="space-y-1">
          <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Banner Title</label>
          <input 
            type="text" 
            x-model="title" 
            placeholder="Enter title..."
            class="w-full px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-outline-val)] text-[var(--text-on-surface-strong)] text-sm focus:outline-none focus:border-[var(--border-outline-strong-val)] transition-all font-medium"
          />
        </div>

        <!-- Subtitle Input -->
        <div class="space-y-1">
          <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Subtitle / Description</label>
          <textarea 
            x-model="subtitle" 
            rows="2"
            placeholder="Enter subtitle..."
            class="w-full px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-outline-val)] text-[var(--text-on-surface-strong)] text-sm focus:outline-none focus:border-[var(--border-outline-strong-val)] transition-all font-medium resize-none"
          ></textarea>
        </div>

        <!-- Text Alignment Segmented Buttons -->
        <div class="space-y-1">
          <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Text Alignment</label>
          <div class="grid grid-cols-3 gap-2">
            <button 
              @click="align = 'flex-start'" 
              :class="align === 'flex-start' ? 'bg-[var(--color-primary-val)] text-black font-bold' : 'bg-[var(--bg-surface)] text-[var(--text-on-surface)] hover:border-amber-500'" 
              class="py-2 border border-[var(--border-outline-val)] text-xs font-mono-code transition-all flex items-center justify-center gap-1.5">
              <i data-lucide="align-left" class="w-3.5 h-3.5"></i>
              <span>Left</span>
            </button>
            <button 
              @click="align = 'center'" 
              :class="align === 'center' ? 'bg-[var(--color-primary-val)] text-black font-bold' : 'bg-[var(--bg-surface)] text-[var(--text-on-surface)] hover:border-amber-500'" 
              class="py-2 border border-[var(--border-outline-val)] text-xs font-mono-code transition-all flex items-center justify-center gap-1.5">
              <i data-lucide="align-center" class="w-3.5 h-3.5"></i>
              <span>Center</span>
            </button>
            <button 
              @click="align = 'flex-end'" 
              :class="align === 'flex-end' ? 'bg-[var(--color-primary-val)] text-black font-bold' : 'bg-[var(--bg-surface)] text-[var(--text-on-surface)] hover:border-amber-500'" 
              class="py-2 border border-[var(--border-outline-val)] text-xs font-mono-code transition-all flex items-center justify-center gap-1.5">
              <i data-lucide="align-right" class="w-3.5 h-3.5"></i>
              <span>Right</span>
            </button>
          </div>
        </div>

        <!-- Title & Subtitle Size Sliders -->
        <div class="grid grid-cols-2 gap-4 pt-2">
          <div class="space-y-1">
            <div class="flex justify-between text-xs font-mono-code">
              <span class="text-[var(--text-on-surface)] font-semibold uppercase">Title Size</span>
              <span class="text-amber-500 font-bold" x-text="titleSize + 'px'"></span>
            </div>
            <input type="range" min="30" max="90" x-model="titleSize" class="w-full accent-amber-500 cursor-pointer" />
          </div>
          <div class="space-y-1">
            <div class="flex justify-between text-xs font-mono-code">
              <span class="text-[var(--text-on-surface)] font-semibold uppercase">Subtitle Size</span>
              <span class="text-amber-500 font-bold" x-text="subtitleSize + 'px'"></span>
            </div>
            <input type="range" min="16" max="42" x-model="subtitleSize" class="w-full accent-amber-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <!-- TAB 2: Theme Presets & Dimensions -->
      <div x-show="activeTab === 'theme'" class="border border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] p-5 space-y-4">
        <div class="flex items-center justify-between border-b border-[var(--border-outline-val)] pb-2">
          <h2 class="font-bold text-sm tracking-wider uppercase text-[var(--text-on-surface-strong)] flex items-center gap-2">
            <i data-lucide="palette" class="w-4 h-4 text-amber-500"></i>
            <span>Color Presets & Canvas</span>
          </h2>
        </div>

        <!-- Color Theme Presets -->
        <div class="space-y-2">
          <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Color Preset</label>
          <div class="grid grid-cols-3 sm:grid-cols-4 gap-2.5 max-h-64 overflow-y-auto p-1.5 border border-[var(--border-outline-val)] bg-[var(--bg-surface)]">
            <template x-for="t in themePresets" :key="t.id">
              <button 
                @click="theme = t.id"
                :style="'background:' + t.bg"
                :class="theme === t.id ? 'ring-2 ring-amber-500 scale-[1.02] font-black' : 'opacity-80 hover:opacity-100'"
                class="h-10 px-2 text-[11px] font-bold text-white border border-black/30 shadow-sm transition-all flex items-center justify-center text-center uppercase tracking-tight"
                x-text="t.name">
              </button>
            </template>
          </div>
        </div>

        <!-- Canvas Dimensions -->
        <div class="space-y-1 pt-2">
          <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Canvas Dimension</label>
          <select 
            x-model="dimension" 
            class="w-full px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-outline-val)] text-[var(--text-on-surface-strong)] text-xs font-mono-code focus:outline-none focus:border-amber-500">
            <option value="1200x630">OG Image / Facebook (1200 x 630)</option>
            <option value="1200x600">Twitter / X Banner (1200 x 600)</option>
            <option value="1280x720">YouTube Thumbnail / HD (1280 x 720)</option>
            <option value="1080x1080">Instagram Square (1080 x 1080)</option>
          </select>
        </div>
      </div>

      <!-- TAB 3: Logo & Custom Image -->
      <div x-show="activeTab === 'logo'" class="border border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] p-5 space-y-4">
        <div class="flex items-center justify-between border-b border-[var(--border-outline-val)] pb-2">
          <h2 class="font-bold text-sm tracking-wider uppercase text-[var(--text-on-surface-strong)] flex items-center gap-2">
            <i data-lucide="image" class="w-4 h-4 text-amber-500"></i>
            <span>Logo & Custom Graphic</span>
          </h2>
        </div>

        <!-- Mode Segmented Button -->
        <div class="grid grid-cols-4 gap-1 border border-[var(--border-outline-val)] p-1 bg-[var(--bg-surface)]">
          <button @click="logoMode = 'preset'" :class="logoMode === 'preset' ? 'bg-amber-500 text-black font-extrabold' : 'text-[var(--text-on-surface)]'" class="py-1.5 text-[11px] font-mono-code uppercase transition-all">Presets</button>
          <button @click="logoMode = 'url'" :class="logoMode === 'url' ? 'bg-amber-500 text-black font-extrabold' : 'text-[var(--text-on-surface)]'" class="py-1.5 text-[11px] font-mono-code uppercase transition-all">URL</button>
          <button @click="logoMode = 'upload'" :class="logoMode === 'upload' ? 'bg-amber-500 text-black font-extrabold' : 'text-[var(--text-on-surface)]'" class="py-1.5 text-[11px] font-mono-code uppercase transition-all">Upload</button>
          <button @click="logoMode = 'none'" :class="logoMode === 'none' ? 'bg-amber-500 text-black font-extrabold' : 'text-[var(--text-on-surface)]'" class="py-1.5 text-[11px] font-mono-code uppercase transition-all">None</button>
        </div>

        <!-- Preset Icons & theSVG Search -->
        <div x-show="logoMode === 'preset'" class="space-y-3">
          <div class="flex items-center justify-between">
            <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Preset & theSVG Library (6,400+ Icons)</label>
            <a href="https://thesvg.org/" target="_blank" rel="noopener" class="text-[10px] text-amber-400 hover:underline font-mono-code flex items-center gap-1">
              <span>glincker/thesvg</span>
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
          </div>
          <input 
            type="text" 
            x-model="iconSearch" 
            placeholder="Search local or type any brand slug (e.g. linear, clerk, resend, hono, bun)..."
            class="w-full px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-outline-val)] text-xs text-[var(--text-on-surface-strong)] font-mono-code focus:outline-none focus:border-amber-500"
          />

          <!-- Dynamic theSVG Slug Card (Debounced & Validated) -->
          <template x-if="validTheSvgLogo">
            <div class="p-3 border border-amber-500/50 bg-amber-500/10 flex items-center justify-between gap-3">
              <div class="flex items-center gap-3 overflow-hidden">
                <img 
                  :src="'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/' + validTheSvgLogo + '/default.svg'" 
                  class="w-7 h-7 object-contain bg-black/20 p-1 border border-amber-500/30"
                />
                <div class="truncate font-mono-code text-xs">
                  <span class="text-[var(--text-on-surface-strong)] font-bold" x-text="validTheSvgLogo"></span>
                  <span class="text-stone-400 text-[10px] block">Verified from glincker/thesvg</span>
                </div>
              </div>
              <button 
                @click="presetLogo = validTheSvgLogo"
                :class="presetLogo === validTheSvgLogo ? 'bg-amber-500 text-black font-extrabold' : 'border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-black'"
                class="px-3 py-1 text-xs font-mono-code font-bold uppercase transition-all whitespace-nowrap">
                <span x-text="presetLogo === validTheSvgLogo ? 'Selected' : 'Use Icon'"></span>
              </button>
            </div>
          </template>

          <div class="grid grid-cols-4 sm:grid-cols-5 gap-2 max-h-48 overflow-y-auto p-1.5 border border-[var(--border-outline-val)] bg-[var(--bg-surface)]">
            <template x-for="icon in filteredIcons" :key="icon.id">
              <button 
                @click="presetLogo = icon.id"
                :class="presetLogo === icon.id ? 'border-amber-500 bg-amber-500/20 text-white font-bold ring-1 ring-amber-500' : 'border-[var(--border-outline-val)] hover:border-amber-500/60 text-[var(--text-on-surface)]'"
                class="p-2 border flex flex-col items-center justify-center gap-1 transition-all h-16 relative overflow-hidden cursor-pointer select-none">
                <div class="w-6 h-6 flex items-center justify-center overflow-hidden pointer-events-none [&_svg]:w-full [&_svg]:h-full [&_svg]:max-w-full [&_svg]:max-h-full [&_svg]:object-contain" x-html="icon.svg"></div>
                <span class="text-[10px] truncate max-w-full font-mono-code pointer-events-none" x-text="icon.name"></span>
              </button>
            </template>
          </div>

          <!-- Quick Suggestion Slugs -->
          <div class="space-y-1">
            <span class="text-[10px] font-mono-code uppercase text-stone-400 font-semibold">Popular theSVG Brand Slugs:</span>
            <div class="flex flex-wrap gap-1">
              <template x-for="slug in ['linear', 'clerk', 'resend', 'prisma', 'drizzle', 'hono', 'deno', 'bun', 'astro', 'nuxt', 'remix', 'firebase', 'redis', 'postgresql', 'mongodb']" :key="slug">
                <button 
                  @click="presetLogo = slug; iconSearch = slug"
                  :class="presetLogo === slug ? 'bg-amber-500 text-black font-bold' : 'bg-[var(--bg-surface)] text-[var(--text-on-surface)] border border-[var(--border-outline-val)] hover:border-amber-500'"
                  class="px-2 py-0.5 text-[10px] font-mono-code transition-all"
                  x-text="slug">
                </button>
              </template>
            </div>
          </div>
        </div>

        <!-- Custom Image URL -->
        <div x-show="logoMode === 'url'" class="space-y-1">
          <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Image Direct URL</label>
          <input 
            type="url" 
            x-model="logoUrl" 
            placeholder="https://example.com/logo.png"
            class="w-full px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-outline-val)] text-xs text-[var(--text-on-surface-strong)] font-mono-code focus:outline-none focus:border-amber-500"
          />
        </div>

        <!-- File Upload -->
        <div x-show="logoMode === 'upload'" class="space-y-2">
          <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Upload Custom File</label>
          <input 
            type="file" 
            accept="image/*"
            @change="handleFileUpload($event)"
            class="block w-full text-xs font-mono-code text-stone-400 file:mr-3 file:py-2 file:px-4 file:border-0 file:text-xs file:font-bold file:bg-amber-500 file:text-black hover:file:bg-amber-400 cursor-pointer"
          />
        </div>

        <!-- Frame Shape & Size -->
        <div class="grid grid-cols-2 gap-4 pt-2">
          <div class="space-y-1">
            <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Frame Shape</label>
            <select x-model="logoShape" class="w-full px-2 py-1.5 bg-[var(--bg-surface)] border border-[var(--border-outline-val)] text-xs font-mono-code focus:outline-none">
              <option value="rounded">Rounded Square</option>
              <option value="circle">Circle</option>
              <option value="none">Transparent</option>
            </select>
          </div>
          <div class="space-y-1">
            <div class="flex justify-between text-xs font-mono-code">
              <span class="text-[var(--text-on-surface)] font-semibold uppercase">Logo Size</span>
              <span class="text-amber-500 font-bold" x-text="logoSize + 'px'"></span>
            </div>
            <input type="range" min="40" max="180" x-model="logoSize" class="w-full accent-amber-500 cursor-pointer" />
          </div>
        </div>
      </div>

      <!-- TAB 4: Background Patterns -->
      <div x-show="activeTab === 'pattern'" class="border border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] p-5 space-y-4">
        <div class="flex items-center justify-between border-b border-[var(--border-outline-val)] pb-2">
          <h2 class="font-bold text-sm tracking-wider uppercase text-[var(--text-on-surface-strong)] flex items-center gap-2">
            <i data-lucide="grid" class="w-4 h-4 text-amber-500"></i>
            <span>Background Pattern Overlay</span>
          </h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-60 overflow-y-auto p-1.5 border border-[var(--border-outline-val)] bg-[var(--bg-surface)]">
          <template x-for="p in patterns" :key="p.id">
            <button 
              @click="pattern = p.id"
              :class="pattern === p.id ? 'bg-amber-500 text-black font-extrabold border-black' : 'bg-[var(--bg-surface)] text-[var(--text-on-surface)] hover:border-amber-500'"
              class="p-2.5 border border-[var(--border-outline-val)] text-[11px] font-mono-code uppercase text-center transition-all truncate"
              x-text="p.name">
            </button>
          </template>
        </div>
      </div>

      <!-- TAB 5: Watermark & Footer -->
      <div x-show="activeTab === 'footer'" class="border border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] p-5 space-y-4">
        <div class="flex items-center justify-between border-b border-[var(--border-outline-val)] pb-2">
          <h2 class="font-bold text-sm tracking-wider uppercase text-[var(--text-on-surface-strong)] flex items-center gap-2">
            <i data-lucide="shield" class="w-4 h-4 text-amber-500"></i>
            <span>Footer & Watermarks</span>
          </h2>
        </div>

        <div class="space-y-3">
          <div class="space-y-1">
            <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Left Footer Text (Leave empty to hide)</label>
            <input 
              type="text" 
              x-model="watermark" 
              placeholder="Leave empty to hide..."
              class="w-full px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-outline-val)] text-xs text-[var(--text-on-surface-strong)] font-mono-code focus:outline-none focus:border-amber-500"
            />
          </div>
          <div class="space-y-1">
            <label class="block text-xs font-mono-code uppercase font-semibold text-[var(--text-on-surface)]">Right Badge Text (Leave empty to hide)</label>
            <input 
              type="text" 
              x-model="watermarkBadge" 
              placeholder="Leave empty to hide..."
              class="w-full px-3 py-2 bg-[var(--bg-surface)] border border-[var(--border-outline-val)] text-xs text-[var(--text-on-surface-strong)] font-mono-code focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>

    </div>

    <!-- RIGHT COLUMN: Penguin UI Live Preview & Direct Integration (5-6 Cols on LG) -->
    <div class="lg:col-span-6 xl:col-span-7 flex flex-col gap-6">

      <!-- Live Banner Preview Card -->
      <div class="border border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] p-5 space-y-4 sticky top-20">
        <div class="flex items-center justify-between border-b border-[var(--border-outline-val)] pb-3">
          <h2 class="font-bold text-sm tracking-wider uppercase text-[var(--text-on-surface-strong)] flex items-center gap-2">
            <i data-lucide="eye" class="w-4 h-4 text-amber-500"></i>
            <span>Live Banner Canvas</span>
          </h2>
          
          <template x-if="renderMs">
            <span class="px-2.5 py-1 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono-code font-bold flex items-center gap-1">
              <i data-lucide="zap" class="w-3 h-3 text-sky-400"></i>
              <span x-text="renderMs + ' ms'"></span>
            </span>
          </template>
        </div>

        <!-- Canvas Container -->
        <div class="relative w-full bg-black border border-[var(--border-outline-val)] overflow-hidden min-h-[300px] flex items-center justify-center shadow-2xl">
          <!-- Loading State Overlay -->
          <div 
            x-show="loading" 
            x-transition:enter="transition ease-out duration-150"
            x-transition:enter-start="opacity-0"
            x-transition:enter-end="opacity-100"
            x-transition:leave="transition ease-in duration-150"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0"
            class="absolute inset-0 bg-black/80 backdrop-blur-xs flex flex-col items-center justify-center gap-3 z-10 font-mono-code">
            
            <i data-lucide="loader-2" class="w-10 h-10 text-amber-500 animate-spin"></i>
            
            <div class="flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <i data-lucide="zap" class="w-3.5 h-3.5 text-amber-400 animate-pulse"></i>
              <span>Generating Banner...</span>
            </div>
          </div>

          <img 
            :src="previewSrc" 
            alt="Live Banner Preview" 
            class="max-w-full h-auto block object-contain transition-opacity duration-200"
            :class="loading ? 'opacity-40' : 'opacity-100'"
          />
        </div>

        <!-- Download Toolbar Buttons -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button 
            @click="downloadPng()" 
            class="py-3 px-4 bg-amber-500 hover:bg-amber-400 text-black font-extrabold font-mono-code text-xs uppercase border border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all flex items-center justify-center gap-2">
            <i data-lucide="download" class="w-4 h-4"></i>
            <span>Download PNG Banner</span>
          </button>
          <button 
            @click="downloadSvg()" 
            class="py-3 px-4 bg-[var(--bg-surface)] hover:border-amber-500 text-[var(--text-on-surface-strong)] font-bold font-mono-code text-xs uppercase border border-[var(--border-outline-val)] transition-all flex items-center justify-center gap-2">
            <i data-lucide="file-code" class="w-4 h-4"></i>
            <span>Download SVG Vector</span>
          </button>
        </div>

        <!-- Integration Snippets Section -->
        <div class="border-t border-[var(--border-outline-val)] pt-4 space-y-3">
          <h3 class="font-mono-code font-bold text-xs uppercase text-[var(--text-on-surface)] flex items-center gap-2">
            <i data-lucide="code" class="w-4 h-4 text-amber-500"></i>
            <span>Direct API URL & Integration</span>
          </h3>

          <!-- Direct Image API URL -->
          <div class="space-y-1">
            <span class="text-[11px] font-mono-code text-stone-400 uppercase font-semibold">Direct Image URL</span>
            <div class="flex items-center bg-[var(--bg-surface)] border border-[var(--border-outline-val)] p-1.5 text-xs font-mono-code">
              <span class="flex-1 truncate text-sky-400 px-2 select-all" x-text="fullApiUrl"></span>
              <button 
                @click="copyToClipboard(fullApiUrl, 'Copied Direct Image URL!')"
                class="px-3 py-1 bg-amber-500/20 hover:bg-amber-500 hover:text-black text-amber-400 font-bold border border-amber-500/40 uppercase transition-all flex items-center gap-1">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                <span>Copy</span>
              </button>
            </div>
          </div>

          <!-- Markdown Snippet -->
          <div class="space-y-1">
            <span class="text-[11px] font-mono-code text-stone-400 uppercase font-semibold">Markdown Code</span>
            <div class="flex items-center bg-[var(--bg-surface)] border border-[var(--border-outline-val)] p-1.5 text-xs font-mono-code">
              <span class="flex-1 truncate text-emerald-400 px-2 select-all" x-text="markdownSnippet"></span>
              <button 
                @click="copyToClipboard(markdownSnippet, 'Copied Markdown snippet!')"
                class="px-3 py-1 bg-amber-500/20 hover:bg-amber-500 hover:text-black text-amber-400 font-bold border border-amber-500/40 uppercase transition-all flex items-center gap-1">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                <span>Copy</span>
              </button>
            </div>
          </div>

          <!-- HTML Img Tag -->
          <div class="space-y-1">
            <span class="text-[11px] font-mono-code text-stone-400 uppercase font-semibold">HTML &lt;img/&gt; Tag</span>
            <div class="flex items-center bg-[var(--bg-surface)] border border-[var(--border-outline-val)] p-1.5 text-xs font-mono-code">
              <span class="flex-1 truncate text-purple-400 px-2 select-all" x-text="htmlSnippet"></span>
              <button 
                @click="copyToClipboard(htmlSnippet, 'Copied HTML tag!')"
                class="px-3 py-1 bg-amber-500/20 hover:bg-amber-500 hover:text-black text-amber-400 font-bold border border-amber-500/40 uppercase transition-all flex items-center gap-1">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
                <span>Copy</span>
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>

  </main>

  <!-- Why Choose Banners.Pheco.Dev Section -->
  <section class="border-t border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Subtle Ambient Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto space-y-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center space-y-3 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-bold uppercase tracking-wider font-mono-code">
          <i data-lucide="shield-check" class="w-3.5 h-3.5 text-amber-500"></i>
          <span>WHY CHOOSE BANNERS.PHECO.DEV</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-black text-[var(--text-on-surface-strong)] tracking-tight">
          Why Choose Banners.Pheco.Dev?
        </h2>
        <p class="text-xs sm:text-sm text-[var(--text-on-surface)] leading-relaxed opacity-90">
          The premier automated Open Graph & social media image generation platform built for developers, creators, and marketers.
        </p>
      </div>

      <!-- 8 Reasons Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Reason 1: Edge Speed -->
        <div class="bg-[var(--bg-surface)] p-5 border border-[var(--border-outline-val)] hover:border-amber-500/60 transition-all duration-200 group flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
              <i data-lucide="zap" class="w-5 h-5"></i>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-amber-500 font-bold uppercase tracking-widest font-mono-code">01. EDGE SPEED</span>
              <h3 class="text-sm font-extrabold text-[var(--text-on-surface-strong)] tracking-tight">Sub-50ms Edge Performance</h3>
            </div>
            <p class="text-xs text-[var(--text-on-surface)] leading-relaxed opacity-85">
              Powered by Cloudflare Workers & next-gen Satori engine. Banners are rendered dynamically at edge nodes in milliseconds.
            </p>
          </div>
        </div>

        <!-- Reason 2: 100% Free -->
        <div class="bg-[var(--bg-surface)] p-5 border border-[var(--border-outline-val)] hover:border-emerald-500/60 transition-all duration-200 group flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
              <i data-lucide="gift" class="w-5 h-5"></i>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-emerald-500 font-bold uppercase tracking-widest font-mono-code">02. FREE FOREVER</span>
              <h3 class="text-sm font-extrabold text-[var(--text-on-surface-strong)] tracking-tight">100% Free & No API Key</h3>
            </div>
            <p class="text-xs text-[var(--text-on-surface)] leading-relaxed opacity-85">
              Completely free for personal projects, blogs, open-source repos, and commercial sites without signups or API keys.
            </p>
          </div>
        </div>

        <!-- Reason 3: 6,400+ Icons -->
        <div class="bg-[var(--bg-surface)] p-5 border border-[var(--border-outline-val)] hover:border-sky-500/60 transition-all duration-200 group flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-black transition-colors">
              <i data-lucide="shapes" class="w-5 h-5"></i>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-sky-400 font-bold uppercase tracking-widest font-mono-code">03. RICH LIBRARY</span>
              <h3 class="text-sm font-extrabold text-[var(--text-on-surface-strong)] tracking-tight">6,400+ Tech Icons Library</h3>
            </div>
            <p class="text-xs text-[var(--text-on-surface)] leading-relaxed opacity-85">
              Seamlessly search 6,400+ icons from theSVG & Devicon, or provide custom logo URLs and direct image uploads.
            </p>
          </div>
        </div>

        <!-- Reason 4: Multi-platform -->
        <div class="bg-[var(--bg-surface)] p-5 border border-[var(--border-outline-val)] hover:border-purple-500/60 transition-all duration-200 group flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-black transition-colors">
              <i data-lucide="layout-grid" class="w-5 h-5"></i>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-purple-400 font-bold uppercase tracking-widest font-mono-code">04. MULTI-PLATFORM</span>
              <h3 class="text-sm font-extrabold text-[var(--text-on-surface-strong)] tracking-tight">Multi-Platform Preset Sizes</h3>
            </div>
            <p class="text-xs text-[var(--text-on-surface)] leading-relaxed opacity-85">
              Pre-configured dimensions for Facebook Open Graph (1200x630), Twitter/X (1200x600), YouTube Covers (1280x720), and Instagram (1080x1080).
            </p>
          </div>
        </div>

        <!-- Reason 5: 24+ Colors & Patterns -->
        <div class="bg-[var(--bg-surface)] p-5 border border-[var(--border-outline-val)] hover:border-pink-500/60 transition-all duration-200 group flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-black transition-colors">
              <i data-lucide="palette" class="w-5 h-5"></i>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-pink-400 font-bold uppercase tracking-widest font-mono-code">05. STYLING SYSTEM</span>
              <h3 class="text-sm font-extrabold text-[var(--text-on-surface-strong)] tracking-tight">24+ Color Schemes & Patterns</h3>
            </div>
            <p class="text-xs text-[var(--text-on-surface)] leading-relaxed opacity-85">
              Choose from 24 curated gradient palettes (Flat UI, Aussie, British) matched with 20+ patterns like Glow Mesh, Circuit, and Hexagons.
            </p>
          </div>
        </div>

        <!-- Reason 6: Dynamic URL API -->
        <div class="bg-[var(--bg-surface)] p-5 border border-[var(--border-outline-val)] hover:border-amber-500/60 transition-all duration-200 group flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
              <i data-lucide="code-2" class="w-5 h-5"></i>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-amber-500 font-bold uppercase tracking-widest font-mono-code">06. DYNAMIC API</span>
              <h3 class="text-sm font-extrabold text-[var(--text-on-surface-strong)] tracking-tight">Direct Dynamic URL API</h3>
            </div>
            <p class="text-xs text-[var(--text-on-surface)] leading-relaxed opacity-85">
              Simply embed dynamic URL endpoints into <code class="text-amber-500 font-mono-code font-bold">og:image</code> meta tags or Markdown README files without hosting static files.
            </p>
          </div>
        </div>

        <!-- Reason 7: Customization -->
        <div class="bg-[var(--bg-surface)] p-5 border border-[var(--border-outline-val)] hover:border-indigo-500/60 transition-all duration-200 group flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-black transition-colors">
              <i data-lucide="sliders" class="w-5 h-5"></i>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-indigo-400 font-bold uppercase tracking-widest font-mono-code">07. FLEXIBLE CONTROLS</span>
              <h3 class="text-sm font-extrabold text-[var(--text-on-surface-strong)] tracking-tight">Top-to-Bottom Customization</h3>
            </div>
            <p class="text-xs text-[var(--text-on-surface)] leading-relaxed opacity-85">
              Fine-tune title sizes, font alignment (Left/Center/Right), logo shapes (Round/Rounded/Square), and custom brand watermarks.
            </p>
          </div>
        </div>

        <!-- Reason 8: PWA & Offline Support -->
        <div class="bg-[var(--bg-surface)] p-5 border border-[var(--border-outline-val)] hover:border-teal-500/60 transition-all duration-200 group flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-10 h-10 bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-black transition-colors">
              <i data-lucide="smartphone" class="w-5 h-5"></i>
            </div>
            <div class="space-y-1">
              <span class="text-[10px] text-teal-400 font-bold uppercase tracking-widest font-mono-code">08. MODERN PWA</span>
              <h3 class="text-sm font-extrabold text-[var(--text-on-surface-strong)] tracking-tight">Modern Responsive UI & PWA</h3>
            </div>
            <p class="text-xs text-[var(--text-on-surface)] leading-relaxed opacity-85">
              Enjoy a sleek Penguin UI interface with Dark/Light mode support, LocalStorage persistence, and PWA desktop/mobile installation.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>

  <!-- Penguin UI Page Footer -->
  <footer class="border-t border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] py-8 mt-auto font-mono-code">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      
      <!-- Top Row: Credits & Ecosystem Partners -->
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[var(--border-outline-val)] text-xs">
        <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-[var(--text-on-surface)]">
          <span class="font-semibold text-[var(--text-on-surface-strong)] uppercase tracking-wider flex items-center gap-1.5 mr-1">
            <i data-lucide="heart" class="w-3.5 h-3.5 text-amber-500"></i>
            <span>Credits:</span>
          </span>
          <a 
            href="https://workers.cloudflare.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-amber-500 transition-colors flex items-center gap-1 text-[var(--text-on-surface)]">
            <i data-lucide="zap" class="w-3 h-3 text-amber-500"></i>
            <span>Cloudflare Workers</span>
          </a>
          <span class="text-[var(--border-outline-val)]">•</span>
          <a 
            href="https://flatuicolors.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-amber-500 transition-colors flex items-center gap-1 text-[var(--text-on-surface)]">
            <i data-lucide="palette" class="w-3 h-3 text-amber-500"></i>
            <span>Flat UI Colors</span>
          </a>
          <span class="text-[var(--border-outline-val)]">•</span>
          <a 
            href="https://thesvg.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-amber-500 transition-colors flex items-center gap-1 text-[var(--text-on-surface)]">
            <i data-lucide="image" class="w-3 h-3 text-amber-500"></i>
            <span>theSVG Icon Library</span>
          </a>
          <span class="text-[var(--border-outline-val)]">•</span>
          <a 
            href="https://www.penguinui.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hover:text-amber-500 transition-colors flex items-center gap-1 text-[var(--text-on-surface)]">
            <i data-lucide="layout" class="w-3 h-3 text-amber-500"></i>
            <span>Penguin UI</span>
          </a>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-[var(--text-on-surface)] opacity-80 text-xs">Sponsored by</span>
          <a 
            href="https://fcode.vn" 
            target="_blank" 
            rel="noopener noreferrer"
            class="font-black text-amber-500 hover:text-black hover:bg-amber-500 transition-all flex items-center gap-1.5 bg-amber-500/10 px-2.5 py-1 border border-amber-500/40 text-xs uppercase tracking-wider">
            <span>fcode.vn</span>
            <i data-lucide="external-link" class="w-3 h-3"></i>
          </a>
        </div>
      </div>

      <!-- Bottom Row: Copyright & Infrastructure Info -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--text-on-surface)]">
        <div class="flex items-center gap-2">
          <span>© 2026</span>
          <a href="https://banners.pheco.dev" target="_blank" class="font-bold text-[var(--text-on-surface-strong)] hover:text-amber-500 transition-colors">
            Banners.Pheco.Dev
          </a>
          <span>— All rights reserved.</span>
        </div>

        <div class="flex items-center gap-2 text-[11px] text-stone-400">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Edge Satori Engine v2.0 • Sub-50ms Rendering</span>
        </div>
      </div>

    </div>
  </footer>

  <!-- Penguin UI Toast Notification -->
  <div 
    x-show="toast.show" 
    x-transition:enter="transition ease-out duration-200"
    x-transition:enter-start="opacity-0 translate-y-4"
    x-transition:enter-end="opacity-100 translate-y-0"
    x-transition:leave="transition ease-in duration-150"
    x-transition:leave-start="opacity-100 translate-y-0"
    x-transition:leave-end="opacity-0 translate-y-4"
    class="fixed bottom-6 right-6 z-50 px-5 py-3 bg-amber-500 text-black font-extrabold font-mono-code text-xs uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
    <i data-lucide="check-circle-2" class="w-4 h-4"></i>
    <span x-text="toast.message"></span>
  </div>

  <!-- Alpine.js Application Logic -->
  <script>
    const TECH_ICONS_DATA = ${iconsJson};
    const STORAGE_KEY = 'bg_cw_client_settings_v4';

    function bannerApp() {
      return {
        // App State Defaults
        title: 'Banners.Pheco.Dev — Free OG Banner Generator',
        subtitle: 'Generate ultra-fast Open Graph social images & tech hero assets powered by Cloudflare Workers',
        align: 'flex-start',
        titleSize: 56,
        subtitleSize: 26,
        theme: 'turquoise',
        dimension: '1200x630',
        logoMode: 'preset',
        presetLogo: 'cloudflare',
        logoUrl: '',
        uploadBase64: null,
        logoShape: 'rounded',
        logoSize: 90,
        iconSearch: '',
        debouncedIconSearch: '',
        iconSearchTimer: null,
        validTheSvgLogo: null,
        pattern: 'none',
        watermark: 'BANNERS.PHECO.DEV',
        watermarkBadge: 'SPONSORED BY FCODE.VN',

        // UI Control State
        activeTab: 'content',
        previewSrc: '',
        loading: false,
        renderMs: null,
        darkMode: true,
        toast: { show: false, message: '' },
        deferredPrompt: null,
        canInstallPwa: false,

        themePresets: [
          { id: 'turquoise', name: 'Turquoise', bg: 'linear-gradient(135deg, #1abc9c, #16a085)' },
          { id: 'emerald', name: 'Emerald', bg: 'linear-gradient(135deg, #2ecc71, #27ae60)' },
          { id: 'peter_river', name: 'Peter River', bg: 'linear-gradient(135deg, #3498db, #2980b9)' },
          { id: 'amethyst', name: 'Amethyst', bg: 'linear-gradient(135deg, #9b59b6, #8e44ad)' },
          { id: 'wet_asphalt', name: 'Wet Asphalt', bg: 'linear-gradient(135deg, #34495e, #2c3e50)' },
          { id: 'sunflower', name: 'Sunflower', bg: 'linear-gradient(135deg, #f1c40f, #f39c12)' },
          { id: 'carrot', name: 'Carrot', bg: 'linear-gradient(135deg, #e67e22, #d35400)' },
          { id: 'alizarin', name: 'Alizarin', bg: 'linear-gradient(135deg, #e74c3c, #c0392b)' },
          { id: 'clouds', name: 'Clouds', bg: 'linear-gradient(135deg, #ecf0f1, #bdc3c7)' },
          { id: 'concrete', name: 'Concrete', bg: 'linear-gradient(135deg, #95a5a6, #7f8c8d)' },
          { id: 'aussie_coastal', name: 'Aussie Coastal', bg: 'linear-gradient(135deg, #7ed6df, #22a6b3)' },
          { id: 'aussie_exodus', name: 'Aussie Exodus', bg: 'linear-gradient(135deg, #686de0, #4834d4)' },
          { id: 'aussie_deep_blue', name: 'Aussie Deep Blue', bg: 'linear-gradient(135deg, #30336b, #130e51)' },
          { id: 'aussie_heliotrope', name: 'Aussie Heliotrope', bg: 'linear-gradient(135deg, #e056fd, #be2ed6)' },
          { id: 'british_protractor', name: 'British Protractor', bg: 'linear-gradient(135deg, #00b894, #00cec9)' },
          { id: 'british_electrique', name: 'British Electrique', bg: 'linear-gradient(135deg, #0984e3, #6c5ce7)' },
          { id: 'british_pico_pink', name: 'British Pico Pink', bg: 'linear-gradient(135deg, #fd79a8, #e84393)' },
          { id: 'british_sizzling', name: 'British Sizzling', bg: 'linear-gradient(135deg, #d63031, #e17055)' },
          { id: 'canadian_jade', name: 'Canadian Jade', bg: 'linear-gradient(135deg, #1dd1a1, #10ac84)' },
          { id: 'canadian_jigglypuff', name: 'Canadian Jigglypuff', bg: 'linear-gradient(135deg, #ff9ff3, #f368e0)' },
          { id: 'canadian_megaman', name: 'Canadian Megaman', bg: 'linear-gradient(135deg, #48dbfb, #0abde3)' },
          { id: 'chinese_watermelon', name: 'Chinese Watermelon', bg: 'linear-gradient(135deg, #ff4757, #ff6b81)' },
          { id: 'chinese_bright_greek', name: 'Chinese Bright Greek', bg: 'linear-gradient(135deg, #3742fa, #5352ed)' },
          { id: 'chinese_bay_wharf', name: 'Chinese Bay Wharf', bg: 'linear-gradient(135deg, #2f3542, #57606f)' }
        ],

        patterns: [
          { id: 'none', name: 'None' },
          { id: 'grid', name: 'Line Grid' },
          { id: 'dots', name: 'Dots' },
          { id: 'polkaDots', name: 'Polka Dots' },
          { id: 'circuit', name: 'Circuit' },
          { id: 'architect', name: 'Architect' },
          { id: 'waves', name: 'Waves' },
          { id: 'topography', name: 'Contour' },
          { id: 'mesh', name: 'Glow Mesh' },
          { id: 'particles', name: 'Particles' },
          { id: 'diagonalStripes', name: 'Diagonal' },
          { id: 'hexagons', name: 'Hexagons' },
          { id: 'boxes', name: '3D Boxes' },
          { id: 'brickWall', name: 'Brick Wall' },
          { id: 'bubbles', name: 'Bubbles' },
          { id: 'fourPointStars', name: 'Stars' },
          { id: 'rain', name: 'Rain' },
          { id: 'squaresInSquares', name: 'Squares' },
          { id: 'steelBeams', name: 'Beams' },
          { id: 'tinyCheckers', name: 'Checkers' },
          { id: 'zigZag', name: 'Zig Zag' }
        ],

        get filteredIcons() {
          return Object.values(TECH_ICONS_DATA).filter((icon) =>
            icon.name.toLowerCase().includes(this.iconSearch.toLowerCase())
          );
        },

        get fullApiUrl() {
          return window.location.origin + this.previewSrc;
        },

        get markdownSnippet() {
          return '![' + (this.title || 'Banner') + '](' + this.fullApiUrl + ')';
        },

        get htmlSnippet() {
          return '<img src="' + this.fullApiUrl + '" alt="' + (this.title || 'Banner') + '" />';
        },

        init() {
          // Restore settings from Local Storage
          this.loadSavedOptions();

          // Sync initial dark mode class
          if (this.darkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }

          this.$watch('title', () => this.debounceUpdate());
          this.$watch('subtitle', () => this.debounceUpdate());
          this.$watch('align', () => this.debounceUpdate());
          this.$watch('titleSize', () => this.debounceUpdate());
          this.$watch('subtitleSize', () => this.debounceUpdate());
          this.$watch('theme', () => this.debounceUpdate());
          this.$watch('dimension', () => this.debounceUpdate());
          this.$watch('logoMode', () => this.debounceUpdate());
          this.$watch('presetLogo', () => this.debounceUpdate());
          this.$watch('logoUrl', () => this.debounceUpdate());
          this.$watch('uploadBase64', () => this.debounceUpdate());
          this.$watch('logoShape', () => this.debounceUpdate());
          this.$watch('logoSize', () => this.debounceUpdate());
          this.$watch('pattern', () => this.debounceUpdate());
          this.$watch('watermark', () => this.debounceUpdate());
          this.$watch('watermarkBadge', () => this.debounceUpdate());

          this.$watch('iconSearch', (val) => {
            clearTimeout(this.iconSearchTimer);
            if (!val || val.trim().length < 2) {
              this.validTheSvgLogo = null;
              return;
            }
            this.iconSearchTimer = setTimeout(async () => {
              const clean = val.toLowerCase().trim();
              if (TECH_ICONS_DATA[clean]) {
                this.validTheSvgLogo = null;
                return;
              }
              const testUrl = 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/' + clean + '/default.svg';
              try {
                const res = await fetch(testUrl, { method: 'HEAD' });
                if (res.ok) {
                  this.validTheSvgLogo = clean;
                } else {
                  this.validTheSvgLogo = null;
                }
              } catch (e) {
                this.validTheSvgLogo = null;
              }
            }, 450);
          });

          // Register PWA Service Worker
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(err => {
              console.warn('Service worker registration failed:', err);
            });
          }

          // Listen for PWA Install Prompt
          window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            this.deferredPrompt = e;
            this.canInstallPwa = true;
          });

          window.addEventListener('appinstalled', () => {
            this.canInstallPwa = false;
            this.deferredPrompt = null;
            this.showToast('Banners.Pheco.Dev installed as Web App!');
          });

          this.updatePreview();
          this.renderLucideIcons();
        },

        async installPwa() {
          if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            if (outcome === 'accepted') {
              this.canInstallPwa = false;
            }
            this.deferredPrompt = null;
          } else {
            this.showToast('App installation is available from your browser menu (Add to Home Screen).');
          }
        },

        renderLucideIcons() {
          this.$nextTick(() => {
            if (window.lucide) {
              window.lucide.createIcons();
            }
          });
        },

        switchTab(tab) {
          this.activeTab = tab;
          this.saveOptions();
          this.renderLucideIcons();
        },

        loadSavedOptions() {
          try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
              const parsed = JSON.parse(saved);
              if (parsed.title !== undefined) this.title = parsed.title;
              if (parsed.subtitle !== undefined) this.subtitle = parsed.subtitle;
              if (parsed.align !== undefined) this.align = parsed.align;
              if (parsed.titleSize !== undefined) this.titleSize = parsed.titleSize;
              if (parsed.subtitleSize !== undefined) this.subtitleSize = parsed.subtitleSize;
              if (parsed.theme !== undefined) this.theme = parsed.theme;
              if (parsed.dimension !== undefined) this.dimension = parsed.dimension;
              if (parsed.logoMode !== undefined) this.logoMode = parsed.logoMode;
              if (parsed.presetLogo !== undefined) this.presetLogo = parsed.presetLogo;
              if (parsed.logoUrl !== undefined) this.logoUrl = parsed.logoUrl;
              if (parsed.uploadBase64 !== undefined) this.uploadBase64 = parsed.uploadBase64;
              if (parsed.logoShape !== undefined) this.logoShape = parsed.logoShape;
              if (parsed.logoSize !== undefined) this.logoSize = parsed.logoSize;
              if (parsed.pattern !== undefined) this.pattern = parsed.pattern;
              if (parsed.watermark !== undefined) this.watermark = parsed.watermark;
              if (parsed.watermarkBadge !== undefined) this.watermarkBadge = parsed.watermarkBadge;
              if (parsed.darkMode !== undefined) this.darkMode = parsed.darkMode;
              if (parsed.activeTab !== undefined) this.activeTab = parsed.activeTab;
            }
          } catch (e) {
            console.warn('Could not load saved options from localStorage:', e);
          }
        },

        saveOptions() {
          try {
            const dataToSave = {
              title: this.title,
              subtitle: this.subtitle,
              align: this.align,
              titleSize: this.titleSize,
              subtitleSize: this.subtitleSize,
              theme: this.theme,
              dimension: this.dimension,
              logoMode: this.logoMode,
              presetLogo: this.presetLogo,
              logoUrl: this.logoUrl,
              uploadBase64: this.uploadBase64,
              logoShape: this.logoShape,
              logoSize: this.logoSize,
              pattern: this.pattern,
              watermark: this.watermark,
              watermarkBadge: this.watermarkBadge,
              darkMode: this.darkMode,
              activeTab: this.activeTab
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
          } catch (e) {
            console.warn('Could not save options to localStorage:', e);
          }
        },

        buildQuery() {
          const params = new URLSearchParams();
          params.set('title', this.title);
          params.set('subtitle', this.subtitle);
          params.set('align', this.align);
          params.set('titleSize', this.titleSize);
          params.set('subtitleSize', this.subtitleSize);
          params.set('theme', this.theme);
          params.set('pattern', this.pattern);
          params.set('logoSize', this.logoSize);
          params.set('logoShape', this.logoShape);

          const [w, h] = this.dimension.split('x');
          params.set('width', w);
          params.set('height', h);

          if (this.logoMode === 'preset') {
            const cleanLogo = (this.presetLogo || '').toLowerCase().trim();
            if (TECH_ICONS_DATA[cleanLogo]) {
              params.set('logo', cleanLogo);
            } else if (cleanLogo) {
              const cdnUrl = 'https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/' + cleanLogo + '/default.svg';
              params.set('logoUrl', cdnUrl);
            } else {
              params.set('logo', 'cloudflare');
            }
          } else if (this.logoMode === 'url' && this.logoUrl) {
            params.set('logoUrl', this.logoUrl);
          } else if (this.logoMode === 'upload' && this.uploadBase64) {
            params.set('logoUrl', this.uploadBase64);
          } else if (this.logoMode === 'none') {
            params.set('logo', 'none');
          }

          params.set('watermark', this.watermark !== null && this.watermark !== undefined ? this.watermark : '');
          params.set('watermarkBadge', this.watermarkBadge !== null && this.watermarkBadge !== undefined ? this.watermarkBadge : '');

          return params.toString();
        },

        debounceTimer: null,
        debounceUpdate() {
          this.saveOptions();
          clearTimeout(this.debounceTimer);
          this.debounceTimer = setTimeout(() => {
            this.updatePreview();
          }, 350);
        },

        updatePreview() {
          this.loading = true;
          const startTime = performance.now();
          const q = this.buildQuery();
          const src = '/banner?' + q;

          const img = new Image();
          img.src = src;
          img.onload = () => {
            this.previewSrc = src;
            this.renderMs = Math.round(performance.now() - startTime);
            this.loading = false;
            this.renderLucideIcons();
          };
          img.onerror = () => {
            this.loading = false;
            this.renderLucideIcons();
          };
        },

        downloadPng() {
          window.open('/banner?' + this.buildQuery(), '_blank');
        },

        downloadSvg() {
          window.open('/banner.svg?' + this.buildQuery(), '_blank');
        },

        handleFileUpload(event) {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
              this.uploadBase64 = e.target.result;
              this.saveOptions();
              this.showToast('Uploaded logo file successfully!');
            };
            reader.readAsDataURL(file);
          }
        },

        copyToClipboard(text, message) {
          navigator.clipboard.writeText(text);
          this.showToast(message);
        },

        showToast(message) {
          this.toast.message = message;
          this.toast.show = true;
          this.renderLucideIcons();
          setTimeout(() => {
            this.toast.show = false;
          }, 2000);
        },

        toggleDarkMode() {
          this.darkMode = !this.darkMode;
          if (this.darkMode) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          this.saveOptions();
          this.renderLucideIcons();
        }
      };
    }
  </script>
</body>
</html>`
}
