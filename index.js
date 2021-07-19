var express = require("express");
var app = express();
var port = process.env.PORT || 7000;

app.listen(port, function () {
	console.log("Server is runing...");
});

app.use(express.static("public")); //cấp quyền cho user truy cập các file trong thư mục public
app.set("view engine", "ejs");
var count = 13579;


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
app.get("/be-stronger", function (req, res) {   //route url cho các trang nhánh
	count++;
	res.render("be-stronger", {
		count: count,
	});
});
app.get("/healthy-life", function (req, res) {   //route url cho các trang nhánh
	count++;
	res.render("healthy-life", {
		count: count,
	});
});
app.get("/healthy-life-news", function (req, res) {   //route url cho các trang nhánh
	count++;
	res.render("healthy-life-news", {
		count: count,
	});
});
app.get("/healthy-foods", function (req, res) {   //route url cho các trang nhánh
	count++;
	res.render("healthy-foods", {
		count: count,
	});
});

app.get("/healthy-recipes", function (req, res) {   //route url cho các trang nhánh
	count++;
	res.render("healthy-recipes", {
		count: count,
	});
});

app.get("/nutrition-facts", function (req, res) {   //route url cho các trang nhánh
	count++;
	res.render("nutrition-facts", {
		count: count,
	});
});

app.get("/virtual-event", function (req, res) {   //route url cho các trang nhánh
	count++;
	res.render("virtual-event", {
		count: count,
	});
});