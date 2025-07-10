function openLogin() {
  document.getElementById("loginPopup").style.display = "flex";
}

function closeLogin() {
  document.getElementById("loginPopup").style.display = "none";
}
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah reload halaman

  // Ambil nilai input (bisa dipakai untuk validasi nanti)
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Contoh validasi sederhana (opsional)
  if (username === "admin" && password === "admin123") {
    // Redirect ke halaman lain
    window.location.href = "dashboard.html"; // Ganti dengan halaman tujuanmu
  } else {
    alert("Username atau password salah!");
  }
});
