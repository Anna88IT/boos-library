import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./db/connection.js"
import session from "express-session";
import passport from "passport";
import routes from "./routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import MySQLStore from 'express-mysql-session';
dotenv.config();
const port = process.env.PORT;
const app = express();
// app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000/', // Replace with your React app domain
//     credentials: true // Allow credentials (cookies)
// }));
console.log(process.env.DATABASE)
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
    secret: "ajkshdfkjhaskjdhfkjahsdf",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(cookieParser());

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

// passport.use(new passportLocal.Strategy({
//     usernameField: "email"
// }, async (email, password, done) => {
//     const user = info.find(user => user.email === email)
//
//     if(user === undefined) {
//         return done(null, null, {message: "incorrect email"})
//     }
//
//     if(await bcrypt.compare(password, user.password)) {
//         return done(null, user)
//     }
//
//     done(null, null, {message: "incorrect password"})
// }))
//
// passport.serializeUser((user, done) => {
//     done(null, user.id)
// });
// passport.deserializeUser((id, done) => {
//     done(null, info.find(user => user.id === id))
// })
app.use(routes);

app.listen(port, () => {
    console.log(`The server is listening port ${port}`);
});
