import mongoose from "mongoose";

const institutionSchema = mongoose.Schema({
    country_code: Number,
    country_name: String,
    fice_code: String,
    id: Number,
    institution_key: String,
    institution_name: String
});

const Institution = mongoose.model('institution', institutionSchema);
export default Institution;
