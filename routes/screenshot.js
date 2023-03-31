import {Router}  from "express"
import mongoose from "mongoose";
const engineerprofileRouter = Router();

const User = mongoose.model('ScreenShort', {
    username: { type: String, required: true},
    type: { type: String, required: true},
    image: { type: String,  required: true},
    uploadedAt: {type: String},
  });
  


  screenshortRouter.get("/user/screenshort", async (req, res) => {
    const tasks = await   User.find()
    res.send(tasks)
  })

  export default screenshortRouter;