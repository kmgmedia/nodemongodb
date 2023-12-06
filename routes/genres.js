const express = require('express');
const router = express.Router();


const movies = [
    {id: 1, name: "action"},
    {id: 2, name: "crime"},
    {id: 3, name: "adventure"},
    {id: 4, name: "horror"},
    {id: 5, name: "thriller"},
]

router.get('/', (req, res) => {
    res.send(movies)
})


router.post('/', (req, res) => {
    const genre = {
        id: movies.length + 1,
        name: req.body.name
    };
    movies.push(genre);
    res.send(genre)
})

router.post('/', (req, res) => {
    const genre = {
        id: movies.length + 1,
        name: req.body.name
    };
    movies.push(genre);
    res.send(genre)
})



module.exports = router;