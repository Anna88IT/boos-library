import {LibraryEntity} from "../entities/libraryEntity.js";
import "../db/libraryTable.js"
import {LibraryDto, LibraryGetDto} from "../dtos/libraryDto.js";

export const createLibrary =  (async (name, address, workingHours) => {
    const libraries = await LibraryEntity.create({ name, address, workingHours});
    const libraryDto = new LibraryDto(libraries.name, libraries.address, libraries.workingHours);
    return libraryDto;
})

export const getLibraries = async () => {
    try {
        const allLibraries = await LibraryEntity.findAll({attributes: ["id", "name", "workingHours", "address"]});
        return allLibraries.map(library =>new LibraryGetDto(library.id, library.name, library.workingHours, library.address));
    } catch (error) {
        throw new Error('Could not fetch libraries');
    }
}

getLibraries()
    // .then(libraries => console.log(libraries, "11"))
    .catch(error => console.error('Error occurred while fetching libraries:', error));