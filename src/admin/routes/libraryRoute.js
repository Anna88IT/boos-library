import express from "express";
import {libraryController, getAllLibraries} from "../controllers/libraryController.js";

const rout = express.Router();

rout.post("/", libraryController);
rout.get("/", getAllLibraries);

export default rout;