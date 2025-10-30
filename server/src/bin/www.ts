#!/usr/bin/env ts-node
import app from '../api.js';
import dotenv from 'dotenv';
import { sequelize, connectDB } from '../db/init.js';
import { Server } from 'http';

dotenv.config();

const port = Number(process.env.PORT || 3000);
const MAX_RETRIES_SERVER = Number(process.env.SERVER_MAX_RETRIES || 3);
const MAX_RETRIES_DB = Number(process.env.DB_CONNECTION_MAX_RETRIES || 3);

let server: Server;

for (let i = 0; i < MAX_RETRIES_SERVER; i++) {
    try {
        server = app.listen(port, () => 
            console.log(`Server listening at port ${port} in ${app.get('env')} mode at 0.0.0.0`)
        )
        break;
    } catch (e) {
        console.error("Could not start server");
        console.dir(e);
        if (i + 1 === MAX_RETRIES_SERVER) {
            cleanup();
        } else {
            console.log("Retrying server startup...")
        }
    }
}

for (let i = 0; i < MAX_RETRIES_DB; i++) {
    try {
        connectDB();
        console.log('Connection has been established successfully.');
        break;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        if (i + 1 === MAX_RETRIES_DB) {
            cleanup();
        } else {
            console.log("Retrying database connection...")
        }
    }
}

/**
 * Closes active DB connection and server and exits
 */
async function cleanup() {
    try {
        await sequelize.close();
        console.debug('Database connection closed on SIGINT');
        if (server) {
            server.close(() => {
                console.debug('HTTP server closed');
            });
        }
        process.exit();
    } catch (error) {
        console.error(error);
        console.dir(error);
        process.exit();
    }
}

process.on('SIGINT', async () => {
  console.debug('SIGINT signal received: closing HTTP server');
  cleanup();
});
