import {allBooks} from "../services/homeServie.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await allBooks(JSON.stringify(req.query));
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: error.message });
    }
}

// export const orderBook = async (req, res) => {
//     try {
//         const books = await allBooks(JSON.stringify())
//     }
// }