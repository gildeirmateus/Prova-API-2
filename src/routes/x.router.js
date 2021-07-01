const express = require('express')
const controller = require('../controllers/x.controller')

const router = express.Router()

router.post('/api/v1/bills', controller.create)
router.get('/api/v1/bills', controller.listAll)
router.delete('/api/v1/bills/:id', controller.remove)

module.exports = router