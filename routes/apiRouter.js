const express = require('express')
const {notes} = require('../data/data.js');
const {nanoid} = require('nanoid')
const validateNoteId = require('../middleware/validateId');
const sanitizeBody = require('../middleware/sanitizeBody.js');
const router = express.Router()
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json();

router.use('/notes/:noteId', validateNoteId)

router.get('/notes', (req, res) => res.send({data: notes}))

router.get('/notes/:noteId', (req, res) => {
    res.send({data: notes[req.noteIndex]})  
})

router.post('/notes', jsonParser, sanitizeBody, (req, res) => {
    let tempNote = req.sanitizedBody
    const {title, description} = tempNote
    const newNote = {
        id: nanoid(),
        title,
        description,
        when: Date.now()
    }
    notes.push(newNote)
    res.status(201).send({data: newNote})
})

module.exports = router