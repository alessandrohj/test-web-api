const Ajv = require("ajv")
const ajv = new Ajv({allErrors: true})

const schema = {
  type: "object",
  properties: {
    id: {type: "string"},
    title: {type: "string"},
    description: {type: "string"},
    when: {type: "number"},
  },
  required: ["title", "description"],
  additionalProperties: false,
}

const validate = ajv.compile(schema)

  function validatePost (req, res, next){
    const valid = validate(req.body)
    if (!valid) {
        res.status(400).send({
            errors: [
              {
                status: '400',
                title: 'Invalid note',
                description: "Invalid: " + ajv.errorsText(validate.errors)
              }
            ]
          })
    } else {
        next();
    }

}

module.exports = validatePost