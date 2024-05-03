import express from "express";
import {getAllBooks, orderBooks} from "../conrollers/homeController.js"
import {checkAuthentication} from "../../authentication/middlwares/checkAuth.js";

const routes = express.Router();
routes.use(checkAuthentication);
routes.get("/",  getAllBooks);
routes.get("/:bookTitle",  getAllBooks);
routes.get("/:genre",  getAllBooks);
routes.get("/order:id", orderBooks);

export default routes;
