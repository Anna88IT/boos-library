import express from "express";
import authorization from "./authentication/authorizationRoutes.js";
import admin from "./admin/adminRoutes.js"
const routes = express.Router();

routes.use("/", authorization);
routes.use("/", admin);
routes.use("/", (req, res) => {
    res.send("44444444444");
})
export default routes;