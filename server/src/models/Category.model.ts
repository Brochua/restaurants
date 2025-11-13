import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/init.js";
import Restaurant from "./Restaurant.model.js";

interface CategoryAttributes {
    id: string;
}

const Category = sequelize.define<Model<CategoryAttributes>>('Category', {
    id: {
        primaryKey: true,
        type: DataTypes.STRING(15),
    }
}, {timestamps: false});

Category.belongsToMany(Restaurant, {
    through: 'RestaurantCategories', // Use string name, not model
    timestamps: false
});
Restaurant.belongsToMany(Category, {
    through: 'RestaurantCategories', // Use string name, not model
    timestamps: false
});

export default Category;