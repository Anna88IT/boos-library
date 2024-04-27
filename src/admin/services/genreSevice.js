
import {GenreEntity} from "../entities/genreEntity.js";
import "../db/genreTable.js"
import {GenreDto, GenreGetDto} from "../dtos/genreDto.js";

export const creatGenre =  (async (genre) => {
    const genres = await GenreEntity.create({ genre });

    const genreDto = new GenreDto(genres.genre);
    return genreDto;
})

export const getGenres = async () => {
    try {
        const genres = await GenreEntity.findAll({ attributes: ['id', 'genre'] });
        return genres.map(genre => new GenreGetDto(genre.id, genre.genre));
    } catch (error) {
        console.error('Error fetching genres:', error);
        throw new Error('Could not fetch genres: ' + error.message); // Include error message in the thrown error
    }

}

getGenres()
    // .then(genres => console.log(genres, "11"))
    .catch(error => console.error('Error occurred while fetching genres:', error));