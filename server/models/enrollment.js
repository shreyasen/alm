import mongoose from "mongoose";

const enrollmentSchema = mongoose.Schema({
    email: String,
    code: String,
    courseKey: String,
    startDate: Date,
    endDate: Date,
})

const Enrollment = mongoose.model('enrollment', enrollmentSchema);
export default Enrollment;