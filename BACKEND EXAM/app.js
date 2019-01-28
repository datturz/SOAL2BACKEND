let express = require('express')
let cors = require('cors')
let mongorouter = require('./routes/router')

let app = express()
app.use(cors())
app.use(mongorouter)
app.get('/', (req, res) => {
    res.send('<h1>Hubung</h1>')
})

app.listen(1111, () => {
    console.log('aktif')
})