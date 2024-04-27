import express from "express";
import {genreController, getAllGenres} from "../controllers/genreController.js";

const rout = express.Router();

rout.post("/", genreController);
rout.get("/", getAllGenres);

export default rout;