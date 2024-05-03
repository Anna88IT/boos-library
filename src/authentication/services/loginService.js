import { UserEntity } from "../entities/registerEntity.js";

export const getAllUsers = async () => {
    try {
        const data = await UserEntity.findAll();
        return JSON.parse(data);
    } catch (error) {
        throw new Error('Error fetching users');
    }
};
export const getUserByEmail = async (email) => {
    try {
        const user = await UserEntity.findOne({where: {email: email}});
        return user
    } catch (error) {
        throw new Error('Error fetching user by email');
    }
}

export const getUserById = async (id) => {
    try {
        const user = await UserEntity.findOne({where: {id: id}});
        return user
    } catch (error) {
        throw new Error('Error fetching user by email');
    }
}