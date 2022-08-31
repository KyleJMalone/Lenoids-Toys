// Data Structure//
console.log("toys")
const Lego = {
    id: 1,
    name: "Lego",
    maker: " Ole Kirk Christiansen",
    price: 89.99,
    weight: 2.2
}

const actionFigures = {
    id: 2,
    name: "Action Figures",
    maker: "Stan Weston",
    price: 20.99,
    weight: 1.0
}

const boardGames ={
    id: 3,
    name: "Dnd",
    maker: "Gary Gygax and Dave Arneson.",
    price: 13.29,
    weight: 1.5
}

// Array of Objects//
const toys=[Lego, actionFigures, boardGames];
console.log(toys);

//Displaying Toy Properties//
for (const toy of toys) {
    console.log(toy)
}
//adding new toys//
const Videogames ={
    id:4,
    name:"Nintendo Switch Games",
    price: 59.99,
    weight:1.0,
}
const Nerfguns ={
    id:5,
    name:"Nerf Guns",
    price:30.00,
    weight:2.0,
}
toys.push(Videogames)
toys.push(Nerfguns)
console.log(toys)
//Iteration and String Interlopation//
for (const toy of toys){
const interpolatedString = `The price of ${toy.name} is ${toy.price}`
console.log(interpolatedString)
}
// Logic in Loops//
for (const toy of toys) {
    toy.price=toy.price + 0.05
console.log (`The ${toy.name} prices have increased, They now cost ${toy.price}.`)
}