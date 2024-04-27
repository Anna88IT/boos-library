import express from "express";
import {registerController} from "../controllers/registerController.js";
import {checknotAuthentication} from "../middlwares/checkAuth.js";

const rout = express.Router();

rout.get("/", checknotAuthentication);
rout.post("/", registerController);

export default rout;

