import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientProfileRoutes from "./routes/clientprofile.js";
import employeeProfileRoutes from "./routes/employeeprofile.js";
import projecteRoutes from "./routes/project.js";
import credentialRoutes from "./routes/ProjectCredential.js";
import taskRoutes from "./routes/ProjectTask.js";


/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// User model
const User = mongoose.model('ScreenShort', {
  username: { type: String, required: true},
  type: { type: String, required: true},
  image: { type: String,  required: true},
  uploadedAt: {type: String},
});

/* ROUTES */


/* Employee Management*/

app.use("/api/engineer",employeeProfileRoutes);

app.get("/api/screenshort", async (req, res) => {
  const tasks = await  User.find()
  res.send(tasks)
})
/* Client Management*/
app.use("/api/client",clientProfileRoutes);
/* Project Management*/
app.use("/api/project",projecteRoutes);
app.use("/api/project",taskRoutes)
app.use("/api/project",credentialRoutes)



/* MONGOOSE SETUP */
mongoose.set( 'strictQuery', false);
const PORT = process.env.PORT || 9000;
// mongoose.set('strictQuery', true
// )
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

 
  })
  .catch((error) => console.log(`${error} did not connect`));
