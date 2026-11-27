
import { test, expect, PASSWORD } from './fixtures.js';

const users = [
  {
    username: 'standard_user',
    expectedToFail: false,
  },
  {
    username: 'problem_user',
    expectedToFail: true,
  },
];

for (const user of users) {
  test(`checkout setelah sort harga termurah: ${user.username}`, async ({
    page,
    loginPage,
    inventoryPage,
    cartPage,
    checkoutPage,
  }) => {
    // Problem user diperkirakan mengalami bug pada alur ini.
    test.fail(
      user.expectedToFail,
      'Problem user diperkirakan mengalami masalah pada proses pengurutan atau checkout.'
    );

    // Login
    await loginPage.goto();
    await loginPage.login(user.username, PASSWORD);

    // Pastikan berhasil masuk ke halaman produk
    await expect(inventoryPage.title).toHaveText('Products');

    // Urutkan harga dari termurah ke termahal
    await inventoryPage.sortBy('lohi');

    // Pilih produk pertama
    const firstProduct = await inventoryPage.itemNames.first().textContent();
    await inventoryPage.addToCart(firstProduct.trim());

    // Buka keranjang
    await inventoryPage.openCart();
    await expect(cartPage.items).toHaveCount(1);

    // Lanjut ke checkout
    await cartPage.checkout();

    // Isi informasi pembeli
    await checkoutPage.fillInformation({
      firstName: 'Salwa',
      lastName: 'Aulia',
      postalCode: '28711',
    });

    // Pastikan sampai halaman Overview
    await expect(page).toHaveURL(/checkout-step-two.html/);
    await expect(page.getByTestId('title')).toHaveText('Checkout: Overview');
  });
}
