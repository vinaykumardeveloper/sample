const mongoose = require('mongoose')

mongoose.disconnect()
mongoose.connect("mongodb+srv://kumarin2468v:yoiNxJUPvnPraaSy@vinaymondb.xqg45.mongodb.net/?retryWrites=true&w=majority&appName=vinayMondb")
.then(()=>console.log("connected mongodb"))
.catch(err=> console.log("failed to connect to mongodb",err))

const MovieModal = new mongoose.Schema({
    heroName: String,
    heroineName : String,
    movieName : String,
    directorName : String
})

const SuggModal = new mongoose.Schema({
    name: String
})


const Movie = mongoose.model('Movie',MovieModal,'movieColl')

const Sugg = mongoose.model('Sugg',SuggModal,'suggColl')

function getMovies(){
    return Movie.find().exec()
}

function addMovies(heroName,heroineName,movieName,directorName){
    const movie = new Movie({heroName,heroineName,movieName,directorName})
    return movie.save()  
}

function addBulkMovies(movies){
    return Movie.insertMany(movies)

}

function getSugges(){
    return Sugg.find().exec()
}

function addSugges(name){
    const sugg = new Movie({name})
    return sugg.save()  
}

function addBulkSugges(sugges){
    return Sugg.insertMany(sugges)

}

module.exports = {
    getMovies,
    addMovies,
    addBulkMovies,
    getSugges,
    addSugges,
    addBulkSugges,
    Movie,
    Sugg 
}
