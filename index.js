var express = require("express");
var morgan = require("morgan");
var app = express();
var port = 7000;

app.use(morgan("dev"));

app.listen(port, function () {
	console.log("Server is runing...");
});

app.use(express.static("public")); //cấp quyền cho user truy cập các file trong thư mục public
app.set("view engine", "ejs");
var count = 0;


app.get("/", function (req, res) { //route homepage url
	count++;
	res.render("home", {
		count: count,
	});
});
app.get("/user", function (req, res) { //route url cho các trang nhánh
	count++;
	res.render("user", {
		count: count,
	});
});

app.get("/calc", function (req, res) {   //route url cho các trang nhánh
	count++;
	res.render("calc", {
		count: count,
	});
});
