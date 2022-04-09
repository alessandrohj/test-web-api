const express = require('express')
const data = require('../data/data.js');
const validateNoteId = require('../middleware/validateId')
const router = express.Router()

router.use('/noteId', validateNoteId)

router.get('/', (req, res) => res.send({data: data}))



module.exports = router