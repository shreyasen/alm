import Course from "../models/course.js";

export const findCourse = async (req, res) => {
    const { code } = req.params;
    try {
        const foundCourse = await Course.findOne({"course.code": code});
        if (foundCourse) {
            res.status(200).send(foundCourse);
        } else {
            res.status(404).send({ message: 'No course found'});
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}