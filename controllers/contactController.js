const asyncHandler = require("express-async-handler")

// get all contacts
// GET /api/contacts
// public
const getAllContacts = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'get all contacts'});
})

// get individual contact
// GET /api/contact/:id
// private
const getContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `get contact for contact for ${req.params.id}`});
})

// create a new contact
// POST /api/contact/
// public
const createContact = asyncHandler( async (req, res) => {
    const {name, email, phone } = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(201).json({message: 'create contact'});
})

// update a contact
// PUT /api/contact/:id
// public
const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `update contact for ${req.params.id}`});
})

// delete a contact 
// DELETE /api/contact/:id
// public
const deleteContact = asyncHandler( async (req, res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}`});
})


module.exports = { getAllContacts, getContact, createContact, updateContact, deleteContact }