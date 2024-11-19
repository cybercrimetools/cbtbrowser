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
  // Fungsi untuk membuka modal scanner QR Code
function scanKodeQR() {
  document.getElementById("qrScannerModal").style.display = "block";
  mulaiScanner();
}

// Fungsi untuk menutup modal scanner
function tutupScanner() {
  document.getElementById("qrScannerModal").style.display = "none";
  hentikanScanner();
}

// Fungsi untuk memulai scanner
function mulaiScanner() {
  const video = document.getElementById('qrScannerVideo');
  const resultDiv = document.getElementById('qrScannerResult');

  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
      video.srcObject = stream;
      video.play();

      const canvas = document.createElement('canvas');
      const canvasContext = canvas.getContext('2d');

      setInterval(function() {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvasContext.getImageData(0, 0, canvas.width, canvas.height);
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert",
        });

        if (code) {
          resultDiv.textContent = "QR Code: " + code.data;
          // Proses kode QR (misalnya, buka URL)
          hentikanScanner();
          tutupScanner();
        }
      }, 500);
    })
    .catch(function(err) {
      resultDiv.textContent = "Error mengakses kamera: " + err;
    });
}

// Fungsi untuk menghentikan scanner
function hentikanScanner() {
  const video = document.getElementById('qrScannerVideo');
  const stream = video.srcObject;
  if (stream) {
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    video.srcObject = null;
  }
}