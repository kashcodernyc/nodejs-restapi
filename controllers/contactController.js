// get all contacts
// GET /api/contacts
// public
const getAllContacts = (req, res) => {
    res.status(200).json({message: 'get all contacts'});
}

// get individual contact
// GET /api/contact/:id
// private
const getContact = (req, res) => {
    res.status(200).json({message: `get contact for contact for ${req.params.id}`});
}

// create a new contact
// POST /api/contact/
// public

const createContact = (req, res) => {
    res.status(201).json({message: 'create contact'});
}

// update a contact
// PUT /api/contact/:id
// public
const updateContact = (req, res) => {
    res.status(200).json({message: `update contact for ${req.params.id}`});
}

// delete a contact 
// DELETE /api/contact/:id
// public
const deleteContact = (req, res) => {
    res.status(200).json({message: `delete contact for ${req.params.id}`});
}


module.exports = { getAllContacts, getContact, createContact, updateContact, deleteContact }