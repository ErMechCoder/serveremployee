import express from "express";
import {postProject,getProject,deleteProject,patchProject } from "../controllers/project.controller.js";

const router = express.Router();

router.post("/create",postProject);
router.get("/get",getProject);
router.delete("/delete/:id",deleteProject);
router.patch("/update/:id",patchProject );

export default router;





