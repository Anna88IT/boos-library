import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./db/connection.js"
import session from "express-session";
import MySQLStore from 'express-mysql-session';
import { SubClass } from './modules/subclass.js';
import mysql from 'mysql2/promise';
import passport from "passport";
import routes from "./routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';



dotenv.config();
const port = process.env.PORT;

const app = express();


app.use(cors({
    origin: 'http://localhost:3000', // Replace with your React app domain
    credentials: true // Allow credentials (cookies)
}));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// MySQL connection configuration
const dbConfig = {
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    port: 3306,
    password: "",
    database: process.env.DATABASE
};
//
// const sessionConnection = mysql.createConnection(dbConfig);
// const sessionStore = new MySQLStore({
//     expiration: 10800000,
//     createDatabaseTable: true,
//     schema: {
//         tableName: "sessionTbl",
//         columnNames: {
//             id: "session_id",
//             expires: "expires",
//             data: "data"
//         }
//     }
// }, sessionConnection)
// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

// Create an instance of MySQLStore
// const sessionStore = new MySQLStore({
//     schema: {
//         tableName: 'sessions',
//         columnNames: {
//             session_id: 'session_id',
//             expires: 'expires',
//             data: 'data',
//         },
//     },
// }, pool);

app.use(session({
    // store: sessionStore,
    secret: "ajkshdfkjhaskjdhfkjahsdf",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true if your app is served over HTTPS
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 // Session expires after 1 day (adjust as needed)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cookieParser());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//     );
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     if (req.method === "OPTIONS") {
//         return res.sendStatus(200);
//     }
//     next();
// });


app.use(routes);

app.listen(port, () => {
    console.log(`The server is listening port ${port}`);
});
