// soal 1
var count = 0;
// jawaban soal 1
console.log("jawaban soal 1")
console.log("LOOPING PERTAMA")
while(count < 20) {
    count += 2
    console.log(count + " " + "-" + " " + "I love coding")
}

console.log("LOOPING KEDUA")
while(count > 0){
    console.log(count + " " + "-" + " " + "I will become a frontend developer")
    count -= 2
}
console.log("\n")

// soal 2
// jawaban soal 2
console.log("jawaban soal 2")
for(count = 1; count <= 20; count++){
    if(count % 2 == 1 && count % 3 == 0){
        console.log(count + " " + "-" + " " + "I Love Coding")
    } else if(count % 2 == 0){
        console.log(count + " " + "-" + " " + "Berkualitas")
    } else if(count % 2 == 1){
        console.log(count + " " + "-" + " " + "Santai")
    }
}
console.log("\n")


// soal 3
// jawaban soal 3
var result = "#";
console.log("jawaban soal 3")
while(result.length <=7 ){
    console.log(result);
    result = result + "#"; 
}
console.log("\n")


// soal 4
var kalimat="saya sangat senang belajar javascript";
// jawaban soal 4
console.log("jawaban soal 4")
var temp = [];
temp.push(kalimat.substring(0, 4));
temp.push(kalimat.substring(5, 11));
temp.push(kalimat.substring(12, 18));
temp.push(kalimat.substring(19, 26));
temp.push(kalimat.substring(27, 37));
console.log(temp)
console.log("\n")

// soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
// jawaban soal 5
console.log("jawaban soal 5")
daftarBuah.sort()
var i = 0;
while(daftarBuah[i] != null){
    
    console.log(daftarBuah[i])
    i += 1;
} 
