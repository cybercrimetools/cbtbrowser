// Fungsi untuk membuka modal input URL
function masukkanURL() {
    document.getElementById("urlModal").style.display = "block";
  }
  
  // Fungsi untuk menutup modal
  function closeModal() {
    document.getElementById("urlModal").style.display = "none";
  }
  
  // Fungsi untuk membuka URL di tab baru
  function bukaURL() {
    var url = document.getElementById("urlInput").value;
    window.open(url, '_blank');
    closeModal();
  }
  
  // Fungsi untuk scan kode QR
  function scanKodeQR() {
    // Minta izin akses kamera (jika diperlukan)
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
      .then(function(stream) {
        // Inisialisasi library scanner QR code (misalnya, jsQR)
        // ...
        // Arahkan kamera ke video element
        // ...
        // Mulai scanning
        // ...
        // Tangani hasil scanning
        // ...
      })
      .catch(function(err) {
        console.error("Error mengakses kamera: ", err);
      });
  }
  
  // Fungsi untuk menampilkan informasi user agent
  function useragent() {
    alert("User Agent: " + navigator.userAgent);
  }
  
  // Fungsi untuk berbagi (implementasi tergantung platform)
  function share() {
    // Implementasi berbagi di website (misalnya, menggunakan Web Share API)
    // ...
  }
  
  function rateUs() {
    // Arahkan ke halaman rating
    // ...
  }
  
  function lapor() {
    // Arahkan ke formulir pelaporan
    // ...
  }
  // ... kode sebelumnya ...

// Fungsi untuk menampilkan peringatan fullscreen
function tampilkanPeringatanFullscreen() {
    var peringatan = document.createElement("div");
    peringatan.id = "fullscreenAlert";
    peringatan.textContent = "Tekan untuk Fullscreen";
    peringatan.style.position = "fixed";
    peringatan.style.bottom = "20px";
    peringatan.style.left = "50%";
    peringatan.style.transform = "translateX(-50%)";
    peringatan.style.padding = "10px 20px";
    peringatan.style.backgroundColor = "white";
    peringatan.style.border = "1px solid #ccc";
    peringatan.style.borderRadius = "5px";
    peringatan.style.zIndex = "1000";
    peringatan.style.cursor = "pointer";
  
    peringatan.addEventListener("click", toggleFullscreen);
  
    document.body.appendChild(peringatan);
  
    // Menghilangkan peringatan setelah 3 detik
    setTimeout(function() {
      document.body.removeChild(peringatan);
    }, 3000);
  }
  
  // Menampilkan peringatan saat website dimuat
  window.onload = tampilkanPeringatanFullscreen;
  
  // ... kode sebelumnya ...