const Client = require('../models/Client');


const registerClient = async (req, res) => {
    if (req.body.name != "") {
        await Client.create({
            name: req.body.name,
            email: req.body.email,
            tel: req.body.tel
        }).then(res => {
            console.log("Cliente cadastrada!");
        }).catch(error => {
            console.log(error);
        })
    }else{
        res.status(400).send('error');
    }
}

const listClient = async (req, res) => {
    const Client = await Client.findAll();
    res.render('index', { Client })
}

module.exports = { registerClient, listClient };