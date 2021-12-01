let person = {
    firstname : "Rungthiwa",
    lasname : "Choiaeka",
    age : 22,
    sex : "Female",
    fullname : function () {
        return this.firstname + " " + this.lasname
    },
}

console.log(person)

person.age = 18
console.log(person)

const p = person
p.age = 10
console.log(p)

console.log(person.fullname())

// destructuring
const {firstname,lasname,age,sex} = person
console.log(firstname)

const {} = person
console.log(firstname)

// string
const S1 = "Hello world !! "
const S2 = "My name is: "
const name1 = "Rungthiwa"

let conCat = S1 + S2 + name1
console.log(conCat)
conCat = `I 
        Love 
        it. ${S2} ${name1}
        `
console.log(conCat)

// Spead OP (...)
const A1 = [2,3,4]
const A2 = [5,6,7]
let comArr = [A1, A2]
console.log(comArr)
comArr = [...A1,...A2]
console.log(comArr)

sum = (...comArr) =>{
    let total = ""
    for( val of comArr) {
        total += val
        return total
    }
}
console.log(sum(comArr))