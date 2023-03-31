import express from "express";
import {postProjectCredential, getProjectCredential } from "../controllers/ProjectCredential.controller.js";
const router = express.Router();

router.post("/credential",postProjectCredential);
router.get("/credential",getProjectCredential);



export default router;