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
   git clone https://github.com/salwaaulia17/pw-saucedemo-6304240037.git

2. Masuk ke folder proyek:
   cd pw-saucedemo-6304240037

3. Instal dependencies:
   npm install

4. Instal browser:
   npx playwright install chromium firefox webkit

## Menjalankan Pengujian
Menjalankan seluruh test:
   npx playwright test

Menampilkan HTML Report:
   npx playwright show-report

## Continuous Integration (CI)
Proyek ini menggunakan GitHub Actions untuk menjalankan pengujian otomatis pada Chromium, Firefox, dan WebKit.

## Akun Pengujian
Website: https://www.saucedemo.com/

Username:
- standard_user
- problem_user

Password: secret_sauce
