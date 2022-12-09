const data = [];

function tampil() {
    const tabel = document.getElementById('tabel');
    tabel.innerHTML = '<tr><th>NO</th><th>Nama</th><th>Action</th></tr>';
    for (let i = 0; i < data.length; i++){
        const edit = "<button class='btn-edit' href='#' onclick='edit(" + i + ")'>Edit</button>";
        const hapus = "<button class='btn-hapus' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;      
        tabel.innerHTML += '<tr><td>' + j + '</td><td>' + data[i] + '</td><td>' + edit + '' + hapus + '</tr>';
        
    }   
}

function tambah() {
    const input = document.querySelector('input[name=nama]');
    data.push(input.value);
    tampil();
    input.value = "";
}


function edit(id) {
    const update = prompt('Edit', data[id]); 
    data[id] = update;
    tampil();
}

function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();