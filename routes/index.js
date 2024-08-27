let express = require("express");
let routes = express.Router();
let studentRoute = require("./student.route")


routes.use("/student",studentRoute)

module.exports=routes;