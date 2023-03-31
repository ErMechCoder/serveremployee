import express from "express";
import {postClientProfile,getClientProfile } from "../controllers/clientprofile.controller.js";

const router = express.Router();

router.post("/profile",postClientProfile);
router.get("/profile",getClientProfile);

export default router;