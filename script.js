document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Edis Adelia' && password === '150206') {
        window.location.href = 'beranda.html';
    } else {
        alert('Username atau password salah!');
    }
});

document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const namaTransaksi = document.getElementById('namaTransaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    if (namaTransaksi && jumlah && kategori) {
        alert('Trans aksi berhasil disimpan!');
        // Logika untuk menyimpan transaksi dapat ditambahkan di sini
    } else {
        alert('Semua field harus diisi!');
    }
});