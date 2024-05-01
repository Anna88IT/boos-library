import express from "express";
import { login, logout } from "../controllers/loginController.js";
import { checknotAuthentication } from "../middlwares/checkAuth.js"
const routes = express.Router();


// routes.get("/", checknotAuthentication, loginGet);
routes.post("/", login);
routes.get("/logout", logout);

export default routes;