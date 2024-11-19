const express = require('express')
const path = require('path')
const cors = require('cors')
const db = require('./db')
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true }));

app.listen(5006,()=>{
    console.log("server started at port 5006")
});

app.get('/getMovies',(req,res)=>{
    db.getMovies()
    .then(movies => res.send(movies))
    .catch(err => res.status(500).send("failed to fecth moves"))
})

app.post('/postMovies',(req,res)=>{
  const {heroName,heroineName,movieName,directorName} = req.body;
  db.addMovies(heroName,heroineName,movieName,directorName)
  .then(movies => res.send(movies))
  .catch(err => res.status(500).send("failed to post movies"))

});


app.post('/postMovies/bulk',(req, res)=>{
  if (!Array.isArray(movies)) {
        return res.status(400).send("Request body must be an array");
    }
    db.addBulkMovies([data])
        .then(() => res.status(201).send("Movies added successfully!"))
        .catch(err => res.status(500).send("Failed to upload movies"));
    
})

app.get('/getSugges',(req,res)=>{
    db.getSugges()
    .then(sugges => res.send(sugges))
    .catch(err => res.status(500).send("failed to fecth sugges"))
})

app.post('/postSugges',(req,res)=>{
    const {name} = req.body;
    db.addSugges(name)
    .then(sugges => res.send(sugges))
    .catch(err => res.status(500).send("failed to post sugges"))
  
  });


app.post('/postSugges/bulk',(req, res)=>{
  if (!Array.isArray(sugges)) {
        return res.status(400).send("Request body must be an array");
    }
    db.addBulkSugges([data])
        .then(() => res.status(201).send("Suggestions added successfully!"))
        .catch(err => res.status(500).send("Failed to upload suggestions"));
    
})

