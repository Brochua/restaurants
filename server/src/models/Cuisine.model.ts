import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/init.js";
import Restaurant from "./Restaurant.model.js";

export interface CuisineAttributes {
    id: string;
}

const Cuisine = sequelize.define<Model<CuisineAttributes>>('Cuisine', {
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