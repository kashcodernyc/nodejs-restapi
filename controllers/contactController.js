const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModel');

// get all contacts
// GET /api/contacts
// public
const getAllContacts = asyncHandler( async (req, res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
})

// get individual contact
// GET /api/contact/:id
// private
const getContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error('Contact Not Found')
    }
    res.status(200).json(contact);
})

// create a new contact
// POST /api/contact/
// public
const createContact = asyncHandler( async (req, res) => {
    console.log('the request body is:', req.body);
    const {name, email, phone } = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const contact = await Contact.create({
        name,
        email,
        phone
    })

    res.status(201).json(contact);
})

// update a contact
// PUT /api/contact/:id
// public
const updateContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error('Contact Not Found')
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact);
})

// delete a contact 
// DELETE /api/contact/:id
// public
const deleteContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error('Contact Not Found')
    }
    await contact.remove();
    res.status(200).json({message: `contact deleted for ${contact.name}`});
})


module.exports = { getAllContacts, getContact, createContact, updateContact, deleteContact }