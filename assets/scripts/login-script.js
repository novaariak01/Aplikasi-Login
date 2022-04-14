/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/* Comment: Membuat variable untuk semua elemen view. */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* Comment: Membuat variable untuk menyimpan informasi email dan password. */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* Comment: Menambahlan aksi klik pada button*/
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    // Comment: Mendapatkan nilai dari input email dan password pengguna.
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  
    /* Comment: Memastikan nilai input sesuai dengan nilai yang tersimpan*/

    if (email == expectedEmail && password == expectedPassword) {
     
    /* Comment: Jika nilai sesuai maka akan menuju ke halaman home. */ 
      goToHome();
    } else {

    /* Comment: Jika tidak akan muncul informasi input salah. */
      showPopUp();
    }
});
