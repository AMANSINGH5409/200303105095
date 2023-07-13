import express from "express";
import { getAllTrain } from "../controllers/trains.js";

const router = express.Router();

router.get("/trains", getAllTrain);

export default router;
