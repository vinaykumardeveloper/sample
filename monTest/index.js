const express = require('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect("mongodb+srv://kumarin2468v:yoiNxJUPvnPraaSy@vinaymondb.xqg45.mongodb.net/?retryWrites=true&w=majority&appName=vinayMondb");

const MobileSchema = new mongoose.Schema({
    name: String,
    price: Number,
    storage: String
})

const MobileModal = mongoose.model("mobiles", MobileSchema)

app.get("/getMobiles", (req, res) => {
    MobileModal.find({}) // Querying the database
        .then(mobiles => {
            res.json(mobiles) // Send the list of mobiles as a response
        })
        .catch(err => {
            console.log(err) // Log the error if any
            res.status(500).json({ error: 'Internal server error' }) // Send error response
        })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})






// const express = require('express')
// const mongoose = require('mongoose')

// const app = express()
// mongoose.connect("mongodb://127.0.0.1:27017/vinaydb")

// const MobileSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     storage: String
// })

// const MobileModal = mongoose.model("mobiles",MobileSchema)

// app.get("/getMobiles", (req, res) => {
//     res.json(MobileModal.find({})).then(function(mobiles) {
//         res.json(mobiles)
//     }).catch(function(err) {
//         console.log(err)
//     })
// })

// app.listen(3001, () => {
//     console.log("server is Running")
// })