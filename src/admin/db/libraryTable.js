import {db} from "../../config/dbConfig.js";

const createLibrariesTable = `
    CREATE TABLE IF NOT EXISTS libraries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        workingHours JSON NOT NULL,
        address VARCHAR(255) NOT NULL,
        regDate TIMESTAMP NOT NULL DEFAULT NOW()
)
`;

db.query(createLibrariesTable, (error) => {
    if(error) {
        console.log("Error creating table", error);
        return;
    }
    console.log("Table created successfully");
})