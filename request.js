const request = require("request");

const data = {
    username: "auxiliaryLots",
    name: "ML Lots",
    age: 28
}

request("http://localhost:3000/save-user", 
    {method: "POST", form: data},
    (err, res, body) => {
        if(err) throw err;
    }
);