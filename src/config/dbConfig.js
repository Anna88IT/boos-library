import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
export const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: "",
    database: process.env.DATABASE
});
