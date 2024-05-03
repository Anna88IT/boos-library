import express from "express";
import { login, logout, loginGet } from "../controllers/loginController.js";
import { checknotAuthentication, checkAuthentication } from "../middlwares/checkAuth.js"
const routes = express.Router();

routes.get("/login", checknotAuthentication);
routes.post("/login", login);
routes.get("/logout", checkAuthentication, logout);

export default routes;