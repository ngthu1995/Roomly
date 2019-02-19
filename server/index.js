const express = require("express");
const mongoose = require("mongoose");

const app = express();

const config = require("./config/dev");

const userRoutes = require("./routes/auth");

const path = require('path')
const cors = require("cors");
const bodyParser = require("body-parser");

const passort = require('./middleware/passport')

app.use(cors());
mongoose
    .connect(config.DB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log('connected to db')
    })
    .catch(err => console.log(err));

app.use(bodyParser.json());


app.use("/api/users", userRoutes);



if (process.env.NODE_ENV === 'production') {
    const appPath = path.join(__dirname, '../client/dist/', 'rental')

    // we want to use all the express static 
    app.use(express.static(appPath))

    // this will catch every request
    app.get('*', (req, res) => {
        res.sendfile(path.resolve(appPath, 'index.html'))
    })
    //
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("I am running");
});
