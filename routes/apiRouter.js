const express = require('express')
const {bodyParse} = require('express')
const {notes} = require('../data/data.js');
const {nanoid} = require('nanoid')
const validateNoteId = require('../middleware/validateId')
const router = express.Router()

router.use('/notes/:noteId', validateNoteId)

router.get('/notes', (req, res) => res.send({data: notes}))

router.get('/notes/:noteId', (req, res) => {
    res.send({data: notes[req.noteIndex]})  
})

router.post('/notes', (req, res) => {
    // console.log(req)
    const {title, description} = req.body
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