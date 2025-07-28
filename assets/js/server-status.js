function updateServerStatus() {
  fetch('https://api.trutienmyth.net/check_status.php')
    .then(response => response.text())
    .then(status => {
      const el = document.getElementById('sv-status');
      if (!el) return;

      status = status.trim().toLowerCase();

      if (status.includes("online")) {
        el.textContent = "Online";
        el.style.color = "green";
      } else if (status.includes("bảo trì") || status.includes("bao tri")) {
        el.textContent = "Bảo trì";
        el.style.color = "orange";
      } else if (status.includes("offline")) {
        el.textContent = "Offline";
        el.style.color = "red";
      } else {
        el.textContent = "Không xác định";
        el.style.color = "gray";
      }
    })
    .catch(error => {
      console.error("Lỗi khi kiểm tra trạng thái server:", error);
      const el = document.getElementById('sv-status');
      if (el) {
        el.textContent = "Không kết nối";
        el.style.color = "gray";
      }
    });
}

// Gọi hàm khi trang tải xong
updateServerStatus();

// (Tùy chọn) Tự động kiểm tra lại mỗi 60 giây
// setInterval(updateServerStatus, 60000);