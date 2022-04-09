const express = require('express')
const data = require('../data/data.json');
const router = express.Router()

router.get('/', (req, res) => res.send({data: data}))