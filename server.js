const express = require('express');
const app = express();
const mongoose = require('mongoose');
const player = require('./models/schema.js');
const playerinfo = require('./models/b-info.js');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));




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

app.get('/ff/:id', (req, res)=>{
    player.findById(req.params.id, (err, foundPlayer)=>{
        res.render('show.ejs', {
            player:foundPlayer
        });
    });
});

app.get('/showcase', (req, res)=>{
    player.findById(req.params.id, (err, foundPlayer)=>{
    res.render('showcase.ejs');
    });
});

app.delete('/ff/:id', (req, res)=>{
    player.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/ff');
    });
});

app.get('/ff/:id/edit', (req, res)=>{
    player.findById(req.params.id, (err, foundPlayer)=>{
        res.render('edit.ejs', {
            player: foundPlayer
        });
    });
});

app.put('/ff/:id', (req, res)=>{
    player.findByIdAndUpdate(req.params, req.body, {new:true}, (err, updatedMobel)=>{
        res.redirect('/ff');
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