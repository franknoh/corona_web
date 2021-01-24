var express = require("express");
var request = require("request")
var app = express();
var port = process.env.PORT || 3000;
const bp = require('body-parser')
const cors = require('cors')
const corsOptionsDelegate = (req, callback) => {
    corsOptions = { origin: true }
    callback(null, corsOptions)
}


app.use(cors(corsOptionsDelegate));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
// firebase

app.listen(port, () => {
    console.log("Server running on port 3000");
});

app.get("/all", async (req, res) => {
    request({
        // url에 url입력!
        url: 'https://api.corona-19.kr/korea/?serviceKey=cec0cc672e38cd7b84ba1d2b04de9af04',
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            return res.status(200).send(body);
        }
    })
});

app.get("/con", async (req, res) => {
    request({
        // url에 url입력!
        url: 'https://api.corona-19.kr/korea/country/new/?serviceKey=cec0cc672e38cd7b84ba1d2b04de9af04',
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            return res.status(200).send(body);
        }
    })
});