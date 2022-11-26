var express = require('express');
var router = express.Router();
const Db = require('../Db');


const db = new Db();

router.get('/:id', (req, res) => {
    const query = `SELECT C.id as id, C.nom as nom, C.nbHeure as nbHeure 
                    FROM Convention C, Etudiant E 
                    WHERE C.id = E.idConvention
                    AND E.id=${req.params.id}`;
    db.query(query).then((result) => {
        res.send(result);
    })
})

module.exports = router;
