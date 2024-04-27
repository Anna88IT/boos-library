import {creatGenre, getGenres} from "../services/genreSevice.js";

export const genreController = async (req, res) => {
    try {
        const { genre } = req.body;
        res.json(creatGenre(genre));
    } catch (err) {
        console.error('Error creating genre:', err);
        res.status(500).json({ error: 'Could not create genre' });
    }
}

export const getAllGenres = async (req, res) => {
    try {
        const genres = await getGenres();
        res.status(200).json(genres);
    } catch (error) {
        console.error('Error fetching genres:', error);
        res.status(500).json({ error: error.message });
    }
}