const Sale = require('../models/Sale');
const Clothes = require('../models/Clothes');
const Client = require('../models/Client');
const Payments = require('../models/Payment');


const renderSale = async (req, res) => {
    let clotheId = req.params.id;
    const clothes = await Clothes.findOne({ where: { id: clotheId } });

    const clients = await Client.findAll();
    const payments = await Payments.findAll();
    res.render('sale', { clothes, clients, payments })
}


const registerSale = async (req, res) => {
    let clotheId = req.body.clotheId;
    let clientId = req.body.clients;
    let paymentId = req.body.payment;
    let price = req.body.price;

    console.log(clotheId + ' / ' + clientId + ' / ' + price);
    res.send();

    await Clothes.update({ sold: true },
        {
            where: {
                id: clotheId
            }
        })
    await Sale.create({
        clothe_id: clotheId,
        client_id: clientId,
        payment_id: paymentId,
        price: price
    }).then(res => {
        console.log("Venda cadastrada!");
    }).catch(error => {
        console.log("Erro ao cadastrar venda!");
    })
    res.send();
}

const listSales = async (req, res) => {
    const sales = await Sale.findAll();
    const objetos = [];

    for (let i = 0; i < sales.length; i++) {
        let peca = await Clothes.findOne({ where: { id: sales[i].clothe_id } });
        let venda = {
            name: peca.name,
            cost: peca.cost,
            price: sales[i].price
        }
        objetos.push(venda);
    }

    res.render('sales', { objetos })
}


module.exports = { renderSale, registerSale, listSales };