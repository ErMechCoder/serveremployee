import express from "express";
import {postProjectTask, getProjectTask} from "../controllers/ProjectTask.controller.js";
const router = express.Router();

router.post("/task",postProjectTask);
router.get("/task",getProjectTask);



export default router;