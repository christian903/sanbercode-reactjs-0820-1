// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";
// jawaban soal 1
console.log(kataPertama + " " + kataKedua + " " + kataKetiga + " " + kataKeempat.toUpperCase())


// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
// jawaban soal 2
var kataPertama = Number(kataPertama);
var kataKedua = Number(kataKedua);
var kataKetiga = Number(kataKetiga);
var kataKeempat = Number(kataKeempat);

console.log(kataPertama + kataKedua + kataKetiga + kataKeempat)


// soal 3
var kalimat = 'wah javascript itu keren sekali'; 

// jawaban soal 3
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 15); 
var kataKetiga = kalimat.substring(15, 19); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(24, 31); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


// soal 4
var nilai = 65;

// jawaban soal 4
if ( nilai >= 80 ) {
    console.log("indeksnya A")
} else if ( nilai <= 70 && nilai < 80 ) {
    console.log("indeksnya B")
} else if( nilai >= 60 && nilai < 70 ){
    console.log("indeksnya C")
} else if( nilai >= 50 && nilai < 60 ){
    console.log("indeksnya D")
} else if( nilai < 50 ){
    console.log("indeksnya E")
}


// soal 5
var tanggal = 19;
var bulan = 9;
var tahun = 1999;
// jawaban soal 5
switch(bulan) {
    case 9:   { 
        console.log( tanggal.toString() + " " + "September" + " " + tahun.toString() ); 
        break; }
    default:  { console.log('Tidak terjadi apa-apa'); }
}