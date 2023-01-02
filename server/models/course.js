import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    course: {
        code: String,
        courseName: String,
        courseState: String,
        courseKey: String,
        instructors: [
            {
                user_id: Number,
                first_name: String,
                last_name: String,
                login_name: String
            }
        ],
        isbn: String,
        is_subscription_required: Boolean,
        is_free_trial_enabled: Boolean
    }
})

const Course = mongoose.model('course', courseSchema);
export default Course;