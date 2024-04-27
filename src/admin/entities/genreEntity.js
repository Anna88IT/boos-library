import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(`${process.env.DATABASE}`, `${process.env.MYSQLUSER}`, '', {
    host: `${process.env.MYSQLHOST}`,
    dialect: 'mysql',
});

export const GenreEntity= sequelize.define('genres', {
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false
    });