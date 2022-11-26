var express = require('express');
var router = express.Router();
const Db = require('../Db');
const { body, validationResult } = require('express-validator');


const db = new Db();

router.post('/',
    body('user').notEmpty(),
    body('conventionId').notEmpty(),
    body('message').notEmpty(),
    (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const message = req.body.message
    const userId = req.body.user
    const conventionId = req.body.conventionId
    const query = `INSERT INTO Attestation (idEtudiant, idConvention, message)
                    VALUES (?, ?, ?)`;
    db.insert(query, userId, conventionId, message).then(() => {
        res.send('Insert successful');
    });
});

module.exports = router;
