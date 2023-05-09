
$(document).ready(function() {
    $(".product-item").hover(function() {
      $(this).animate({ marginTop: "-=10px" }, 200);
    }, function() {
      $(this).animate({ marginTop: "0px" }, 200);
    });
  });
  
// mendapatkan elemen-elemen yang dibutuhkan
const jumlahBunga = document.getElementById('jumlah_bunga');
const totalHarga = document.getElementById('total_harga');
const jumlahInput = document.getElementById('jumlah');
const metodePembayaran = document.getElementById('metode_pembayaran');

// membuat fungsi untuk menghitung total harga
function hitungTotalHarga() {
  const hargaPerBunga = 100000;
  const jumlah = jumlahInput.value;
  const total = hargaPerBunga * jumlah;
  jumlahBunga.textContent = jumlah;
  totalHarga.textContent = total;
}

// memanggil fungsi hitungTotalHarga ketika nilai pada jumlah input berubah
jumlahInput.addEventListener('change', hitungTotalHarga);

// memanggil fungsi hitungTotalHarga ketika nilai pada metode pembayaran berubah
metodePembayaran.addEventListener('change', hitungTotalHarga);
