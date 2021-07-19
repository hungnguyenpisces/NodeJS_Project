var express = require("express");
var app = express();
var port = process.env.PORT || 7000;

app.listen(port, function() {
    console.log("Server is runing...");
});

app.use(express.static("public")); //cấp quyền cho user truy cập các file trong thư mục public
app.set("view engine", "ejs");
var count = 13579;


app.get("/", function(req, res) { //route homepage url
    count++;
    res.render("home", {
        count: count,
    });
});
app.get("/user", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("user", {
        count: count,
    });
});

app.get("/calc", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("calc", {
        count: count,
    });
});
app.get("/be-stronger", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("be-stronger", {
        count: count,
    });
});
app.get("/healthy-life", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("healthy-life", {
        count: count,
    });
});
app.get("/healthy-foods", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("healthy-foods", {
        count: count,
    });
});
app.get("/gym", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("gym", {
        count: count,
    });
});
app.get("/yoga", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("yoga", {
        count: count,
    });
});
app.get("/arobic", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("arobic", {
        count: count,
    });
});
app.get("/gym-post", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("gym-post", {
        count: count,
    });
});
app.get("/event", function(req, res) { //route url cho các trang nhánh
    count++;
    res.render("event", {
        count: count,
    });
});