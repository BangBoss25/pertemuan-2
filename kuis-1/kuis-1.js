let myName = ['Arie', 'Akbar', 'Ayie'];

let myNameNew = myName.map(name => name + 'w');

console.log(myNameNew);

let bio = [...myNameNew, 20];

console.log(bio);

let namaDepan, namaTengah, namaBelakang, umur;
[namaDepan, namaTengah, namaBelakang, umur] = [bio[0], bio[1], bio[2], bio[3]];

const mahasiswa = {
    namaLengkap : namaDepan + " " + namaTengah + " " + namaBelakang,
    umur : umur
}


let {namaLengkap} = mahasiswa;

function cetak(cb){
    console.log(namaLengkap);
    cb();
}

cetak(function (){
    console.log(mahasiswa.umur);
})

