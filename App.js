const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const homeRouter = require('./routes/homeRouter');
const clientRouter = require('./routes/clientRouter');
const adminRouter = require('./routes/adminRouter');
const saleRouter = require('./routes/saleRouter');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/cliente', clientRouter);
app.use('/admin', adminRouter);
app.use('/vendas', saleRouter);
app.use('/', homeRouter);

app.listen(process.env.PORT, ()=>{
    console.log("Server running on " + process.env.PORT);
 })