import {createUser} from "../services/registerService.js";

export const registerController = async (req, res) => {
    try {
        console.log(req.body)
        const { firstName, lastName, email, phoneNumber, password} = req.body;
        res.json(createUser(firstName, lastName, email, phoneNumber, password));
    } catch (err) {
        console.error('Error creating users:', err);
        res.status(500).json({ error: 'Could not create users' });
    }
}
