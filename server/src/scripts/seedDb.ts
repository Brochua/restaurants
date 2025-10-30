import { connectDB, sequelize } from "../db/init.js";
import {up} from "../seeders/20251028160656-seed-restaurants.js";

connectDB();

up(sequelize.getQueryInterface());