const Payments = require('../models/Payment');


const registerPayments = async (req, res) => {
    await Payments.create({
        name: req.body.name,
        description: req.body.description
    }).then(res => {
        console.log("Forma de pagamento cadastrada!");
    }).catch(error => {
        console.log("Erro ao cadastrar forma de pagamento!");
    })
    res.send();
}

const listPayments = async (req, res) => {
    const Payments = await Payments.findAll({where: {sold: 0}});
    res.render('index', {Payments})
}

module.exports = { registerPayments, listPayments };