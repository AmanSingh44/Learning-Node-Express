const express = require('express')
const router = express.Router()
const dbConn = require('../config/dbconnection')
const { getAllContacts, addContact, getContactbyId, deletebyId, updatebyId } = require('../controller/contact-controller')


router.get('/', getAllContacts)

router.get('/:id', getContactbyId)

router.post('/', addContact)

router.put('/:id', updatebyId)

router.delete('/:id', deletebyId)


module.exports = router;