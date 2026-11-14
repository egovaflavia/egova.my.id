/**
 * egova.my.id — Interactive Portfolio & GitHub Repository Explorer
 * Author: Egova Flavia (@egovaflavia)
 */

// 1. Curated Flagship & Enterprise Portfolio (Combined Public & Private Highlights)
const FEATURED_PROJECTS = [
  {
    id: 'sph-mcu',
    title: 'Ekosistem Medical Check-Up (MCU & Re-MCU) SPH',
    subtitle: 'mcu.semenpadanghospital.co.id • SPH-MCU-TAMBANG-2025 • REMCU',
    category: 'healthcare',
    categoryLabel: 'Healthcare & SIMRS',
    visibility: 'Enterprise Internal',
    status: 'Production',
    period: '2024 – 2026',
    description:
      'Sistem informasi manajemen Medical Check-Up terintegrasi untuk pasien reguler dan korporat/pertambangan di Semen Padang Hospital. Mencakup registrasi peserta massal, rekapitulasi hasil pemeriksaan multi-klinik, dan pelaporan medis digital.',
    tech: ['Laravel', 'Blade', 'JavaScript', 'SCSS', 'MySQL', 'REST API'],
    highlights: [
      'Menangani alur pemeriksaan MCU korporat & tambang berskala besar',
      'Evaluasi & Re-MCU terstruktur dengan rekam jejak klinis lengkap',
      'Cetak laporan hasil medis otomatis & dashboard monitoring real-time'
    ],
    icon: 'heart-pulse',
    accent: 'emerald'
  },
  {
    id: 'sph-bpjs-jkn',
    title: 'Larabridge SPH × BPJS & Service API JKN Mobile',
    subtitle: 'Larabridge-SPHXBPJS • Service-API-JKN-Mobile-X-SPH • BookingSPH',
    category: 'healthcare',
    categoryLabel: 'Healthcare & SIMRS',
    visibility: 'Enterprise Internal',
    status: 'Production',
    period: '2022 – 2025',
    description:
      'Middleware & layanan bridging webservice antara Sistem Informasi Rumah Sakit (Semen Padang Hospital) dengan ekosistem BPJS Kesehatan (VClaim & Antrean Online JKN Mobile) serta sistem reservasi pasien berbasis Livewire.',
    tech: ['PHP', 'Laravel', 'Livewire', 'RESTful API', 'JWT', 'BPJS Webservice'],
    highlights: [
      'Integrasi antrean online JKN Mobile & validasi kepesertaan BPJS real-time',
      'Sistem Booking Online Mandiri (MySPH-Booking-Livewire) untuk pasien',
      'Arsitektur service API berkinerja tinggi dan tahan lonjakan trafik harian'
    ],
    icon: 'network',
    accent: 'cyan'
  },
  {
    id: 'lokersumbar',
    title: 'LokerSumbar.info — Portal Karir Sumatera Barat',
    subtitle: 'lokersumbar_livewire • https://lokersumbar.info',
    category: 'platform',
    categoryLabel: 'Web Platform & SaaS',
    visibility: 'Live Public',
    liveUrl: 'https://lokersumbar.info/',
    status: 'Live',
    period: '2024 – 2026',
    description:
      'Platform publik penyedia informasi lowongan kerja terkini di wilayah Padang dan Sumatera Barat. Dibangun ulang dengan arsitektur reaktif menggunakan Laravel & Livewire untuk pencarian instan dan pengalaman baca yang cepat.',
    tech: ['Laravel', 'Livewire', 'Blade', 'Tailwind CSS', 'PHP', 'SEO Optimization'],
    highlights: [
      'Antarmuka reaktif tanpa reload halaman penuh berkat Laravel Livewire',
      'Optimasi SEO & kecepatan akses tinggi untuk ribuan pencari kerja daerah',
      'Manajemen publikasi lowongan terstruktur per kategori & kabupaten/kota'
    ],
    icon: 'briefcase',
    accent: 'amber'
  },
  {
    id: 'emr-simlab',
    title: 'EMR Klinik Utama & Sistem Informasi Laboratorium (SIMLABOR)',
    subtitle: 'EMR-KLINIK-UTAMA-PESSEL • SIMLABOR • SIMLAB',
    category: 'healthcare',
    categoryLabel: 'Healthcare & SIMRS',
    visibility: 'Enterprise Internal',
    status: 'Production',
    period: '2024 – 2025',
    description:
      'Aplikasi Rekam Medis Elektronik (Electronic Medical Record) untuk fasilitas layanan kesehatan serta Sistem Informasi Manajemen Laboratorium untuk pencatatan sampel, uji klinis, dan pelaporan hasil lab.',
    tech: ['Laravel', 'PHP', 'JavaScript', 'Blade', 'Docker', 'MySQL'],
    highlights: [
      'Digitalisasi rekam medis pasien rawat jalan & tindakan klinis secara end-to-end',
      'Manajemen alur kerja laboratorium klinis dari penerimaan sampel hingga validasi',
      'Standarisasi data rekam medis yang aman dan mudah diaudit'
    ],
    icon: 'microscope',
    accent: 'emerald'
  },
  {
    id: 'sph-web-portal',
    title: 'Portal Korporat, E-Rekrutmen & Keuangan Rumah Sakit',
    subtitle: 'website-semenpadanghospital • SPH-KAPITASI • RepoSPH-Piutang • E-SURAT',
    category: 'healthcare',
    categoryLabel: 'Healthcare & SIMRS',
    visibility: 'Enterprise Internal',
    status: 'Production',
    period: '2022 – 2026',
    description:
      'Rangkaian aplikasi pendukung operasional Semen Padang Hospital & Yayasan Semen Padang: mulai dari pembaruan website utama berbasis Vue.js & Blade, portal rekrutmen (job.semenpadanghospital.co.id), manajemen surat elektronik (E-SURAT), hingga sistem Kapitasi & Piutang.',
    tech: ['Vue.js', 'Laravel', 'Blade', 'JavaScript', 'CSS', 'REST API'],
    highlights: [
      'Modernisasi frontend portal rumah sakit dengan komponen interaktif Vue.js',
      'Otomatisasi perhitungan kapitasi yayasan & monitoring piutang korporat',
      'Digitalisasi disposisi persuratan internal melalui E-SURAT'
    ],
    icon: 'building-2',
    accent: 'blue'
  },
  {
    id: 'cms-event-platform',
    title: 'Filament 4 Custom CMS, PRO-LOMBA & Scolafest',
    subtitle: 'PRO-LOMBA • scolafest • filament_cms • filament4cms',
    category: 'platform',
    categoryLabel: 'Web Platform & SaaS',
    visibility: 'Hybrid (Public & Private)',
    repoUrl: 'https://github.com/egovaflavia/filament4cms',
    status: 'Active Development',
    period: '2025 – 2026',
    description:
      'Pengembangan starter-kit Content Management System modern menggunakan Filament v4 & Livewire, diterapkan pada sistem manajemen kompetisi/perlombaan (PRO-LOMBA) dan platform festival akademik (Scolafest).',
    tech: ['Laravel 12/13', 'Filament 4', 'Livewire 3', 'Blade', 'Tailwind CSS'],
    highlights: [
      'Arsitektur modular berbasis TALL Stack (Tailwind, Alpine, Laravel, Livewire)',
      'Panel administrasi cepat dengan manajemen role, peserta, dan penilaian lomba',
      'Kode dasar CMS dipublikasikan sebagai referensi open-source (filament4cms)'
    ],
    icon: 'layers',
    accent: 'purple'
  },
  {
    id: 'gis-spk-enterprise',
    title: 'Sistem Informasi Geografis (GIS), Aset Pemerintah & SPK',
    subtitle: 'Pro-Sistem-Informasi-Dokumentasi-Adat-GIS • PRO-SPK-MAUT • Pro-SPK-Topsis • Project-POS',
    category: 'enterprise',
    categoryLabel: 'Enterprise, GIS & SPK',
    visibility: 'Client & Academic',
    status: 'Delivered',
    period: '2021 – 2025',
    description:
      'Kumpulan solusi sistem informasi kustom: pemetaan GIS dokumentasi adat, pelaporan aset instansi pemerintah, Point of Sale (POS) & manajemen stok/distributor, serta aplikasi Sistem Pendukung Keputusan (SPK) metode MAUT dan TOPSIS.',
    tech: ['PHP', 'Laravel', 'JavaScript', 'Leaflet / GIS', 'MySQL', 'Bootstrap'],
    highlights: [
      'Implementasi algoritma komputasi SPK multi-kriteria (MAUT & TOPSIS)',
      'Visualisasi pemetaan spasial dokumentasi adat berbasis web',
      'Sistem inventori, stok, distributor, dan e-commerce terintegrasi'
    ],
    icon: 'map-pin',
    accent: 'indigo'
  },
  {
    id: 'devops-ai-homeserver',
    title: 'Docker Laravel Environment, Lerd WSL & AI Workflow',
    subtitle: 'DOCKER-SETUP-FOR-LARAVEL • WSL-LERD • vibes-plug • OpenClaw AI',
    category: 'devops',
    categoryLabel: 'DevOps & AI Tooling',
    visibility: 'Open Source',
    repoUrl: 'https://github.com/egovaflavia/DOCKER-SETUP-FOR-LARAVEL',
    status: 'Open Source',
    period: '2025 – 2026',
    description:
      'Rangkaian konfigurasi infrastruktur development modern: containerization Laravel 12 dengan Docker (Nginx, PHP-FPM, MySQL), lingkungan Podman/Lerd di WSL2, deploy via Cloudflare Tunnel ke homeserver, serta integrasi AI Agent otonom.',
    tech: ['Docker', 'Nginx', 'WSL2', 'Lerd', 'Cloudflare Tunnel', 'Python', 'AI Agents'],
    highlights: [
      'Setup Docker siap pakai untuk pengembangan Laravel tanpa instalasi lokal rumit',
      'Dokumentasi praktis deployment aman menggunakan Cloudflare Tunnel gratis',
      'Eksplorasi AI Engineering dengan Antigravity skills & OpenClaw autonomous agent'
    ],
    icon: 'server',
    accent: 'emerald'
  }
];

// 2. Curated & Enriched Public Repositories (Fallback + Rich Metadata)
const PRELOADED_PUBLIC_REPOS = [
  {
    name: 'PRO-LOMBA',
    url: 'https://github.com/egovaflavia',
    description: 'Platform manajemen kompetisi dan perlombaan berbasis Laravel & Blade reaktif.',
    language: 'Blade',
    category: 'laravel',
    updatedAt: '2026-11-13',
    stars: 0,
    isPublic: false,
    badge: 'Recent Activity'
  },
  {
    name: 'Panduan-Instalasi-Kustomisasi-Oh-My-Posh-di-WSL',
    url: 'https://github.com/egovaflavia/Panduan-Instalasi-Kustomisasi-Oh-My-Posh-di-WSL',
    description: 'Panduan lengkap instalasi dan kustomisasi prompt terminal Oh My Posh di lingkungan Windows Subsystem for Linux (WSL).',
    language: 'Shell / Docs',
    category: 'devops',
    updatedAt: '2026-11-12',
    stars: 0,
    isPublic: true
  },
  {
    name: 'WSL-LERD',
    url: 'https://github.com/egovaflavia/WSL-LERD',
    description: 'Konfigurasi dan panduan penggunaan Lerd (Podman-based PHP development environment) di atas WSL2.',
    language: 'Shell / DevOps',
    category: 'devops',
    updatedAt: '2026-11-11',
    stars: 0,
    isPublic: true
  },
  {
    name: 'KIRO-TIPS',
    url: 'https://github.com/egovaflavia/KIRO-TIPS',
    description: 'Kumpulan tips praktis, catatan workflow AI-assisted coding, dan produktivitas software engineering.',
    language: 'Markdown',
    category: 'ai',
    updatedAt: '2026-09-02',
    stars: 0,
    isPublic: true
  },
  {
    name: 'waha',
    url: 'https://github.com/egovaflavia/waha',
    description: 'WAHA - WhatsApp HTTP API (REST API) multi-engine (WEBJS, NOWEB Node.js, GOWS Go) untuk integrasi notifikasi aplikasi.',
    language: 'TypeScript',
    category: 'devops',
    updatedAt: '2026-06-24',
    stars: 0,
    isPublic: true
  },
  {
    name: 'vibes-plug',
    url: 'https://github.com/egovaflavia/vibes-plug',
    description: 'Plugin kustomisasi untuk Antigravity yang berisi berbagai skills khusus untuk menunjang pengembangan perangkat lunak, desain UI/UX, optimasi SEO, hingga strategi bisnis SaaS.',
    language: 'Python',
    category: 'ai',
    updatedAt: '2026-06-14',
    stars: 0,
    isPublic: true
  },
  {
    name: 'react-dasar',
    url: 'https://github.com/egovaflavia/react-dasar',
    description: 'Eksplorasi fundamental komponen, state, dan styling modern menggunakan React.',
    language: 'JavaScript',
    category: 'frontend',
    updatedAt: '2026-06-08',
    stars: 0,
    isPublic: true
  },
  {
    name: 'DOC-VUE-TYPESCRIPT',
    url: 'https://github.com/egovaflavia/DOC-VUE-TYPESCRIPT',
    description: 'Dokumentasi dan catatan arsitektur pengembangan aplikasi frontend modern menggunakan Vue 3 dan TypeScript.',
    language: 'TypeScript',
    category: 'frontend',
    updatedAt: '2026-06-05',
    stars: 0,
    isPublic: true
  },
  {
    name: 'DOC-LARAVEL-BOOST',
    url: 'https://github.com/egovaflavia/DOC-LARAVEL-BOOST',
    description: 'Dokumentasi optimasi performa, peningkatan workflow, dan best practices pada ekosistem Laravel modern.',
    language: 'PHP',
    category: 'laravel',
    updatedAt: '2026-06-04',
    stars: 0,
    isPublic: true
  },
  {
    name: 'backend-express',
    url: 'https://github.com/egovaflavia/backend-express',
    description: 'Layanan RESTful API backend menggunakan Node.js dan Express untuk arsitektur terpisah (decoupled frontend-backend).',
    language: 'JavaScript',
    category: 'frontend',
    updatedAt: '2026-06-02',
    stars: 0,
    isPublic: true
  },
  {
    name: 'frontend-vue',
    url: 'https://github.com/egovaflavia/frontend-vue',
    description: 'Aplikasi Single Page Application (SPA) berbasis Vue.js yang terhubung ke REST API backend.',
    language: 'Vue',
    category: 'frontend',
    updatedAt: '2026-06-02',
    stars: 0,
    isPublic: true
  },
  {
    name: 'Tutorial-Vue-Laravel',
    url: 'https://github.com/egovaflavia/Tutorial-Vue-Laravel',
    description: 'Integrasi full-stack antara komponen reaktif Vue.js dan backend Laravel.',
    language: 'Vue',
    category: 'frontend',
    updatedAt: '2026-05-29',
    stars: 0,
    isPublic: true
  },
  {
    name: 'flash-lh7n-pova-5',
    url: 'https://github.com/egovaflavia/flash-lh7n-pova-5',
    description: 'Tutorial lengkap mengganti ROM Android mulai dari unlock bootloader, install custom recovery, backup data, hingga flashing ROM dengan aman dan mudah dipahami.',
    language: 'Android / Guide',
    category: 'docs',
    updatedAt: '2026-05-20',
    stars: 0,
    isPublic: true
  },
  {
    name: 'Tutorial-Vue-Dasar',
    url: 'https://github.com/egovaflavia/Tutorial-Vue-Dasar',
    description: 'Repository ini berisi tutorial dasar Vue.js untuk pemula, mencakup konsep fundamental seperti template, data binding, directive, dan komponen.',
    language: 'Vue',
    category: 'frontend',
    updatedAt: '2026-05-09',
    stars: 0,
    isPublic: true
  },
  {
    name: 'Belajar-Membuat-AI-Assistant-dengan-OpenClaw',
    url: 'https://github.com/egovaflavia/Belajar-Membuat-AI-Assistant-dengan-OpenClaw',
    description: 'Panduan membuat AI Assistant menggunakan OpenClaw, sistem AI otonom untuk mengelola pekerjaan seperti email, riset, hingga automasi workflow secara real-time.',
    language: 'AI / Automation',
    category: 'ai',
    updatedAt: '2026-05-04',
    stars: 0,
    isPublic: true
  },
  {
    name: 'Tutorial-Vibe-Coding-Bikin-Projek-Laravel-dengan-Dockerfile-Setup',
    url: 'https://github.com/egovaflavia/Tutorial-Vibe-Coding-Bikin-Projek-Laravel-dengan-Dockerfile-Setup',
    description: 'Tutorial membuat project Laravel 12 menggunakan Docker dengan pendekatan Vibe Coding (Dockerfile, Nginx, dan MySQL) agar environment rapi dan konsisten.',
    language: 'Dockerfile',
    category: 'devops',
    updatedAt: '2026-05-03',
    stars: 0,
    isPublic: true
  },
  {
    name: 'DOCKER-SETUP-FOR-LARAVEL',
    url: 'https://github.com/egovaflavia/DOCKER-SETUP-FOR-LARAVEL',
    description: 'Environment Laravel siap pakai berbasis Docker untuk mempercepat proses development. Dilengkapi konfigurasi optimal (PHP, Nginx, MySQL, dll).',
    language: 'Dockerfile',
    category: 'devops',
    updatedAt: '2026-05-02',
    stars: 0,
    isPublic: true
  },
  {
    name: 'orthanc-ohif-dcmr',
    url: 'https://github.com/egovaflavia/orthanc-ohif-dcmr',
    description: 'Integrasi server DICOM Orthanc dan OHIF Medical Imaging Viewer untuk kebutuhan radiologi & pencitraan medis rumah sakit.',
    language: 'JavaScript',
    category: 'devops',
    updatedAt: '2026-04-30',
    stars: 0,
    isPublic: true
  },
  {
    name: 'filament4cms',
    url: 'https://github.com/egovaflavia/filament4cms',
    description: 'Starter CMS modern yang dibangun di atas Laravel dan Filament v4 untuk mempercepat pembuatan portal dan panel admin.',
    language: 'Blade',
    category: 'laravel',
    updatedAt: '2025-10-21',
    stars: 0,
    isPublic: true
  },
  {
    name: 'Panduan-Dasar-Programmer-Semen-Padang-Hospital',
    url: 'https://github.com/egovaflavia/Panduan-Dasar-Programmer-Semen-Padang-Hospital',
    description: 'Dokumentasi standar operasional, alur kerja Git, dan panduan dasar engineering untuk tim programmer di Semen Padang Hospital.',
    language: 'Markdown',
    category: 'docs',
    updatedAt: '2025-06-13',
    stars: 1,
    isPublic: true
  },
  {
    name: 'Cloudflare-Tunnel_Dokumentasi',
    url: 'https://github.com/egovaflavia/Cloudflare-Tunnel_Dokumentasi',
    description: 'Step-by-Step Deploy aplikasi Laravel & layanan lokal ke internet secara aman via Cloudflare Tunnel (Gratis) tanpa buka port router.',
    language: 'DevOps / Guide',
    category: 'devops',
    updatedAt: '2025-06-02',
    stars: 0,
    isPublic: true
  },
  {
    name: 'laravel-bpjs',
    url: 'https://github.com/egovaflavia/laravel-bpjs',
    description: 'PHP Library untuk mengakses Webservice API BPJS Kesehatan (VClaim / Aplicare) pada aplikasi berbasis Laravel.',
    language: 'PHP',
    category: 'laravel',
    updatedAt: '2023-08-17',
    stars: 0,
    isPublic: true
  },
  {
    name: 'Laravel-9-Livewire-Wizard-Multi-Step-Form',
    url: 'https://github.com/egovaflavia/Laravel-9-Livewire-Wizard-Multi-Step-Form',
    description: 'Implementasi formulir multi-tahap (Wizard Multi-Step Form) interaktif tanpa reload menggunakan Laravel & Livewire.',
    language: 'PHP',
    category: 'laravel',
    updatedAt: '2024-11-18',
    stars: 1,
    isPublic: true
  },
  {
    name: 'Laravel-9-JWT',
    url: 'https://github.com/egovaflavia/Laravel-9-JWT',
    description: 'Implementasi autentikasi RESTful API menggunakan JSON Web Token (JWT) pada framework Laravel.',
    language: 'PHP',
    category: 'laravel',
    updatedAt: '2026-04-02',
    stars: 1,
    isPublic: true
  }
];

// Language Color Mapping
const LANG_COLORS = {
  PHP: '#777bb4',
  Blade: '#f05340',
  Vue: '#41b883',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Dockerfile: '#2496ed',
  Python: '#3776ab',
  CSS: '#38bdf8',
  HTML: '#e34c26',
  default: '#10b981'
};

// State
let activePortfolioCategory = 'all';
let activeRepoCategory = 'all';
let repoSearchQuery = '';
let repositoriesData = [...PRELOADED_PUBLIC_REPOS.filter((r) => r.isPublic)];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderFeaturedProjects();
  renderRepositories();
  initPortfolioFilters();
  initRepoFilters();
  initTerminal();
  fetchLiveGitHubData();
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Theme Switcher
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('egova_theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light');
  } else {
    document.documentElement.classList.remove('light');
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light');
      localStorage.setItem('egova_theme', isLight ? 'light' : 'dark');
    });
  }
}

// Render Featured Projects
function renderFeaturedProjects() {
  const grid = document.getElementById('featured-projects-grid');
  if (!grid) return;

  const filtered =
    activePortfolioCategory === 'all'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === activePortfolioCategory);

  grid.innerHTML = filtered
    .map((project) => {
      const isPublicLink = project.liveUrl || project.repoUrl;
      const actionUrl = project.liveUrl || project.repoUrl || '#';
      const actionLabel = project.liveUrl
        ? 'Kunjungi Website'
        : project.repoUrl
          ? 'Lihat Source Code'
          : 'Enterprise / Private Repo';

      const badgeColor =
        project.visibility === 'Live Public'
          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
          : project.visibility === 'Open Source'
            ? 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
            : 'bg-amber-500/15 text-amber-400 border-amber-500/30';

      return `
      <article class="glass-card rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group">
        <div>
          <!-- Top Meta -->
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
              <i data-lucide="${project.icon}" class="w-3.5 h-3.5 text-emerald-400"></i>
              ${project.categoryLabel}
            </span>
            <span class="text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${badgeColor}">
              ${project.visibility}
            </span>
          </div>

          <!-- Title & Subtitle -->
          <h3 class="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mb-1">
            ${project.title}
          </h3>
          <p class="text-xs font-mono text-slate-400 mb-3 truncate" title="${project.subtitle}">
            ${project.subtitle}
          </p>

          <!-- Description -->
          <p class="text-sm text-slate-300 leading-relaxed mb-4">
            ${project.description}
          </p>

          <!-- Key Highlights -->
          <ul class="space-y-1.5 mb-5 border-t border-slate-800/80 pt-3">
            ${project.highlights
              .map(
                (item) => `
              <li class="flex items-start gap-2 text-xs text-slate-300">
                <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${item}</span>
              </li>
            `
              )
              .join('')}
          </ul>
        </div>

        <!-- Bottom Tech & Link -->
        <div class="pt-3 border-t border-slate-800/80 flex flex-col gap-3">
          <div class="flex flex-wrap gap-1.5">
            ${project.tech
              .map(
                (t) => `
              <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-800">
                ${t}
              </span>
            `
              )
              .join('')}
          </div>

          <div class="flex items-center justify-between pt-1">
            <span class="text-xs font-mono text-slate-400">${project.period}</span>
            ${
              isPublicLink
                ? `<a href="${actionUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
                    <span>${actionLabel}</span>
                    <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                  </a>`
                : `<span class="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <i data-lucide="lock" class="w-3 h-3 text-amber-400"></i>
                    <span>${actionLabel}</span>
                  </span>`
            }
          </div>
        </div>
      </article>
    `;
    })
    .join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Portfolio Category Filter Listener
function initPortfolioFilters() {
  const buttons = document.querySelectorAll('.portfolio-filter-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activePortfolioCategory = btn.getAttribute('data-category') || 'all';
      renderFeaturedProjects();
    });
  });
}

// Categorize any live GitHub repo automatically
function inferRepoCategory(repo) {
  const text = `${repo.name} ${repo.description || ''} ${repo.language || ''}`.toLowerCase();
  if (
    text.includes('docker') ||
    text.includes('wsl') ||
    text.includes('lerd') ||
    text.includes('cloudflare') ||
    text.includes('orthanc') ||
    text.includes('waha') ||
    text.includes('posh')
  ) {
    return 'devops';
  }
  if (text.includes('openclaw') || text.includes('vibes') || text.includes('ai') || text.includes('kiro')) {
    return 'ai';
  }
  if (text.includes('vue') || text.includes('react') || text.includes('express') || text.includes('frontend')) {
    return 'frontend';
  }
  if (
    text.includes('laravel') ||
    text.includes('livewire') ||
    text.includes('filament') ||
    text.includes('bpjs') ||
    text.includes('php') ||
    text.includes('blade')
  ) {
    return 'laravel';
  }
  return 'docs';
}

// Render Public Repositories
function renderRepositories() {
  const grid = document.getElementById('public-repos-grid');
  const countEl = document.getElementById('repo-showing-count');
  if (!grid) return;

  const filtered = repositoriesData.filter((repo) => {
    const matchesCat = activeRepoCategory === 'all' || repo.category === activeRepoCategory;
    const q = repoSearchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      repo.name.toLowerCase().includes(q) ||
      (repo.description && repo.description.toLowerCase().includes(q)) ||
      (repo.language && repo.language.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  if (countEl) {
    countEl.textContent = `Menampilkan ${filtered.length} repositori publik pilihan`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full glass-card rounded-2xl p-10 text-center">
        <p class="text-slate-300 font-medium mb-1">Tidak ada repositori yang cocok dengan pencarian "${repoSearchQuery}"</p>
        <p class="text-xs text-slate-400">Coba kata kunci lain seperti Laravel, Vue, Docker, WSL, atau BPJS.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((repo) => {
      const lang = repo.language || 'Markdown';
      const dotColor = LANG_COLORS[lang] || LANG_COLORS.default;
      return `
      <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="glass-card rounded-xl p-5 flex flex-col justify-between group block">
        <div>
          <div class="flex items-start justify-between gap-2 mb-2.5">
            <div class="flex items-center gap-2 min-w-0">
              <i data-lucide="book-marked" class="w-4 h-4 text-emerald-400 shrink-0"></i>
              <h4 class="font-mono text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors truncate" title="${repo.name}">
                ${repo.name}
              </h4>
            </div>
            <i data-lucide="external-link" class="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-4">
            ${repo.description}
          </p>
        </div>

        <div class="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800/70">
          <span class="inline-flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${dotColor}"></span>
            <span>${lang}</span>
          </span>
          <div class="flex items-center gap-3">
            ${
              repo.stars > 0
                ? `<span class="inline-flex items-center gap-1 text-amber-400">
                    <i data-lucide="star" class="w-3 h-3 fill-amber-400"></i>
                    ${repo.stars}
                  </span>`
                : ''
            }
            <span>Update: ${repo.updatedAt}</span>
          </div>
        </div>
      </a>
    `;
    })
    .join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Repo Search & Category Filter Listeners
function initRepoFilters() {
  const searchInput = document.getElementById('repo-search-input');
  const catButtons = document.querySelectorAll('.repo-filter-btn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      repoSearchQuery = e.target.value || '';
      renderRepositories();
    });
  }

  catButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      catButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeRepoCategory = btn.getAttribute('data-repo-cat') || 'all';
      renderRepositories();
    });
  });
}

// Fetch Live GitHub Stats & Merge with Enriched Descriptions
async function fetchLiveGitHubData() {
  const syncBadge = document.getElementById('github-sync-status');
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/egovaflavia'),
      fetch('https://api.github.com/users/egovaflavia/repos?sort=updated&per_page=30')
    ]);

    if (userRes.ok) {
      const user = await userRes.json();
      const repoCountEl = document.getElementById('stat-public-repos');
      const followersEl = document.getElementById('stat-followers');
      if (repoCountEl && user.public_repos) {
        repoCountEl.textContent = `${user.public_repos}+`;
      }
      if (followersEl && user.followers) {
        followersEl.textContent = user.followers;
      }
    }

    if (reposRes.ok) {
      const liveRepos = await reposRes.json();
      const preloadedMap = new Map(PRELOADED_PUBLIC_REPOS.map((r) => [r.name.toLowerCase(), r]));
      const merged = [];
      const seen = new Set();

      liveRepos.forEach((r) => {
        if (r.name === 'TestGit' || r.name === 'egovaflavia') return;
        const existing = preloadedMap.get(r.name.toLowerCase());
        const item = {
          name: r.name,
          url: r.html_url,
          description:
            r.description ||
            (existing && existing.description) ||
            `Repositori pengembangan perangkat lunak & dokumentasi oleh @egovaflavia (${r.language || 'Code'}).`,
          language: r.language || (existing && existing.language) || 'Docs / Config',
          category: (existing && existing.category) || inferRepoCategory(r),
          updatedAt: r.updated_at ? r.updated_at.slice(0, 10) : '2026',
          stars: r.stargazers_count || 0
        };
        merged.push(item);
        seen.add(r.name.toLowerCase());
      });

      PRELOADED_PUBLIC_REPOS.filter((r) => r.isPublic).forEach((r) => {
        if (!seen.has(r.name.toLowerCase())) {
          merged.push(r);
        }
      });

      repositoriesData = merged.slice(0, 24);
      renderRepositories();

      if (syncBadge) {
        syncBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span> Live Synced with GitHub API`;
      }
    }
  } catch (err) {
    // Graceful fallback to preloaded repos
    if (syncBadge) {
      syncBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-cyan-400"></span> Snapshot Data Ready`;
    }
  }
}

// 3. Interactive Homeserver Terminal Emulator
function initTerminal() {
  const outputEl = document.getElementById('terminal-output');
  const inputEl = document.getElementById('terminal-input');
  const formEl = document.getElementById('terminal-form');
  const quickBtns = document.querySelectorAll('.term-cmd-btn');

  if (!outputEl || !inputEl || !formEl) return;

  const COMMANDS = {
    help: () => [
      `<span class="text-emerald-400 font-semibold">Perintah yang tersedia di egova@homeserver:</span>`,
      `  <span class="text-cyan-400">whoami</span>      — Profil singkat & bio Egova Flavia`,
      `  <span class="text-cyan-400">stack</span>       — Tech stack utama (Backend, Frontend, DevOps)`,
      `  <span class="text-cyan-400">sph</span>         — Ekosistem proyek di Semen Padang Hospital`,
      `  <span class="text-cyan-400">repos</span>       — Statistik repositori GitHub (@egovaflavia)`,
      `  <span class="text-cyan-400">homeserver</span>  — Info deployment domain egova.my.id`,
      `  <span class="text-cyan-400">contact</span>     — Tautan kontak, website & media sosial`,
      `  <span class="text-cyan-400">clear</span>       — Bersihkan layar terminal`
    ],
    whoami: () => [
      `<span class="text-emerald-400 font-semibold">Egova Flavia (@egovaflavia)</span>`,
      `  Role     : Full-Stack Web Developer & Healthcare IT Engineer`,
      `  Instansi : Semen Padang Hospital (Padang, Sumatera Barat)`,
      `  Project  : <a href="https://lokersumbar.info" target="_blank" class="text-cyan-400 underline">https://lokersumbar.info</a>`,
      `  Moto     : "Agak-agak kiro-kiro"`
    ],
    stack: () => [
      `<span class="text-emerald-400 font-semibold">Core Tech Stack:</span>`,
      `  • Backend  : PHP 8.x, Laravel (v9–v13), Livewire 3, Filament 4, Node.js/Express`,
      `  • Frontend : Vue.js 3, TypeScript, React, Alpine.js, Tailwind CSS, Bootstrap`,
      `  • MedTech  : Bridging BPJS VClaim & JKN Mobile, EMR, SIMLAB, Orthanc DICOM`,
      `  • DevOps   : Docker, Lerd (Podman), WSL2, Nginx, Cloudflare Tunnel, AI Agents`
    ],
    sph: () => [
      `<span class="text-emerald-400 font-semibold">Proyek Sistem Informasi Kesehatan & Rumah Sakit:</span>`,
      `  [1] Medical Check-Up (mcu.semenpadanghospital.co.id & MCU Tambang)`,
      `  [2] Bridging BPJS Kesehatan & Service API JKN Mobile`,
      `  [3] MySPH Online Booking (Livewire) & Portal Korporat Vue.js`,
      `  [4] EMR Klinik Utama Pessel & Sistem Informasi Laboratorium (SIMLABOR)`,
      `  [5] Aplikasi Kapitasi Yayasan Semen Padang, Piutang & E-Surat`
    ],
    repos: () => [
      `<span class="text-emerald-400 font-semibold">Ringkasan GitHub @egovaflavia:</span>`,
      `  • Total Public Repos  : 135+ repositori (Open Source, Docker, Tutorial)`,
      `  • Enterprise / Private: 60+ repositori (SIMRS, Portal, SPK, GIS, POS)`,
      `  • Aktif sejak         : Mei 2019`,
      `  • Kunjungi            : <a href="https://github.com/egovaflavia" target="_blank" class="text-cyan-400 underline">https://github.com/egovaflavia</a>`
    ],
    homeserver: () => [
      `<span class="text-emerald-400 font-semibold">Status Node: egova.my.id</span>`,
      `  • Host      : Self-Hosted Homeserver (Padang, ID)`,
      `  • Runtime   : Docker Container (nginx:alpine) + Cloudflare Tunnel`,
      `  • Status    : <span class="text-emerald-400">ONLINE (200 OK)</span>`
    ],
    contact: () => [
      `<span class="text-emerald-400 font-semibold">Hubungi Egova Flavia:</span>`,
      `  • GitHub   : <a href="https://github.com/egovaflavia" target="_blank" class="text-cyan-400 underline">github.com/egovaflavia</a>`,
      `  • Website  : <a href="https://lokersumbar.info" target="_blank" class="text-cyan-400 underline">lokersumbar.info</a>`,
      `  • X/Twitter: <a href="https://x.com/egovaflavia" target="_blank" class="text-cyan-400 underline">@egovaflavia</a>`,
      `  • Domain   : <a href="https://egova.my.id" class="text-cyan-400 underline">egova.my.id</a>`
    ]
  };

  function runCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      outputEl.innerHTML = '';
      return;
    }

    const promptLine = `<div class="mt-2"><span class="text-emerald-400">egova@homeserver</span>:<span class="text-cyan-400">~</span>$ <span class="text-white">${rawCmd}</span></div>`;
    let responseLines = [];

    if (COMMANDS[cmd]) {
      responseLines = COMMANDS[cmd]();
    } else {
      responseLines = [
        `<span class="text-rose-400">bash: ${cmd}: command not found.</span> Ketik <span class="text-cyan-400">help</span> untuk daftar perintah.`
      ];
    }

    outputEl.insertAdjacentHTML(
      'beforeend',
      `${promptLine}<div class="pl-2 mt-1 space-y-0.5 text-slate-300">${responseLines.map((l) => `<div>${l}</div>`).join('')}</div>`
    );
    outputEl.scrollTop = outputEl.scrollHeight;
  }

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = inputEl.value;
    inputEl.value = '';
    runCommand(val);
  });

  quickBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) runCommand(cmd);
    });
  });
}
