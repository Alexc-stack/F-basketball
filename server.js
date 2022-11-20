const express = require('express');
const app = express();



app.get('/ff/start', (req, res)=>{
    res.render('new.ejs');
});











app.listen(2000,()=>{
    console.log('Lock in Loaded##!#!#!#!#!#!');
});