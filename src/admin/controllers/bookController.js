import {createBook, getBooks} from "../services/bookServices.js";

export const bookController = async (req, res) => {
    try {
        const { bookTitle, author, releaseYear, language, description, genre_id, library_id, count, price, img } = req.body;
        res.json(createBook(bookTitle, author, releaseYear, language, description, genre_id, library_id, count, price, img));
    } catch (err) {
        console.error('Error creating books:', err);
        res.status(500).json({ error: 'Could not create books' });
    }
}

export const getAllBooks = async (req, res) => {
    try {
        const books = await getBooks();
        res.status(200).json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: error.message });
    }
}