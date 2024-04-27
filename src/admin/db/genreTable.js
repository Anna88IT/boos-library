import {db} from "../../config/dbConfig.js";

const createGenreTable = `
    CREATE TABLE IF NOT EXISTS genres (
        id INT AUTO_INCREMENT PRIMARY KEY,
        genre VARCHAR(100) NOT NULL,
        regDate TIMESTAMP NOT NULL DEFAULT NOW()
    )
`;

db.query(createGenreTable, (error, results, fields) => {
    if(error) {
        console.log("Error creating table", error);
        return
    }
    console.log("Table created successfully");
})