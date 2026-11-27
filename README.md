
# Playwright Automation Testing - SauceDemo

## Deskripsi Proyek
Proyek ini merupakan implementasi otomasi pengujian aplikasi web SauceDemo menggunakan Playwright. Pengujian mencakup fitur login, belanja, keranjang, checkout, pengurutan produk, dan pengujian beberapa jenis pengguna.

## Teknologi yang Digunakan
- JavaScript
- Node.js
- Playwright Test
- Git dan GitHub
- GitHub Actions

## Browser yang Didukung
Pengujian dilakukan menggunakan tiga browser:
- Chromium
- Firefox
- WebKit

## Instalasi

1. Clone repository:
   ```bash
   git clone https://github.com/salwaaulia17/pw-saucedemo-6304240037.git
   ```

2. Masuk ke folder proyek:
   ```bash
   cd pw-saucedemo-6304240037
   ```

3. Instal dependencies:
   ```bash
   npm install
   ```

4. Instal browser Playwright:
   ```bash
   npx playwright install chromium firefox webkit
   ```

## Menjalankan Pengujian

Menjalankan seluruh test:
```bash
npx playwright test
```

Menjalankan test pada browser tertentu:
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Menampilkan HTML Report:
```bash
npx playwright show-report
```

## Struktur Folder

```text
pw-saucedemo/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── tests/
│   ├── fixtures.js
│   ├── 01-login-pertama.spec.js
│   ├── checkout.spec.js
│   ├── login.spec.js
│   └── problem-user.spec.js
├── playwright.config.js
├── package.json
└── README.md
```

## Continuous Integration (CI)

Proyek ini menggunakan GitHub Actions untuk menjalankan pengujian otomatis ketika terjadi push ke branch `main` atau `tugas-individu`, serta ketika Pull Request dibuat.

Pengujian dijalankan pada Chromium, Firefox, dan WebKit menggunakan matrix strategy.

HTML Report disimpan sebagai artifact dengan nama berbeda untuk setiap browser.

## Akun Pengujian

Website: https://www.saucedemo.com/

Username yang digunakan:
- standard_user
- problem_user

Password menggunakan `secret_sauce` melalui environment variable `SAUCE_PASSWORD`.

