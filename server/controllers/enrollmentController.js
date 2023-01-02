import Enrollment from "../models/enrollment.js";
import Course from "../models/course.js";

export const createEnrollment = async(req, res) => {
    const { code, courseKey } = req.body;
    const email = req.userEmail;
    const date = new Date();
    const endDate = new Date(date.setMonth(date.getMonth()+3))
    try {
        const enrollment = new Enrollment({
            email,
            courseKey,
            code,
            startDate: new Date(),
            endDate
        })
        await enrollment.save();
        res.status(201).send({ message: 'License created successfully!' })
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

export const getEnrollments = async(req, res) => {
    const email = req.userEmail;
    try {
        const list = await Enrollment.find({email});
        const responseBody = {};
        const courseDetails = list.map((en) => {
            console.log(en)
            responseBody.startDate= en.startDate
        })
        console.log(courseDetails);
        res.status(200).send(list);
    } catch (error) {
        res.status(500).send({ message: error })
    }
}