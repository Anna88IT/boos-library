import {db} from "../../config/dbConfig.js";

const createBookTable = `
    CREATE TABLE IF NOT EXISTS books (
        id INT AUTO_INCREMENT PRIMARY KEY,
        bookTitle VARCHAR(100) NOT NULL,
        author VARCHAR (100) NOT NULL,
        releaseYear INT(4) NOT NULL,
        language VARCHAR (100) NOT NULL,
        description VARCHAR (255) NOT NULL,
        genre_id INT NOT NULL,
        library_id INT NOT NULL,
        count INT(4) NOT NULL,
        price FLOAT(10) NOT NULL,
        img VARCHAR(100) NOT NULL,
        regDate TIMESTAMP NOT NULL DEFAULT NOW(),
        FOREIGN KEY (library_id) REFERENCES libraries(id),
        FOREIGN KEY (genre_id) REFERENCES genres(id)
)
`;

db.query(createBookTable, (error) => {
    if(error) {
        console.log("Error creating table", error);
        return;
    }
    console.log("Table created successfully");
})