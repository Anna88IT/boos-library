import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./db/connection.js"
import routes from "./routes.js";
import passport from "passport";
import session from "express-session";
import cors from "cors";

dotenv.config();
const port = process.env.PORT;
const app = express();

// app.use(cors({
//     origin: 'http://localhost:3000/', // Replace with your React app domain
//     credentials: true // Allow credentials (cookies)
// }));

app.use(session({
    secret: "ajkshdfkjhaskjdhfkjahsdf",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));
app.use(passport.session());
app.use(passport.initialize());


app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});
app.use(routes);

app.listen(port, () => {
    console.log(`The server is listening port ${port}`);
});
