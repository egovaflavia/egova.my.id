# Egova Flavia — Portfolio & Landing Page (`egova.my.id`)

Landing page profil resmi **Egova Flavia (`@egovaflavia`)** yang disusun berdasarkan analisis lebih dari **190+ repositori GitHub** (135+ repositori publik & 60+ sistem informasi privat/enterprise).

Dirancang ringan menggunakan **HTML5, Tailwind CSS, dan Vanilla JavaScript**, siap di-deploy ke **aaPanel (Pure Static)** maupun **Docker + Nginx Alpine** di **Homeserver (`egova.my.id`)**.

---

## ✨ Fitur Utama

1. **Hero & Interactive Homeserver Terminal (`egova@homeserver:~$`)**
   - Menampilkan identitas, bio *"Agak-agak kiro-kiro"*, afiliasi **Semen Padang Hospital**, dan portal **LokerSumbar.info**.
   - Dilengkapi emulator terminal interaktif (`whoami`, `stack`, `sph`, `repos`, `homeserver`, `contact`, `clear`).
2. **Proyek Unggulan & Sistem Informasi (Gabungan Portfolio Produksi)**
   - **Healthcare & SIMRS**: Medical Check-Up (`mcu.semenpadanghospital.co.id`, MCU Tambang, Re-MCU), Bridging BPJS Kesehatan & Service API JKN Mobile (`Larabridge-SPHXBPJS`), EMR Klinik Utama Pessel, SIMLABOR, Portal Korporat Vue.js, Kapitasi & Piutang.
   - **Web Platform & CMS**: `LokerSumbar.info` (Livewire), `PRO-LOMBA`, `Scolafest`, `filament4cms`.
   - **Enterprise, GIS & SPK**: GIS Dokumentasi Adat, Pelaporan Aset Pemerintah, POS, serta SPK metode MAUT & TOPSIS.
   - **DevOps & AI Tooling**: `DOCKER-SETUP-FOR-LARAVEL`, `WSL-LERD`, Cloudflare Tunnel, `vibes-plug` & OpenClaw AI.
3. **Eksplorasi Repositori Publik (Live Sync GitHub API + Offline Fallback)**
   - Terhubung secara otomatis ke `https://api.github.com/users/egovaflavia/repos` untuk menyinkronkan jumlah repo, followers, dan update terbaru, dilengkapi data fallback terkurasi.
   - Mendukung pencarian instan dan filter kategori (*Laravel & PHP*, *Vue & Frontend*, *Docker, WSL & DevOps*, *AI & Vibe Coding*, *Panduan & Docs*).
4. **Dark & Light Mode**
   - Tema gelap khas terminal/homeserver secara default dengan tombol pengalih ke mode terang.

---

## 🚀 Cara Deploy di aaPanel (Paling Praktis)

Karena proyek ini murni **Static HTML + CSS + JS**, Anda bisa langsung memasangnya di **aaPanel** tanpa perlu menjalankan container tambahan:

1. **Buat Website di aaPanel:**
   - Buka menu **Website** → klik **Add site**.
   - **Domain name:** `egova.my.id` (tambahkan juga `www.egova.my.id` jika perlu).
   - **PHP Version:** pilih **Pure Static**.
   - Klik **Submit**.
2. **Clone dari GitHub via Terminal aaPanel:**
   - Buka menu **Terminal** di aaPanel (atau via SSH), lalu jalankan perintah berikut:
     ```bash
     cd /www/wwwroot/egova.my.id
     rm -rf index.html 404.html
     git clone https://github.com/egovaflavia/egova.my.id.git .
     chown -R www:www /www/wwwroot/egova.my.id
     ```
3. **Update di Kemudian Hari:**
   - Setiap kali ada perubahan di repository GitHub ini, cukup jalankan:
     ```bash
     cd /www/wwwroot/egova.my.id && git pull
     ```

---

## 🐳 Alternatif: Deploy Menggunakan Docker Compose

Jika ingin menjalankan di dalam container terpisah:

```bash
docker compose up -d --build
```

Secara default aplikasi akan berjalan di port `8085` (`http://localhost:8085`).

---

## 📁 Struktur Direktori

```text
.
├── index.html              # Halaman utama landing page egova.my.id
├── assets/
│   ├── css/
│   │   └── style.css       # Custom styling, glassmorphism & dark/light theme
│   └── js/
│       └── app.js          # Data proyek, GitHub API sync, filter & terminal emulator
├── Dockerfile              # Image ringan berbasis nginx:stable-alpine
├── docker-compose.yml      # Konfigurasi container untuk homeserver + Cloudflare Tunnel
├── nginx.conf              # Konfigurasi Nginx (gzip, cache, security headers, /healthz)
└── README.md               # Dokumentasi penggunaan dan deployment aaPanel / Docker
```
