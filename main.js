//one

let saraapple = 25;
let boughtapple = 15;

let totalapple = saraapple + boughtapple;
console.log(totalapple)

//two

let johnhad = 500;
let johnspend = 200;

let leftmoney = johnhad - johnspend;
console.log(leftmoney)

// three

let perhourproduction = 120;
let totalhour = 8;

let totalmachineproduction = perhourproduction * totalhour;

console.log(totalmachineproduction)

//four

let everyrow = 12;
let totalrow = 8;
let everyrowhave =(everyrow * totalrow)

let extraplant =20;

let totalplant = (everyrowhave + extraplant)
console.log(totalplant)

//five

let rahimhave = 5;
let everybox = 10;
let totalorange = (rahimhave * everybox)

let givenorange = 12;

let leftorange = (totalorange - givenorange)
console.log(leftorange)

//six

let distance = 150;
let hour = 3;

let distanceperhour = (distance / hour)
console.log(distanceperhour)

//seven

let machine = 6;
let everydayproduction = 200;

let permachineproduction = (everydayproduction / machine)

let extramachine = 2;
let totalmachine = (machine + extramachine)

let totalproduction = (totalmachine * permachineproduction)

let unsoldproduct = 3;
let leftproduct = (totalproduction - leftproduct)
console.log(leftproduct)

//eight

totalchocolate = 120;
everypackethave = 9;

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;

function sum() {
    for (let i = 0; i <array.length; i++){
        result += array[i]
    }
    console.log(result)
}

sum()