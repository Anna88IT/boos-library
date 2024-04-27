import express from "express";
import library from "./routes/libraryRoute.js";
import genre from "./routes/genreRoute.js"
import book from "./routes/bookRoute.js"

const routes  = express.Router();

routes.use("/library", library);
routes.use("/genre", genre);
routes.use("/book", book);

export default routes;
