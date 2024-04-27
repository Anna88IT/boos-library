import express from "express";
import {bookController, getAllBooks} from "../controllers/bookController.js";

const rout = express.Router();

rout.post("/", bookController);
rout.get("/", getAllBooks);

export default rout;