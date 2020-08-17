const DataTypes = require("../database/db").DataTypes;
const sequelize = require("../database/db").sequelize;


const Clothes = sequelize.define('Clothes', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    cost: {
        type: DataTypes.DECIMAL(10, 2)
    },
    price: {
        type: DataTypes.DECIMAL(10, 2)        
    },
    sold: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

Clothes.sync({ force: false })


module.exports = Clothes;