
import Project from "../models/Project.js";

export  const postProject = async (req, res) => {
    const  project = await req.body;
   
   
    const profile = await new Project(project)
    try {
      const dataToSave = await profile.save();
      res.status(200).json(dataToSave)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
    
  }


// export  const postProject1 = async (req, res) => {
//     // const userId = req.params.userId
//     const  project = req.body
//     let payload = {
//         ...project,
//     }
//     const task = await new Project(payload)
//     task.save((err, success) => {
//         if (err) {
//             return res.status(500).send({ message: "something went wrong" })
//         }
//         return res.status(201).send(success)
//     })

    

// }


  export const getProject = async (req, res) => {
    // const userId = req.params.userId
    const tasks = await Project.find()
    const task=JSON.parse(tasks || '')
    res.send(task)
}

export const deleteProject = async (req, res) => {
    console.log('param', req.params)
    await Project.deleteOne({ _id: req.params.id });
    res.send(`Successfully delete project with id ${req.params.id}`)
}

export const patchProject=async (req, res) => {
    // res.send(req.body);
    try {
        await Project.findOneAndUpdate({ _id: req.params.id }, req.body)
            .lean()
            .exec();
        const task = await ProjectModel.findOne({ _id: req.params.id });
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}


