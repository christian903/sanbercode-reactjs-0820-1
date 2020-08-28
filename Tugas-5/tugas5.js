// soal 1
function halo() {
    return "Halo Sanbers!";
}
    
console.log(halo())


console.log("\n")
// soal 2
var num1 = 12;
var num2 = 4;

function kalikan(num1, num2){
    return num1 * num2;
}

var hasilKali = kalikan(num1, num2);
console.log(hasilKali)


console.log("\n")
// soal 3
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

function introduce(name, age, address, hobby){
    return "Nama saya" + " " + name + ", umur saya " + " " + age + " " + "tahun, alamat saya di" + " " + address + " " + ", dan saya punya hobby yaitu" + " " + hobby + "!";
}
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)


console.log("\n")
// soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var temp = {}

temp.nama = arrayDaftarPeserta[0];
temp.jenis_kelamin = arrayDaftarPeserta[1];
temp.hobi = arrayDaftarPeserta[2];
temp.tahun_lahir = arrayDaftarPeserta[3];

console.log(temp)


console.log("\n")
// soal 5
var buah  = [{nama: "strawberry", warna: "merah", "ada bijinya": "tidak", harga: 9000}, 
{nama: "jeruk", warna: "oranye", "ada bijinya": "ada", harga: 8000}, 
{nama: "Semangka", warna: "Hijau & Merah", "ada bijinya": "ada", harga: 10000},
{nama: "Pisang", warna: "Kuning", "ada bijinya": "tidak", harga: 5000},]

console.log(buah[0])


console.log("\n")
// soal 6
var dataFilm = []

function input(dataFilm){
    var temp = {};
    temp.nama = "mince and pance";
    temp.durasi = "30 Menit";
    temp.genre = "Romantic";
    temp.tahun = "2017";
    dataFilm.push(temp);
}

input(dataFilm)
console.log(dataFilm)
