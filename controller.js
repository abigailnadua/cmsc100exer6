const mongoose = require("mongoose");
const bodyParser = require("body-parser");

exports.parser = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
};

mongoose.connect("mongodb://localhost:27017/uv2l", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//check if connected to the database
const db = mongoose.connection;
db.once("open", () => {
    console.log("Connected to the database");
});

const User = mongoose.model("users", {
    username: String,
    name: String,
    age: Number
});

exports.findAll = (req,res) => {
    User.find({}, (err,users) => {
        if(!err) res.send(users);
    })
};

exports.findUser = (req,res) => {
    const username = req.query.username;
    if(Boolean(username)){
        User.findOne({username: username}, (err,user) => {
            res.send(user);
        });
    }
    res.send({});
}

exports.saveUser = (req,res) => {
    const data = req.body;

    if(Boolean(data.username) && Boolean(data.name) && Boolean(data.age)){
        const newUser = new User({
            username: data.username,
            name: data.name,
            age: data.age
        });

        newUser.save((err) => {
            if(!err) res.send(true);
        });
    }

    res.send(false);
}