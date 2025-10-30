import { DataTypes } from "sequelize";
import { sequelize } from "../db/init.js";

const Restaurant = sequelize.define('Restaurant', {
    name: {
        type: DataTypes.STRING(63),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(511)
    },
    notes: {
        type: DataTypes.STRING(255)
    },
    mapsPlaceId: {
        type: DataTypes.STRING(63)
    },
    address: {
        type: DataTypes.STRING(127)
    },
    area: {
        type: DataTypes.STRING(63)
    },
    phoneNumber: {
        type: DataTypes.STRING(15)
    },
    longitude: {
        type: DataTypes.DECIMAL(9, 7)
    },
    latitude: {
        type: DataTypes.DECIMAL(9, 7)
    },
    mapsRating: {
        type: DataTypes.DECIMAL(2, 1)
    },
    rating: {
        type: DataTypes.DECIMAL(2, 1),
    },
    mapsUrl: {
        type: DataTypes.STRING
    },
    hours: {
        type: DataTypes.TEXT,
        get() {
            return this.getDataValue('hours')?.split(';') as string[];
        },
        set(val: string[]) {
            this.setDataValue('hours', val.join(';'))
        }
    },
    website: {
        type: DataTypes.STRING
    }
});

export default Restaurant;