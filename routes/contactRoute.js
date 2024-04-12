const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// router.route('/').get((req, res) =>{
//     res.status(200).json({message: 'Get all contacts'})
// })
router.route("/").get(getAllContacts).post(createContact);;

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;
