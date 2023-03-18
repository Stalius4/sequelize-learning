const express=require("express")
const router = express.Router()
const db = require("../config/database")
const Food = require("../models/food")
// all routes localhost:5000/routes
router.get("/", (req, res) => 
Food.findAll()
.then(food => {
    console.log(food);
    res.sendStatus(200)
})
.catch(err => console.log(err)))

module.exports=router