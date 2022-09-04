if (localStorage.length == 0) {
    window.localStorage.setItem('inputnama', 'Aditya Tri Prasetyo');
    window.localStorage.setItem('inputrole', 'Mahasiswa');
    window.localStorage.setItem('inputavailability', 'Fulltime');
    window.localStorage.setItem('inputusia', '19');
    window.localStorage.setItem('inputlokasi', 'Pekanbaru, Indonesia');
    window.localStorage.setItem('inputpengalaman', '1 Tahun');
    window.localStorage.setItem('inputemail', 'adityatriprsty96@gmail.com');
}

document.getElementById('nama').innerHTML = window.localStorage.getItem('inputnama')
document.getElementById('role').innerHTML = window.localStorage.getItem('inputrole')
document.getElementById('availability').innerHTML = window.localStorage.getItem('inputavailability')
document.getElementById('usia').innerHTML = window.localStorage.getItem('inputusia')
document.getElementById('lokasi').innerHTML = window.localStorage.getItem('inputlokasi')
document.getElementById('pengalaman').innerHTML = window.localStorage.getItem('inputpengalaman')
document.getElementById('email').innerHTML = window.localStorage.getItem('inputemail')

document.getElementById('namaInput').value = window.localStorage.getItem('inputnama');
document.getElementById('roleInput').value = window.localStorage.getItem('inputrole');
document.getElementById('availabilityInput').value = window.localStorage.getItem('inputavailability');
document.getElementById('usiaInput').value = window.localStorage.getItem('inputusia');
document.getElementById('lokasiInput').value = window.localStorage.getItem('inputlokasi');
document.getElementById('pengalamanInput').value = window.localStorage.getItem('inputpengalaman');
document.getElementById('emailInput').value = window.localStorage.getItem('inputemail');

edit = function () {
    document.getElementById("formEdit").classList.remove("d-none");
}

reset = function () {
    window.localStorage.setItem('inputnama', 'Aditya Tri Prasetyo');
    window.localStorage.setItem('inputrole', 'Mahasiswa');
    window.localStorage.setItem('inputavailability', 'Fulltime');
    window.localStorage.setItem('inputusia', '19');
    window.localStorage.setItem('inputlokasi', 'Pekanbaru, Indonesia');
    window.localStorage.setItem('inputpengalaman', '1 Tahun');
    window.localStorage.setItem('inputemail', 'adityatriprsty96@gmail.com');
    location.reload();
}

submitData = function () {
    if (document.getElementById('namaInput').value == '' ||
    document.getElementById('roleInput').value == '' ||
    document.getElementById('availabilityInput').value == '' ||
    document.getElementById('usiaInput').value == '' ||
    document.getElementById('lokasiInput').value == '' ||
    document.getElementById('pengalamanInput').value == '' ||
    document.getElementById('emailInput').value == '') {
        alert('Data tidak boleh kosong!');
        return false;
    }

    if (confirm('Apakah anda yakin ingin mengubah data?')) {
        localStorage.setItem('inputnama', document.getElementById('namaInput').value);
        localStorage.setItem('inputrole', document.getElementById('roleInput').value);
        localStorage.setItem('inputavailability', document.getElementById('availabilityInput').value);
        localStorage.setItem('inputusia', document.getElementById('usiaInput').value);
        localStorage.setItem('inputlokasi', document.getElementById('lokasiInput').value);
        localStorage.setItem('inputpengalaman', document.getElementById('pengalamanInput').value);
        localStorage.setItem('inputemail', document.getElementById('emailInput').value);
        alert('Data berhasil diubah!');
    } else {
        alert('Perubahan data dibatalkan!');
    }
    document.getElementById("formEdit").classList.add("d-none");
}