const express = require('express')
const router = express.Router()
const dbConn = require('../config/dbconnection')
const { getAllUsers, getUserbyId, addUser, updateUserbyId, deleteUserbyId, login } = require('../controller/user-controller')


router.get('/', getAllUsers)

router.get('/:id', getUserbyId)

router.post('/', addUser)

router.put('/:id', updateUserbyId)

router.delete('/:id', deleteUserbyId)
router.post('/login', login)


module.exports = router;