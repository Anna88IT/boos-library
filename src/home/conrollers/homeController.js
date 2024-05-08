import {allBooks, getBookInfo} from "../services/homeServie.js";


export const getAllBooks = async (req, res) => {
    try {
        console.log(req.session.userData, "home page");
        const books = await allBooks(JSON.stringify(req.query));
        const isAuthenticated = res.locals.isAuthenticated;
        res.status(200).json({ books, isAuthenticated });
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: error.message });
    }
}

export const orderBooks = async (req, res) => {

    try {
        const books = await getBookInfo(JSON.stringify(req.query));
        const isAuthenticated = res.locals.isAuthenticated;
        res.status(200).json({ books, isAuthenticated });
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: error.message });
    }
}