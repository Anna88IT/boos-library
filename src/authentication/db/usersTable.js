import {db} from "../../config/dbConfig.js"

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        firstName VARCHAR(50) NOT NULL,
        lastName VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        phoneNumber VARCHAR(100) NOT NULL,
        regDate TIMESTAMP NOT NULL DEFAULT NOW()
    )
`;

db.query(createUsersTable, (error, results, fields) => {
    if(error) {
        console.log("Error creating table", error);
        return
    }
    console.log("Table created successfully");
})