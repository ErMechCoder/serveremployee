
import Client from "../models/Client.js";
export  const postClientProfile = async (req, res) => {
    const  user = await req.data
   
    const profile = await new Client(user)
    try {
      const dataToSave = await profile.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
    
  }


  export const getClientProfile = async (req, res) => {
    try {
      const clientprofiles = await Client.find();
      res.status(200).json(clientprofiles);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };