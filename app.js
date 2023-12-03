const express = require('express');
const app = express();
const genre = require('./routes/genres')

app.use(express.json())
app.use('/api/movies', genre)




const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`listening on port
${port}...`)});