import { type Dialect, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbDialect = (process.env.DB_DIALECT || "mysql") as Dialect;


export const sequelize = new Sequelize(dbName ?? "", dbUser ?? "", dbPassword, {
    host: dbHost ?? "localhost",
    port: Number(dbPort),
    dialect: dbDialect,
    dialectOptions: { decimalNumbers: true },
    // logging: console.debug,
    ssl: true
});


export async function connectDB() {
    if (!dbName || !dbUser || !dbPassword || !dbPort || !dbHost) {
        console.warn("Username, Password, port, or host for database is undefined...");
    }
    await sequelize.authenticate();
    if (process.env.NODE_ENV !== "production") {
        // await sequelize.sync({ alter: true });
    }
}