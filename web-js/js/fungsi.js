var barang = ['Pensil', 'Buku', 'Penggaris'];
// menampilkan data
function ShowData() {
    var listBarang=document.getElementById('list-barang');
    listBarang.innerHTML = '';
    for (var i=0; i<barang.length; i++) {
        var linkHapus='<a herf="#" onclick="DelData('+i+')">Hapus</a>';
        listBarang.innerHTML+='<li>'+barang[i]+' '+linkHapus+'</li>';
    };
}
//menambah data
function AddData() {
    var input=document.getElementById('nama');
    //memasukan data ke array
    barang.push(Input.value);
    ShowData();
}

//menghapus data
function DelData(id) {
    // menghapus elemen dari indeks arrray
    barang.splice(id,1);
    ShowData();
}
//menjalankan funsi
ShowData();