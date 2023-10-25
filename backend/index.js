const express = require('express');
// midlleware morgan
const morgan = require("morgan")
const cors = require('cors');
//
const mongoose = require("mongoose")
// qcm schema modul
const Qcm = require('./moduls/qcm')

// express app
const app = express();
// Enable CORS for all routes
app.use(cors());

// acces to database mongodb
const dbc = 'mongodb+srv://zozo:159159@ilorez.gm9xflf.mongodb.net/qcmDB?retryWrites=true&w=majority'
mongoose.connect(dbc, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middlware
app.use(express.static(`public`))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/qcm/create', (req, res) => {
    res.render("qcm/create")
})
app.post('/qcm', (req, res) => {
    req.body.questions = JSON.parse(req.body.questions)
    // console.log(req.body)
    const qcm = new Qcm(req.body)
    qcm.save()
        .then((result) => res.redirect("/qcm/create"))
        .catch((err) => console.log(err))
})
app.get('/qcm/:name/:level', (req, res) => {
    const name = req.params.name
    const level = req.params.level
    // if (isNaN(level)) {
    //     res.send()
    // }
    Qcm.find({ "name": name, "level": level }).sort({ createdAt: -1 }).limit(1)
        .then((result) => res.send(result))
        .catch((err) => res.status(404).send({ error: "there is a error", err_details: err }))
})




