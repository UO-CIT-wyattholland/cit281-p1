/*
    CIT 281 Project 1
    Name: Wyatt Holland
*/

// Returns a random number between min (inclusive) and max (exclusive)

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Create a for loop that uses a random number to decide how many letters are given
//Use the same function to pick random letters from the letter array

let emptyStr = ''

for (let i = 0; i < getRandomInteger(5, 25); i++) {
    console.log(emptyStr += alpha[getRandomInteger(0,26)]);
}



