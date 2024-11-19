const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const cors = require('cors');


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5004, () => {
    console.log("Server started at port 5004");
});

// Serve the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fetch all mobiles
app.get('/mobiles', (req, res) => {
    db.getMobiles()
        .then(mobiles => res.send(mobiles))
        .catch(err => res.status(500).send("Error fetching mobiles"));
});

// Add a single mobile
app.post('/mobiles', (req, res) => {
    const { name, price, storage } = req.body;
    db.addMobiles(name, price, storage)
        .then(mobile => res.send(mobile))
        .catch(err => res.status(500).send("Error adding mobile"));
});

// Update a mobile by ID
app.put('/mobiles', (req, res) => {
    const { name, price, storage, _id } = req.body;
    db.updateMobiles(name, price, storage, _id)
        .then(updatedMobile => res.send(updatedMobile))
        .catch(err => res.status(500).send("Error updating mobile"));
});

// Delete a mobile by ID
app.delete('/mobiles', (req, res) => {
    const { _id } = req.body;
    db.deleteMobiles(_id)
        .then(result => res.send(result))
        .catch(err => res.status(500).send("Error deleting mobile"));
});

// Bulk upload mobiles
app.post("/mobiles/bulk", async(req, res) => {
    const {mdata} = req.body;
    const data={
        mdata:mdata
    }
    await collection.insertMany([data])
    // if (!Array.isArray(mobiles)) {
    //     return res.status(400).send("Request body must be an array");
    // }
    // db.addMultipleMobiles([data])
    //     .then(() => res.status(201).send("Mobiles added successfully!"))
    //     .catch(err => res.status(500).send("Failed to upload mobiles"));
    
});
