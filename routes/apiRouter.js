const express = require('express')
const {notes} = require('../data/data.js');
const {nanoid} = require('nanoid')
const validateNoteId = require('../middleware/validateId');
const sanitizeBody = require('../middleware/sanitizeBody.js');
const router = express.Router()
const bodyParser = require('body-parser');
const validatePost = require('../middleware/schemaValidator.js');

const jsonParser = bodyParser.json();

router.use('/notes/:noteId', validateNoteId)

router.get('/notes', (req, res) => res.status(200).send({data: notes}))

router.get('/notes/:noteId', (req, res) => {
    res.status(200).send({data: notes[req.noteIndex]})  
})

router.post('/notes', jsonParser, validatePost, sanitizeBody, (req, res) => {
    const {title, description} =  req.sanitizedBody
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