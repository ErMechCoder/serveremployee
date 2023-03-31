
import ProjectTask from "../models/ProjectTask.js";

export  const postProjectTask  = async (req, res) => {
    const  task = await req.body
   
    const projecttasks = await new ProjectTask(task)
    try {
      const dataToSave = await projecttasks.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
    
  }


  export const getProjectTask= async (req, res) => {
    try {
      const projecttasks = await ProjectTask.find();
      res.status(200).json(projecttasks);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };