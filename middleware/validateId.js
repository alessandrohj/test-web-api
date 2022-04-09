const {notes} = require('../data/data.js')

function validateId (req, res, next){
    const id = parseInt(req.params.noteId)
    const index = notes.findIndex(note => note.id === id)
    if (index < 0) {
      res.status(404).send({
        errors: [
          {
            status: '404',
            title: 'Resource does not exist',
            description: `We could not find a note with id: ${id}`
          }
        ]
      })
    } else {
        req.noteIndex = index
      next();
    }

}

module.exports = validateId