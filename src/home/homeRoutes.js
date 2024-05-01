import express from "express";
import home from "./routes/homeRoutes.js";

const routes = express.Router();

// routes.use("/:bookTitle", home);
routes.use("/", home);

export default routes;