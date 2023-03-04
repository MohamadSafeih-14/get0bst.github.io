const express = require('express');

const bodyParser = require('body-parser');

require('dotenv').config();

const Stripe = require('stripe')(process.env.SECRET_KEY);

var cors = require('cors');




const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

const ports = process.env.PORT || 5000;

app.listen(ports, error => {
    if (error) throw error;
    console.log("Your Server Is Running on Port 500")
});



app.post('/payment', async (req, res) => {
    let status, error;

    const {token, amount} = req.body;
    try {
        await Stripe.charges.create({
            source: token.id,
            amount,
            currency: 'usd',
        });
        res.status(200).json({'success' : true, 'result': result})
    } catch (error) {
        console.log(error);
        status = 'Failure';
        res.json({error, status})
    }
})