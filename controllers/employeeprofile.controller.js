
import EmployeeProfile from "../models/EmployeeProfile.js";

export  const postEmployeeProfile = async (req, res) => {
    const  employee = await req.body
   
    const profile = await new EmployeeProfile(employee)
    try {
      const dataToSave = await profile.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
    
  }


  export const getEmployeeProfile = async (req, res) => {
    try {
      const Employeeprofiles = await EmployeeProfile.find();
      res.status(200).json(Employeeprofiles);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };