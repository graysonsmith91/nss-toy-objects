/*const lego = {
    id: 1,
    name: "Lego",
    price: 80,
    weight: 2.5
}

const basketball = {
    id: 2,
    name: "Basketball",
    price: 50,
    weight: 0.72
}

const raceCar = {
    id: 3,
    name: "Race car",
    price: 42,
    weight: 0.5
}
*/

const toys = [
    {
        id: 1,
        name: "Lego",
        price: 80,
        weight: 2.5
    },
    {
        id: 2,
        name: "Basketball",
        price: 50,
        weight: 0.72
    },
    {
        id: 3,
        name: "Race car",
        price: 42,
        weight: 0.5
    }
]

const skateboard = {
    id: 4,
    name: "Skateboard",
    price: 100,
    weight: 8
}

const hulaHoop = {
    id: 5,
    name: "Hula Hoop",
    price: 20,
    weight: 5
}

toys.push(skateboard)
toys.push(hulaHoop)

toyToFind = 5
//console.log(toys)

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price += toy.price * 0.05
        console.log(`The ${toy.name} costs ${toy.price} dollars.`)
    }
}