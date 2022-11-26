var express = require('express');
const Db = require('../Db');
var router = express.Router();

const db = new Db();

router.get('/all', (req, res) => {
    const query = "SELECT * FROM Etudiant";
    db.query(query).then((result) => {
        res.send(result);
    })
})

router.get('/:id', (req, res) => {
    const query = `SELECT * FROM Etudiant WHERE id=${req.params.id}`;
    db.query(query).then((result) => {
        res.send(result);
    })
})

module.exports = router;
