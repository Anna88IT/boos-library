import {db} from "../config/dbConfig.js";

db.connect((err) => {
    if(err) {
        console.log(err, "555");
    } else {
        console.log("MySql connected");
    }
})
