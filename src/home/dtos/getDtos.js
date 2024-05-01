export class BooksGetDto {
    constructor(id, bookTitle, author, genre_id, genre, name, price, count, img) {
        this.id = id;
        this.bookTitle = bookTitle;
        this.author = author;
        this.genre_id = genre_id;
        this.genre = genre;
        this.library = name;
        this.price = price;
        this.count = count;
        this.img = img;
    }
}