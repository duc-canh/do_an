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