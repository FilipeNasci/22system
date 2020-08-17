const DataTypes = require("../database/db").DataTypes;
const sequelize = require("../database/db").sequelize;


const Client = sequelize.define('Client', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING, 
        defaultValue: 'nao informado'
    },
    tel: {
        type: DataTypes.STRING, 
        defaultValue: 'nao informado'
    }    
})

Client.sync({ force: false })


module.exports = Client;