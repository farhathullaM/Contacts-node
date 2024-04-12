const express = require("express");
const dotenv =  require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//middleware
app.use(express.json())
app.use('/api/contacts', require("./routes/contactRoute"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})