# injectAssignment

const scriptUrl = "https://raw.githubusercontent.com/username/my-scripts/main/script.js";

// Ambil skrip dari GitHub dan eksekusi
fetch(scriptUrl)
  .then(response => response.text())  // Mengambil skrip sebagai teks
  .then(scriptContent => {
    // Menyisipkan skrip ke dalam elemen <script>
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = scriptContent;
    document.body.appendChild(scriptElement); // Skrip dijalankan

    // Setelah skrip dijalankan, kita bisa memanggil fungsi di dalamnya
    // Contoh memanggil fungsi 'greet'
    console.log(greet("John"));  // Output: "Hello, John!"

    // Memanggil fungsi lain seperti 'add'
    console.log(add(5, 3));  // Output: 8
  })
  .catch(error => {
    console.error('Gagal memuat skrip:', error);
  });