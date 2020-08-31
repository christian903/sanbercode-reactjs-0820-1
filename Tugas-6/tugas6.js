// soal 1
console.log("Jawaban Soal 1")
luas_lingkaran = () => {
    let input = 4;
    return 3.14 * (input*input) ;
  }

keliling_lingkaran = () => {
  const number = 5;
  return 2 * 3.14 * number;
}
console.log("Luas lingkaran: " + luas_lingkaran())
console.log("Keliling lingkaran: " + keliling_lingkaran())

// soal 2
console.log("\n")
console.log("Jawaban Soal 2")
let kalimat = ""
inputkalimat()

function inputkalimat(){
    const kalimat1 = 'saya'
    const kalimat2 = 'adalah'
    const kalimat3 = 'seorang'
    const kalimat4 = 'frontend'
    const kalimat5 = 'developer'
    kalimat = `${kalimat1} ${kalimat2} ${kalimat3} ${kalimat4} ${kalimat5}`
    
}

console.log(kalimat)


// soal 3
console.log("\n")
console.log("Jawaban Soal 3")
const newFunction = (firstName, lastName) =>
{
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: () => {
      console.log(firstName + " " + lastName)
      return 
    }
  }
}

newFunction("William", "Imoh").fullName()


// soal 4
console.log("\n")
console.log("Jawaban Soal 4")
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation} = newObject
console.log(firstName, lastName, destination, occupation)


// soal 5
console.log("\n")
console.log("Jawaban Soal 5")
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)

