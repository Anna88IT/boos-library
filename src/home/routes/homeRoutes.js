import express from "express";
import {getAllBooks} from "../conrollers/homeController.js"
import {checkAuthentication} from "../../authentication/middlwares/checkAuth.js";

const routes = express.Router();

routes.get("/", getAllBooks);
routes.get("/:bookTitle",  getAllBooks);
routes.get("/:genre",  getAllBooks);

export default routes;
