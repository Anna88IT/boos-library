import {BookEntity} from "../entities/bookEntity.js";
import "../db/booksTable.js"
import {BookDto} from "../dtos/bookDto.js";

export const createBook =  (async (bookTitle, author, releaseYear, language, description, genre_id, library_id, count, price, img) => {
    const books = await BookEntity.create({bookTitle, author, releaseYear, language, description, genre_id, library_id, count, price, img});

    const bookDto = new BookDto(
        books.bookTitle,
        books.author,
        books.releaseYear,
        books.language,
        books.description,
        books.genre_id,
        books.library_id,
        books.count,
        books.price,
        books.img);
    return bookDto;
})

export const getBooks = async () => {
    try {
        const allbooks = await BookEntity.findAll();
        return allbooks.map(book =>new BookDto(
            book.bookTitle,
            book.author,
            book.releaseYear,
            book.language,
            book.description,
            book.genre_id,
            book.library_id,
            book.count,
            book.price,
            book.img));
    } catch (error) {
        throw new Error('Could not fetch books 2222');
    }
}

getBooks()
    // .then(books => console.log(books, "11"))
    .catch(error => console.error('Error occurred while fetching books: 33333', error));