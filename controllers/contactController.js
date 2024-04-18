const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = Contact.find();
  res.status(201).json({ message: "Get all contacts" });
});

//@desc Create new contacts
//@route GET /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  console.log("The request is", req.body);
  const { name, email, phone} = req.body;
  if(!name || !email || !phone){
    res.status(400);
    throw new Error("All fields are mandotory")
  }
  const contact = await Contact.create({
      name,
      email,
      phone,
    });
  res.status(201).json(contact);
});



//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id)
  if(!contact){
    res.status(404);
    throw new Error("Contact not found");
  }

  res.status(201).json(contact);
});

//@desc Update contact
//@route GET /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Update contact on ${req.params.id}` });
});

//@desc Delete contact
//@route GET /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Delete contact on ${req.params.id}` });
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
