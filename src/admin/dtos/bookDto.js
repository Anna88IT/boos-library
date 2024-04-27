export class BookDto {
    constructor(bookTitle, author, releaseYear, language, description, genre_id, library_id, count, price, img) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.releaseYear = releaseYear;
        this.language = language;
        this.description = description;
        this.genre_id = genre_id;
        this.library_id = library_id;
        this.count = count;
        this.price = price;
        this.img = img;
    }
}

