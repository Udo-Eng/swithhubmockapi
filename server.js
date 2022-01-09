const database = require('./data');
const express = require('express')
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(express.json());


app.get('/users', routes.getUsers)

app.post('/login', routes.login);

app.post('/signup', routes.signup)

app.post('/companyinfo', routes.addcompanyinfo);

app.post('/product/add', routes.addproducts);

app.get('/products', routes.getProducts)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`)
})


