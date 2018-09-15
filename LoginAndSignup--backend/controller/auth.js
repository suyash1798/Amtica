const User = require('../models/userModel');
const HttpStatus = require('http-status-codes');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {
    async createUser(req, res)
{
    console.log(req.body.email);
    const user = await
    User.findOne({email: req.body.email}, function (err, data) {
        console.log(err);
    });
    if (!user) {
        var password;
        await bcrypt.hash(req.body.password, 10, function (err, hash) {
            const createUser = new User({
                email: req.body.email,
                password: hash
            });
            console.log()
            createUser.save();
            res.status(HttpStatus.OK).send({message: "User Created"});
        });

    }
    if (user) {
        res.status(HttpStatus.BAD_REQUEST).send({message: "User already exists"});
    }
}
,
async login(req, res)
{

    const user = await
    User.findOne({email: req.body.email}, function (err, data) {
        console.log(err);
    });
    console.log('user',user,'match',req.body.password,user.password);
    bcrypt.compare(req.body.password, user.password, function (err, data) {
        console.log(data);
        if (data) {
            const token = jwt.sign({data: user}, "suyash");
            res.status(HttpStatus.OK).send({message: "User Login", token: token,user:user});
}
else
{
    res.status(HttpStatus.BAD_REQUEST).send({message: "User not exists"});
}
})
;

}
}
;