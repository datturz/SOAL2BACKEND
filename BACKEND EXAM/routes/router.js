var router = require('express').Router()
var data = require('../models/data')
var url = 'mongodb://localhost:27017/dataCPU'
var os = require('os')
var mongoose = require('mongoose')


mongoose.connect(url, () => {
    console.log('Terhubung ke MongoDB')
})
// GET ALL DATA
router.get('/data', (req, res) => {
    data.find((err, data) => {
        res.send(data)
    })
})




// POST DATA
router.post('/data', (req, res) => {
    new data({
        namacpu: os.hostname(),
        tipe: os.type(),
        platform: os.platform(),
        rilis: os.release(),
        ramSisa: os.freemem(),
        ramTotal: os.totalmem(),
    }).save().then((x) => {
        res.send({ "status": "data tersimpan" })
        console.log(x)
    }).catch((x) => {
        res.send({ "status": "not data found" })
    })

})

module.exports = router