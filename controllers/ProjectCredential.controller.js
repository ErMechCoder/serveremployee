
import ProjectCredential from "../models/ProjectCredential.js";

export  const postProjectCredential = async (req, res) => {
    const  credential = await req.body
   
    const credentials = await new ProjectCredential(credential)
    try {
      const dataToSave = await credentials.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
    
  }


  export const getProjectCredential= async (req, res) => {
    try {
      const projectcredential = await ProjectCredential.find();
      res.status(200).json(projectcredential);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };