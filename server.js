const express = require('express');
const app = express();
const mongoose = require('mongoose');
const player = require('./models/schema.js');
const playerinfo = require('./models/b-info.js');

app.use(express.urlencoded({extended: true}));




app.get('/ff/start', (req, res)=>{
    res.render('new.ejs');
});

app.post('/ff/', (req, res)=>{
    player.create(req.body, (error, createdPlayer)=>{
        res.redirect("/ff");
    });
});


app.get('/ff', (req, res)=>{
    player.find({}, (error, allPlayers)=>{
        res.render('index.ejs', {
            player: allPlayers
        });
    });
});

//player.collection.drop()

// player.create(playerinfo, (err, data) => {
//         if (err) console.log (err.message)
//        console.log("add provided books and author data")
// });




mongoose.connect('mongodb://localhost:27017/ffbasketball', () => {
  console.log('The connection with mongod is established')
})

app.listen(2000,()=>{
    console.log('Lock an Loaded!#!#!#!#!#!#!');
});