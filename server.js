import express from 'express'

const app = express()

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/greetings/:name', (req, res) => {
    let randomInt = Math.floor(Math.random() * 3)
    const { name } = req.params
    res.send(`<h1>Hey there ${name}! Today, your number is ${randomInt}`)
}
)

app.get('/roll/:number', (req, res) => {
    const { number } = req.params
    let randomInt = Math.floor(Math.random() * number)
    if (typeof (number / 1) === 'number') {
        res.send(`You rolled a ${randomInt}.`)
    } else res.send(`Give me a number, please.`)
    

})

app.get('/collectibles/:index', (req, res) => {
    const { index } = req.params
    if (index > (collectibles.length - 1)) {
        res.send(`Sorry, item not in stock.`)
    } else 
        res.send(`So you want the ${collectibles[index].name}? It can be yours for $${collectibles[index].price}.`)
}
)

app.get('/shoes', (req, res) => {
    const minPrice = Number(req.query.minprice)
    const maxPrice = Number(req.query.maxprice)
    const type = req.query.type
    let filteredShoes = []
    shoes.forEach((shoe) => {
        if (shoe.price >= minPrice) {
            filteredShoes.push(shoe)
        } else if (shoe.price <= maxPrice) {
            filteredShoes.push(shoe)
        } else if (shoe.type === type) {
            filteredShoes.push(shoe)
        } else filteredShoes.push(shoe)
    })
    res.send(filteredShoes)
})



app.listen(3001, () => {
})
