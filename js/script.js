// script.js
document.addEventListener("DOMContentLoaded", function () {
  // 1. Load header.html ke dalam #header-container
  fetch("header.html")
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("header-container").innerHTML = html;

      // Setelah header dimuat, aktifkan tombol hamburger
      setupHamburgerToggle();
    });

  // Tampilkan waktu awal (jika ada elemen #currentTime)
  showCurrentTime();
});

// Fungsi toggle menu di mobile
function setupHamburgerToggle() {
  const navToggle = document.getElementById("nav-toggle");
  const navDropdown = document.getElementById("nav-dropdown");

  if (navToggle && navDropdown) {
    navToggle.addEventListener("click", function () {
      navDropdown.classList.toggle("hidden");
    });
  }
}

// Tampilkan waktu sekarang (dipanggil saat DOM ready)
function showCurrentTime() {
  const timeSpan = document.getElementById("currentTime");
  if (timeSpan) {
    const now = new Date().toLocaleString();
    timeSpan.textContent = now;
  }
}

// Fungsi submit form Message Us
function handleSubmit(event) {
  event.preventDefault();

  // Ambil input dari form
  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const genderEl = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById("messageText").value;

  const gender = genderEl ? genderEl.value : "";

  // Tampilkan output di box
  document.getElementById("outputName").textContent = name;
  document.getElementById("outputDob").textContent = dob;
  document.getElementById("outputGender").textContent = gender;
  document.getElementById("outputMessage").textContent = message;

  // Tampilkan nama di header "Hi, ..."
  const userNameSpan = document.getElementById("userName");
  if (userNameSpan) {
    userNameSpan.textContent = name;
  }

  // Update waktu submit
  const now = new Date().toLocaleString();
  const timeSpan = document.getElementById("currentTime");
  if (timeSpan) {
    timeSpan.textContent = now;
  }

  return false;
}
