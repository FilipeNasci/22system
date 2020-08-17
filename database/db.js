const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('storesystem', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connection established!")
}).catch((error) => {
    console.log("Connection failed!")
});


module.exports = {sequelize, DataTypes}