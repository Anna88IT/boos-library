import {createLibrary, getLibraries} from "../services/libraryService.js";

export const libraryController = async (req, res) => {
    try {
        const { name, address, workingHours } = req.body;
        res.json(createLibrary(name, address, workingHours));
    } catch (err) {
        console.error('Error creating library:', err);
        res.status(500).json({ error: 'Could not create library' });
    }
}

export const getAllLibraries = async (req, res) => {
    try {
        const libraries = await getLibraries();
        res.status(200).json(libraries);
    } catch (error) {
        console.error('Error fetching libraries:', error);
        res.status(500).json({ error: error.message });
    }
}