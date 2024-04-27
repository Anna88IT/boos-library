import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(`${process.env.DATABASE}`, `${process.env.MYSQLUSER}`, '', {
    host: `${process.env.MYSQLHOST}`,
    dialect: 'mysql',
});

export const LibraryEntity= sequelize.define('libraries', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        workingHours: {
            type: DataTypes.JSON,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    });
