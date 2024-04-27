import bcypt from "bcrypt";
import {UserEntity} from "../entities/registerEntity.js";
import "../db/usersTable.js";
import {RegisterDto} from "../dtos/registerDto.js";

export const createUser =  (async (firstName, lastName, email, phoneNumber, password) => {
    const passwordHashed = await bcypt.hash(password, 10);
    const users = await UserEntity.create({firstName, lastName, email, phoneNumber, password: passwordHashed});

    const userDto = new RegisterDto(
        users.firstName,
        users.lastName,
        users.email,
        users.phoneNumber,
        users.password,
        )
    return userDto;
})
