const DataTypes = require("../database/db").DataTypes;
const sequelize = require("../database/db").sequelize;


const Sale = sequelize.define('Sale', {
    clothe_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    client_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    payment_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }    
})

Sale.sync({ force: false })


module.exports = Sale;