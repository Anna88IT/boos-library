import {BookEntity} from "../../admin/entities/bookEntity.js"
import {GenreEntity} from "../../admin/entities/genreEntity.js";
import {LibraryEntity} from "../../admin/entities/libraryEntity.js";
import {BooksGetDto} from "../dtos/getDtos.js";

export const allBooks = async (params) => {
    const param = JSON.parse(params)
    console.log(param)
    let books;
    let uniqueBooks;
    try {
        if(Object.keys(param).length !== 0) {
            books = await BookEntity.findAll({
                include: [
                    {
                        model: GenreEntity,
                        attributes: ['genre']
                    },
                    {
                        model: LibraryEntity,
                        attributes: ['name']
                    }
                ],
                    where: param
            })
        } else {
            books = await BookEntity.findAll({
                include: [
                    {
                        model: GenreEntity,
                        attributes: ['genre'] // Include only the 'genre' attribute from the GenreEntity model
                    },
                    {
                        model: LibraryEntity,
                        attributes: ['name'] // Include only the 'name' attribute from the LibraryEntity model
                    }
                ]
            });



        }

        if(param.hasOwnProperty("bookTitle")){
            uniqueBooks = books
        } else {
            uniqueBooks = books.reduce((unique, book) => {
                if (!unique.some(existingBook => existingBook.bookTitle === book.bookTitle)) {
                    unique.push(book);
                }
                return unique;
            }, []);
        }

        return uniqueBooks.map(book => new BooksGetDto(
            book.id,
            book.bookTitle,
            book.author,
            book.genre_id,
            book.genre,
            book.library,
            book.price,
            book.count,
            book.img
        ))
    } catch (error) {
        throw new Error("Could not fetch books");
    }
}

export const getBookInfo = async (params) => {
    const param = JSON.parse(params);
    console.log(param, "param")
    console.log(param, "in order param");
        try {
              const  book = await BookEntity.findOne({
                    include: [
                        {
                            model: GenreEntity,
                            attributes: ['genre']
                        },
                        {
                            model: LibraryEntity,
                            attributes: ['name']
                        }
                    ],
                    where: param
                })

            return new BooksGetDto(
                book.id,
                book.bookTitle,
                book.author,
                book.genre_id,
                book.genre,
                book.library,
                book.price,
                book.count,
                book.img
            )
        } catch (error) {
            throw new Error("Could not fetch books");
        }

}


