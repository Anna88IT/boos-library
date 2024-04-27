import express from "express";
import register from "./routes/registerRoutes.js";
import login from "./routes/loginRoutes.js";

const routes = express.Router();

routes.use("/register", register);
routes.use("/login", login);

export default routes;