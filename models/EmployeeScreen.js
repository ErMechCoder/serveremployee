
import mongoose from "mongoose";
const screenShortSchema = mongoose.Schema({
  
    username: { type: String, required: true},
    type: { type: String, required: true},
    image: { type: String,  required: true},
    uploadedAt: {type: String},
   
});

const EmployeeScreen = mongoose.model("ScreenShort",screenShortSchema);
export default EmployeeScreen;