const User = require("../models/auth");
const { normalizeErrors } = require("../helpers/mongoose");
const bcrypt = require('bcrypt-nodejs')
const config = require("../config/dev");
const session = require('express-session');
const jwt = require("jsonwebtoken");
// Setting up nodemailer
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

exports.notiMan = (req, res) => {
    const transport = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: config.SEND_GRID_USERNAME,
            pass: config.SEND_GRID_PASSWORD
        }
    })

    const mailOptions = {
        to: 'mkavo92@gmail.com',
        from: 'customerTracker@mail.com',
        subject: 'New Customer Has Donated',
        text: 'A new Customer has just donate, please go to this http://localhost4200 to get more info'
    }
    transport.sendMail(mailOptions, (err) => {
        console.log(err)
    })
}


exports.getUser = (req, res) => {
    exports.createAuth = (req, res, next) => {
        const { email, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const auth = new Auth({
            email,
            password: hash
        });

        auth
            .save()
            .then(result => {
                res.status(201).json({
                    message: "User created!",
                    result: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    }
}


// Login User
exports.loginAuth = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const auth = await User.findOne({ email }).lean();

        const isMatched = bcrypt.compareSync(password, auth.password)

        if (!isMatched) {
            return res.status(401).json({
                message: "Invalid Credentials"
            })
        }

        const { password: userPassword, __v, ...user } = auth;

        const token = jwt.sign({ email: user.email, id: user._id }, 'secret_long_string');
        return res.status(201).json({ token, user })
    } catch (error) {
        return res.status(500).json({ message: 'Email not found. Please check your email again' })
    }
}


// Facebook login
exports.authenticateFacebook = (req, res, next) => {
    req.session
}


// Check authentication
exports.authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        const user = parseToken(token);

        User.findById(user.userId, (err, user) => {
            if (err) {
                return res.status(422).send({ errors: normalizeErrors(err.errors) });
            }

            if (user) {
                res.locals.user = user;
                next();
            } else {
                return notAuthorized(res);
            }
        });
    } else {
        return notAuthorized(res);
    }
};

exports.confirmManager = async (req, res, next) => {
    const { managerString } = req.body;
    try {
        const hash = bcrypt.hashSync("home");
        const isMatched = bcrypt.compareSync(managerString, hash);
        if (!isMatched) {
            return res
                .status(500)
                .json({ isAuthenticated: false, message: "Confirmation failed" });
        } else {
            return res
                .status(201)
                .json({ isAuthenticated: true, message: "Manager Confirmed" });
        }
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            isAuthenticated: false,
            message: "Auth failed"
        });
    }
};

function parseToken(token) {
    return jwt.verify(token.split(" ")[1], config.SECRET);
}

function notAuthorized(res) {
    return res.status(401).send({
        err: [
            {
                title: "Not authorized!",
                detail: "You need to login to get access"
            }
        ]
    });
}


exports.sendEmail = () => {
    var options = {
        auth: {
            api_user: 'tintinla',
            api_key: 'Botrinty123!'
        }
    }

    var client = nodemailer.createTransport(sgTransport(options));

    // Nodemails 
    var email = {
        from: 'homesweethomek@gmail.com',
        to: user.email,
        subject: 'Home Sweet Home',
        text: 'Hello <strong>${user.firstName}</strong>,<br><br>Thank you for registering at Home Sweet Home.',
        html: `Hello <strong>${user.firstName}</strong>,<br><br>Thank you for registering at Home Sweet Home.`
    };

    client.sendMail(email, function (err, info) {
        if (err) {
            console.log(error);
        }
        else {
            console.log('Message sent: ' + info.response);
        }
    });
}
