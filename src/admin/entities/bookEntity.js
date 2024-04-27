import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
import {GenreEntity} from "./genreEntity.js";
import {LibraryEntity} from "./libraryEntity.js";
dotenv.config();

const sequelize = new Sequelize(`${process.env.DATABASE}`, `${process.env.MYSQLUSER}`, '', {
    host: `${process.env.MYSQLHOST}`,
    dialect: 'mysql',
});

export const BookEntity= sequelize.define('books', {
        bookTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        releaseYear: {
            type: DataTypes.STRING,
            allowNull: false
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        library_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        count: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    });

BookEntity.belongsTo(GenreEntity, { foreignKey: 'genre_id' });
BookEntity.belongsTo(LibraryEntity, { foreignKey: 'library_id' });