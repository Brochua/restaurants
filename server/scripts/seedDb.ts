import { connectDB, sequelize } from "../db/init.ts";
import {down, up} from "../seeders/20251028160656-seed-restaurants.ts";

connectDB();

up(sequelize.getQueryInterface());