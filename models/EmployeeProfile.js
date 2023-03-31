import mongoose from "mongoose";

const employeeProfileSchema = mongoose.Schema({
  
    firstName: { type: String, require: true },
    lastName: { type: String, require: true},
    birthDate: { type: String, require: true},
    gender: {type: String, require: true },
    address: { type: String, require: true },
    state: { type: String, require: true },
    country: { type: String, require: true },
    pinCode: { type: String, require: true },
    email: { type: String, require: true },
    phoneNumber: { type: String, require: true },
    department : { type: String, require: true },
    designation : { type: String, require: true},
   
});

const EmployeeProfile = mongoose.model("EmployeeProfile", employeeProfileSchema);
export default EmployeeProfile;