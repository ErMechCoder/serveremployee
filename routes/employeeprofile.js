import express from "express";
import {postEmployeeProfile,getEmployeeProfile } from "../controllers/employeeprofile.controller.js";
const router = express.Router();

router.post("/profile",postEmployeeProfile);
router.get("/profile",getEmployeeProfile);



export default router;