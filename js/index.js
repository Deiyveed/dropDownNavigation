function word() {
    let enteredWord = document.getElementById("enteredWord").value;

    let magicWord = "abracadabra"

    if (enteredWord == magicWord) {
        alert ("Wow! You are right!")
    } else {
        alert ("Oh no! You are wrong!")
    }
}

function number() {
    let enteredNumber = document.getElementById("guessedNumber").value;

    let randomNumber = Math.random()

    randomNumber = randomNumber * 6

    randomNumber = Math.floor(randomNumber)

    if (enteredNumber == randomNumber) {
        alert ("Wow! You guessed right!")
    } else {
        alert ("Oh! You missed it, try again!")
    }
    
    console.log(randomNumber);
}








































// let sail = ["Rahmat", "Omolara", "Mustura", "Juwon"]

// let newSail = sail.push("Alfa Moshood")
// let newSail2 = sail.pop()
// let newSail3 = sail.shift()
// let newSail4 = sail.unshift("Mariam")

// let number = [3,9,8,5,4,6,7,1,2]

// let newNumber = number.splice(3,2,30)
// let newNumber2 = number.slice(0,2)

// console.log(sail);
// console.log(number);
// console.log(newNumber2);

// let str1 = "background-color"
// let str2 = "list-style-image"
// let str3 = "-webkit-transition"






// let newstr1 = str1.split("-")
// let newstr2 = newstr1[1].charAt(0).toUpperCase()
// let newstr3 = `${newstr1[0]}${newstr1[1]}`

// for (let i = 0; i < newstr3.length; i++) {
//     let str4 = newstr3.charAt(10).toUpperCase()
//     console.log(str4);
    
// }

// console.log(newstr1);
// console.log(newstr3);
// console.log(newstr2);
// console.log(newstr4);



