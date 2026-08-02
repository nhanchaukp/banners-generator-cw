export function renderErrorHtml(status: number, title: string, message: string, gaId?: string): string {
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
  <title>${status} — ${title} | Banners.Pheco.Dev</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  
  <!-- Google Fonts: Be Vietnam Pro & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  
  <!-- Tailwind CSS v4 CDN Browser Engine -->
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  
  <!-- Lucide Icons CDN -->
  <script src="https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.min.js"></script>

  <style type="text/tailwindcss">
    @theme {
      --font-sans: 'Be Vietnam Pro', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      --color-surface-dark: var(--color-stone-950);
      --color-surface-dark-alt: var(--color-stone-900);
      --color-on-surface-dark: var(--color-stone-300);
      --color-on-surface-dark-strong: var(--color-white);
      --color-primary-dark: var(--color-amber-400);
      --color-on-primary-dark: var(--color-black);
      --color-outline-dark: var(--color-stone-700);

      --radius-radius: var(--radius-none);
    }
  </style>

  <style>
    /* Theme Variable Mapping matching frontend.ts */
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
  </style>
</head>
<body class="bg-[var(--bg-surface)] text-[var(--text-on-surface)] font-sans antialiased min-h-screen flex flex-col justify-between selection:bg-[var(--color-primary-val)] selection:text-black">
  
  <!-- Navigation Header -->
  <header class="border-b border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] py-4 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <a href="/" class="flex items-center gap-2.5">
        <div class="px-2.5 py-1 bg-[var(--color-primary-val)] text-[var(--color-on-primary-val)] font-black text-sm uppercase tracking-wider border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          Banners
        </div>
        <span class="font-black text-lg tracking-tight text-[var(--text-on-surface-strong)] font-mono-code">PheCo.Dev</span>
      </a>

      <a href="/" class="px-3 py-1.5 bg-[var(--color-primary-val)] text-black hover:bg-amber-400 font-extrabold text-xs uppercase font-mono-code border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-1.5">
        <i data-lucide="arrow-left" class="w-4 h-4"></i>
        <span>Back to App</span>
      </a>
    </div>
  </header>

  <!-- Error Card Main Section -->
  <main class="flex-1 max-w-3xl w-full mx-auto px-4 py-16 flex items-center justify-center">
    <div class="w-full bg-[var(--bg-surface-alt)] border border-[var(--border-outline-val)] p-8 sm:p-12 text-center space-y-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] relative overflow-hidden font-mono-code">
      <!-- Glow background ambient light -->
      <div class="absolute -top-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="inline-flex items-center justify-center w-20 h-20 bg-amber-500/10 border-2 border-amber-500/30 text-amber-500 text-3xl font-black rounded-full mb-2">
        ${status}
      </div>

      <div class="space-y-3">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-[var(--text-on-surface-strong)] tracking-tight uppercase">
          ${title}
        </h1>
        <p class="text-sm text-[var(--text-on-surface)] leading-relaxed max-w-xl mx-auto opacity-90">
          ${message}
        </p>
      </div>

      <div class="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase">
        <a href="/" class="px-5 py-2.5 bg-[var(--color-primary-val)] text-black hover:bg-amber-400 font-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2">
          <i data-lucide="home" class="w-4 h-4"></i>
          <span>Return Home</span>
        </a>
        <button onclick="window.location.reload()" class="px-5 py-2.5 bg-[var(--bg-surface)] text-[var(--text-on-surface-strong)] hover:border-amber-500 border border-[var(--border-outline-val)] transition-all flex items-center gap-2">
          <i data-lucide="refresh-cw" class="w-4 h-4"></i>
          <span>Try Reloading</span>
        </button>
      </div>

      <div class="pt-6 border-t border-[var(--border-outline-val)] text-[11px] text-[var(--text-on-surface)] flex items-center justify-center gap-2">
        <span class="w-2 h-2 rounded-full bg-amber-500"></span>
        <span>Banners.Pheco.Dev Edge Router System</span>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="border-t border-[var(--border-outline-val)] bg-[var(--bg-surface-alt)] py-4 text-center font-mono-code text-xs text-[var(--text-on-surface)]">
    <span>© 2026 Banners.Pheco.Dev — All rights reserved.</span>
  </footer>

  <script>
    if (window.lucide) {
      window.lucide.createIcons();
    }
  </script>
</body>
</html>`
}
