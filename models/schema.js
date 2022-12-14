const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {type: String, required: true },
    img: String,
    position: String,
    ppg: Number,
    rbg: Number,
    apg: Number,
    fgp: Number,
    height: String,
    weight: Number,
    rating: Number,
});

const playerCollection = mongoose.model('Player', playerSchema);

module.exports = playerCollection;