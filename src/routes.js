import express from "express";
import authorization from "./authentication/authorizationRoutes.js";
import admin from "./admin/adminRoutes.js";
import home from "./home/homeRoutes.js"
const routes = express.Router();
import register from "./authentication/routes/registerRoutes.js"
import login from "./authentication/routes/loginRoutes.js"

routes.use("/auth", authorization);
// routes.use("/auth", login);
routes.use("/", admin);
routes.use("/", home);
export default routes;