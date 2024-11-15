function sambutPengunjung() {
    const nama = document.getElementById("nama").value;
    const pesan = nama 
        ? `Halo, ${nama}! Selamat Datang di Jelajahi Indonesia!` 
        : "Silakan masukkan nama dulu dong CS.";
    document.getElementById("pesanSambutan").innerHTML = pesan;
  }
  
// Data destinasi wisata yang akan ditambahkan ke tabel
const destinations = [
    { name: 'Pantai Kuta', location: 'Bali', type: 'Pantai' },
    { name: 'Candi Borobudur', location: 'Magelang', type: 'Sejarah' },
    { name: 'Raja Ampat', location: 'Papua', type: 'Alam' }
];

// Menambahkan data ke dalam tabel hanya jika belum ada
const tableBody = document.querySelector("#about table tbody");

// Fungsi untuk mengecek apakah data sudah ada di tabel
function isDestinationInTable(name) {
    const rows = tableBody.getElementsByTagName("tr");
    for (let row of rows) {
        if (row.cells[0].textContent === name) {
            return true;
        }
    }
    return false;
}

// Menambahkan data ke tabel jika belum ada
destinations.forEach(dest => {
    if (!isDestinationInTable(dest.name)) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${dest.name}</td>
            <td>${dest.location}</td>
            <td>${dest.type}</td>
        `;
        tableBody.appendChild(row);
    }
});

  const image = document.getElementById('exploreImage');
  image.addEventListener('mouseover', function() {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.3s ease";
  });
  image.addEventListener('mouseout', function() {
    image.style.transform = "scale(1)";
  });
  