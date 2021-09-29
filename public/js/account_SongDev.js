var LoginForm =document.getElementById("LoginForm");
var  RegForm = document.getElementById("RegForm");
let titleLogin = document.getElementById('titleLogin');
let titleReg = document.getElementById('titleReg');


function login(){
    RegForm.style.transform ="translateX(0px)";
    LoginForm.style.transform ="translateX(0px)";
    titleLogin.classList.add("active");
    titleReg.classList.remove("active");
}

function register(){
    RegForm.style.transform ="translateX(300px)";
    LoginForm.style.transform ="translateX(300px)";
    titleLogin.classList.remove("active");
    titleReg.classList.add("active");
}


//
function validation(){
    var username = 'admin';
    var password = '123123';

    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;



    if ((username == userName) && (password == passWord)) {
        swal("Good job", " you success to login", "success"
        ).then(function() {
            window.location = "https://garments-shop.herokuapp.com/";
        });}
    else {
        sweetAlert("Oops", "Username or Password was wrong", "error");
    }

}
function reg(){
    swal("Good job!", "You clicked the button!", "success");
}
