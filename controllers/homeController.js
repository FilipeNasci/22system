const Clothes = require('../models/Clothes');


const registerClothes = async (req, res) => {
    await Clothes.create({
        name: req.body.name,
        description: req.body.description,
        cost: req.body.cost,
        price: req.body.price
    }).then(res => {
        console.log("Roupa cadastrada!");
    }).catch(error => {
        console.log("Erro ao cadastrar roupa!");
    })
    res.send();
}

const listClothes = async (req, res) => {
    const clothes = await Clothes.findAll({where: {sold: 0}});
    res.render('index', {clothes})
}

const deleteClothe = async (req, res) => {
    const id = req.body.id;
    await Clothes.destroy({where: {id}});
    res.send('ok');
}

module.exports = { registerClothes, listClothes, deleteClothe };