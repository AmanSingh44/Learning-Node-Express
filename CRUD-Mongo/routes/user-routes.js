const express = require('express')
const { getAllUsers, getUser } = require("../controller/user-controller")
const { addUser, updateUser, deleteUser } = require("../controller/user-controller")


const router = express.Router()

router.get("/:id", getUser)
router.get("/", getAllUsers)
router.post("/", addUser)
router.put("/:id", updateUser)
router.delete("/:id", deleteUser)


module.exports = router