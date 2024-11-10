// MongoDB Connection
const mongoose = require('mongoose');
mongoose.disconnect();
mongoose.connect("mongodb+srv://kumarin2468v:yoiNxJUPvnPraaSy@vinaymondb.xqg45.mongodb.net/?retryWrites=true&w=majority&appName=vinayMondb")
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));

// Define the schema for the 'mobiles' collection (with storage as String)
const mobileSchema = new mongoose.Schema({
    name: String,
    price: Number,
    storage: String, // Ensure storage is treated as a string
});

// Create the model for the 'mobiles' collection
const Mobile = mongoose.model('Mobile', mobileSchema, 'mobilesColl');

// Fetch all documents from 'mobiles' collection
function getMobiles() {
    return Mobile.find().exec();
}

// Add a single document to 'mobiles' collection
function addMobiles(name, price, storage) {
    const mobile = new Mobile({ name, price, storage });
    return mobile.save();
}

// Update a document by ID in 'mobiles' collection
function updateMobiles(name, price, storage, _id) {
    return Mobile.findByIdAndUpdate(_id, { name, price, storage }, { new: true }).exec();
}

// Delete a document by ID in 'mobiles' collection
function deleteMobiles(_id) {
    return Mobile.findByIdAndDelete(_id).exec();
}

// Add multiple documents to 'mobiles' collection
function addMultipleMobiles(mobiles) {
    return Mobile.insertMany(mobiles);
}

module.exports = {
    getMobiles,
    addMobiles,
    updateMobiles,
    deleteMobiles,
    addMultipleMobiles,
};
