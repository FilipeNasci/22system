const DataTypes = require("../database/db").DataTypes;
const sequelize = require("../database/db").sequelize;


const Payment = sequelize.define('Payment', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING, 
        defaultValue: 'nao informado'
    } 
})

Payment.sync({ force: false })


module.exports = Payment;