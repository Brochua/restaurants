import { DataTypes } from "sequelize";
import { sequelize } from "../db/init.ts";
import Restaurant from "./Restaurant.model.ts";

const Cuisine = sequelize.define('Cuisine', {
    id: {
        primaryKey: true,
        type: DataTypes.STRING(31),
    },
}, {timestamps: false});

Cuisine.belongsToMany(Restaurant, {
    through: 'RestaurantCuisines', // Use string name, not model
    timestamps: false
});
Restaurant.belongsToMany(Cuisine, {
    through: 'RestaurantCuisines', // Use string name, not model
    timestamps: false
});

export default Cuisine;