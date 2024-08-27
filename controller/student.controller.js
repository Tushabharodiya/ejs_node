const { studentSchema } = require("../models")



let get_student = async (req, res) => {
    try {

        let student = await studentSchema.find()
        res.status(200).json({
            message: "student get successfully",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let create_student = async (req, res) => {
    try {

        let body = req.body;

        let student = await studentSchema.create(body)

        res.status(201).json({
            message: "student admition is done",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let delete_student = async (req, res) => {
    try {
        let { id } = req.params;

        let student = await studentSchema.findByIdAndDelete(id)
        res.status(200).json({
            message: "student admition is cencel success",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let update_student = async (req, res) => {
    try {
        let { id } = req.params;
        let body = req.body;

        let data = await studentSchema.findByIdAndUpdate(id, body);

        let student = {
            id,
            ...body,
        }

        res.status(200).json({
            message: "student data updeted",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

let student_profile = async (req, res) => {
    try {
        let { id } = req.params;
        let student = await studentSchema.findById(id)

        res.status(200).json({
            message: "student get success",
            student,
        })

    } catch (error) {
        res.status(500).json({
            error: error.message,
        })
    }
}

module.exports = { get_student, create_student, delete_student, update_student, student_profile }