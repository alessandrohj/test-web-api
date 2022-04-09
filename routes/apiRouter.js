const express = require('express')
const {notes} = require('../data/data.js');
const validateNoteId = require('../middleware/validateId')
const router = express.Router()

router.use('/notes/:noteId', validateNoteId)

router.get('/notes/', (req, res) => res.send({data: notes}))

router.get('/notes/:noteId', (req, res) => {
    res.send({data: notes[req.noteIndex]})  
})


module.exports = router