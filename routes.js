const database = require('./data');





//Sigin up route 
exports.signup = (req, res) => {

    let newUser = req.body;

    let { password, email } = req.body;

    let loginDetails = {
        email: email,
        password: password
    }

    database.Users.push(newUser);
    database.logins.push(loginDetails);

    res.json('user sucessfully signup');

}

const UserExists = function (email) {
    const user = database.logins.filter(user => user.email === email);
    return user;
}

//login route
exports.login = (req, res) => {

    let { email, password } = req.body;


    if (!email && !password) {
        res.status(400).json('Please fill your complete details ');
    } else if (UserExists(email)) {
        res.json('login  sucessful')
    } else {
        res.status(400).json('user not registered');
    }
    database.Users.push(newUser);

    res.json('user sucessfully signup');

}



//addcompanyinfo 

exports.addcompanyinfo = (req, res) => {

    let companyinfo = req.body;

    database.companyInfo.push(companyinfo);


    res.json('Company information  sucessfully updated');

}

exports.addproducts = (req, res) => {

    let newProducts = req.body;

    database.products.push(newProducts);


    res.json('product sucessfully added');

}

exports.getProducts = (req, res) => {

    let products = database.products;

    res.json(products);

}

//Route to get Users

exports.getUsers = (req, res) => {
    let users = database.Users;

    res.json(users)
}