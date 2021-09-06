var express = require("express");
var app = express(); // tao 1 ung dung tu express module
var port = process.env.PORT || 4000;
app.listen(port,function (){
    console.log("Server is running....");
});
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function (req,res){ // trang chu
    //res.send("Trang chu");
    res.render("home")
});
app.get("/cart-items",function (req,res){ // trang chu
    //res.send("Trang chu");
    res.render("cart-items")
});
app.get("/header",function (req,res){ // trang chu
    //res.send("Trang chu");
    res.render("header")
});
app.get("/footer",function (req,res){ // trang chu
    //res.send("Trang chu");
    res.render("footer")
});
app.get("/product-cart",function (req,res){ // trang chu
    //res.send("Trang chu");
    res.render("product-cart")
});
app.get("/products",function (req,res){ // trang chu
    //res.send("Trang chu");
    res.render("products")
});
app.get("/account",function (req,res) { // trang chu
    //res.send("Trang chu");
    res.render("Account")
});