function handleBreakpointChange(event) {
  const navItem = document.getElementById("nav-item");
  if (event.matches) {
    // Kode yang akan dijalankan saat lebar viewport mencapai 768px atau lebih
    navItem.classList.remove("hidden");
    navItem.classList.add("inline-flex");
  } else {
    // Kode yang akan dijalankan saat lebar viewport kurang dari 768px
    navItem.classList.remove("inline-flex");
    navItem.classList.add("hidden");
  }
}

// Buat objek MediaQueryList untuk breakpoint
const mediaQueryList = window.matchMedia("(min-width:1024px)");

// Tambahkan listener untuk perubahan media query
mediaQueryList.addEventListener("change", handleBreakpointChange);

// Jalankan fungsi untuk setelan awal
handleBreakpointChange(mediaQueryList);
