const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")

// creating veriable and taking it from database.js file
const db = require("./config/database")

// Test db

db.authenticate()
    .then(() => console.log("db connected..."))
    .catch(err => console.log("Error" + err))




const app = express();
app.get("/", (req, res) => res.send("INDEX"))

//Food routes

//using routes from routes/food.js file
app.use("/food", require("./routes/food"))


const PORT = process.env.PORT|| 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`))
