# injectAssignment
1. **Buka Console, Pastekan ini: **

```
const scriptUrl = "https://raw.githubusercontent.com/rifkibps/injectAssignment/main/script.js";

fetch(scriptUrl)
  .then(response => response.text())  // Mengambil skrip sebagai teks
  .then(scriptContent => {
    // Menyisipkan skrip ke dalam elemen <script>
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = scriptContent;
    document.body.appendChild(scriptElement);

  })
  .catch(error => {
    console.error('Gagal memuat skrip:', error);
  });
```

2. **Jalankan Execute: **

```
console.log(execute)
```