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
app.get("/product-details",function (req,res) { // trang chu
    //res.send("Trang chu");
    res.render("Product-Details")
});
app.get("/contact",function (req,res) { // trang chu
    //res.send("Trang chu");
    res.render("contact")
});
app.get("/about",function (req,res) { // trang chu
    //res.send("Trang chu");
    res.render("about")
});
var mssql = require("mssql");

var ConnectionConfig = {
    server: 'DESKTOP-V4TRK5T',
    authentication: { type: 'default', options: { userName: 'sa', password: '123a' } },
    database:'garments',
    options: { encrypt:false }}

// ket noi voi database
mssql.connect(ConnectionConfig,function (err){
    if(err) console.log(err);
    else console.log("connected database!");
})
var sql = new mssql.Request();

app.get("/khach-hang",function (req,res){
    // can lay danh sach khach hang
    var kw = req.query.keyword||"";
    var txt_sql = "select * from eSanPham where TenSP like '%"+kw+"%';";
    sql.query(txt_sql,function (err,rs){ // callback
        if(err) res.status(404).send('Not found?');
        else res.render("sanpham",{
            hanghoa:rs.recordset
        });// rows.recordset : 1 array, mỗi element là 1 object từ table
    })
});