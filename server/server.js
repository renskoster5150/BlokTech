const express = require("express")
const app = express()

app
    .set ('view engine', 'ejs')
    .set ('views', 'view')
    .get('/', onhome)
    .get('/about', onabout)
    .listen(8000)
function onhome(req, res){
    res.send('<h1>home</h1>')
}

function onabout (req, res){
    res.send('<h1>About</h1>')
}

function movie(req, res, next) {
    let movie = {
        title: 'The Goofy movie'
        description: 'good movie, funny dog'
    }
    res.render('ballhair.ejs', {data:movie})
}