var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var port = 2000;

app.set('view engine', 'ejs');

// Los estaticos
//app.use(express.static(__dirname + '/views'));
app.set('view engine', 'jade');

router.use(function (req, res, next) {
	next();
});

router.get("/", function (req, res) {
	res.render(path + "index", { title: 'Despegar', message: 'Hello there!'});
});

app.use("/", router);

app.use("/libs", express.static('public/vendor'));

app.use("*", function (req, res) {
	res.render(path + "404", { title: 'Hey', message: 'Hello there!'});
});

app.listen(port, function () {
	console.log("Live at Port", port);
});
