const User = require("../model/User")

const getAllUsers = async(req, res, next) => {
    let users;
    try {
        users = await User.find()
    } catch (err) {
        return next(err)
    }
    if (!users) {
        return res.status(500).json({ message: "Internal server error" })
    }
    return res.status(200).json({ users })
}

const addUser = async(req, res, next) => {
    const { name, email, password } = req.body
    if (!name && name.trim() == "" && !email && email.trim() == "" && !password && password.length < 8) {
        return res.status(422).json({ message: "invalid data" })
    }
    let user;
    try {
        user = new User({
            name,
            email,
            password
        })
        user = await user.save()
    } catch (err) {
        return next(err)
    }
    if (!user) {
        return res.status(500).json({ message: "Internal server error" })
    }
    return res.status(201).json({ user })
}

const updateUser = async(req, res, next) => {
    const id = req.params.id
    const { name, email, password } = req.body
    if (!name && name.trim() == "" && !email && email.trim() == "" && !password && password.length < 8) {
        return res.status(422).json({ message: "invalid data" })
    }

    let user
    try {
        user = await User.findByIdAndUpdate(id, { name, email, password })
    } catch (err) {
        return next(err)
    }
    if (!user) {
        return res.status(500).json({ message: "Umable to update user" })
    }
    return res.status(200).json({ message: "updated sucessfully" })

}

const deleteUser = async(req, res, next) => {
    const id = req.params.id
    let user
    try {
        user = await User.findByIdAndRemove(id)

    } catch (err) {
        return next(err)
    }
    if (!user) {
        return res.status(500).json({
            message: "unable to delete"
        })
    }
    return res.status(200).json({ message: "Deletion sucess" })

}

const getUser = async(req, res, next) => {
    const id = req.params.id
    let user
    try {
        user = await User.findById(id)

    } catch (err) {
        return next(err)
    }
    if (!user) {
        return res.status(500).json({ message: "operation failed" })
    }
    return res.status(200).json(user)
}

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.getUser = getUser;