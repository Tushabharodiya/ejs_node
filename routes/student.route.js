let express = require("express");
const { get_student, create_student, delete_student, update_student, student_profile } = require("../controller/student.controller");

let route = express.Router();

route.get("/get", get_student);
route.post("/add", create_student);
route.delete("/delete/:id", delete_student);
route.put("/update/:id", update_student);
route.get("/get/:id",student_profile)

module.exports = route;