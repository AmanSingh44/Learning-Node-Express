// const express = require('express')
// const router = express.Router()
const dbConn = require('../config/dbconnection')


const getAllContacts = (req, res) => {
    dbConn.query('select * from contacts', (err, result) => {
        if (err) {
            res.json({
                'message': 'error while fetching data '
            })
        } else {
            res.status(200).json({
                'message': 'data fetched sucessfully',
                'data': result
            })
        }
    })
}

const getContactbyId = (req, res) => {
    const id = req.params.id
    dbConn.query(`select * from contacts where id ="${id}"`, (err, result) => {
        if (err) {
            res.json({
                'message': 'error while fetching data '
            })
        } else {
            res.status(200).json({
                'message': 'data fetched sucessfully',
                'data': result
            })
        }
    })
}

// const addContact = (req, res) => {
//     dbConn.query('insert into contacts (name,phone,email) VALUES ("Siraj","9897979934","siraj@hottie.com")', (err, result) => {
//         if (err) {
//             res.json({
//                 'message': 'error while inserting  data '
//             })
//         } else {
//             res.status(201).json({
//                 'message': 'data inserted sucessfully',
//                 'data': result
//             })
//         }
//     })
// }

//add using body parser
const addContact = (req, res) => {
    const body = req.body
    dbConn.query(`insert into contacts (name,phone,email) VALUES ("${body.name}","${body.phone}","${body.email}")`, (err, result) => {
        if (err) {
            res.json({
                'message': 'error while inserting  data '
            })
        } else {
            res.status(201).json({
                'message': 'data inserted sucessfully',
                'data': result
            })
        }
    })
}

const updatebyId = (req, res) => {
    const id = req.params.id
    dbConn.query(`update contacts set name="updatedname" where id="${id}"
                `, (err, result) => {
        if (err) {
            res.json({
                'message': 'error while updating data'
            })
        } else {
            res.status(200).json({
                'message': 'data updated sucessfully',
                'data': result
            })
        }
    })
}

const deletebyId = (req, res) => {
    const id = req.params.id
    dbConn.query(`
                delete from contacts where id = "${id}"
                `, (err, result) => {
        if (err) {
            res.json({
                'message': 'error while deleting  data '
            })
        } else {
            res.status(200).json({
                'message': 'data deleted sucessfully',
                'data': result
            })
        }
    })
}






module.exports = {
    getAllContacts,
    addContact,
    deletebyId,
    getContactbyId,
    updatebyId
}