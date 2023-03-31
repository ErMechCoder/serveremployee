import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
    projectName: { type: String},
  clientId: { type: String},
  startDate: { type: String},
  endDate: { type: String},
  priority: { type: String},
  addEngineer:{ type: String},
  projectDescription:{ type: String},
  file:{ data: Buffer, contentType: String },
  project: {type: mongoose.Schema.Types.ObjectId,  ref: 'Project'}
  
   
},
{ timestamps: true }
);

const Project = mongoose.model("Project", ProjectSchema );
export default Project;
